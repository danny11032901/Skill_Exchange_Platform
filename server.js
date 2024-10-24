const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path'); // For handling file paths

const app = express();
const port = 3000; // Define the port

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/danish_data_website', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'))); // Ensure 'public' is the folder where your CSS is located

// User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Serve the signup_danish.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Signup_danish.html')); // Ensure the path to the HTML file is correct
});

// Register User
app.post('/register', async (req, res) => {
    const { username, email, password, confirm_password } = req.body;
    const errors = [];

    // Form validation
    if (!username || !email || !password || !confirm_password) {
        errors.push("All fields are required");
    }

    // Check if passwords match
    if (password !== confirm_password) {
        errors.push("Passwords do not match");
    }

    // Check if username or email already exists
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
        if (userExists.username === username) errors.push("Username already exists");
        if (userExists.email === email) errors.push("Email already exists");
    }

    // Register the user if no errors
    if (errors.length === 0) {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save(); // Save user to the database
        return res.redirect('/?registered=success'); // Redirect to the signup page
    } else {
        // Handle errors
        res.status(400).json({ errors });
    }
});

// Login User
app.post('/login', async (req, res) => {
    const { login_email, login_password } = req.body;
    const errors = [];

    // Log incoming request body for debugging
    console.log(req.body);

    // Ensure both fields are filled
    if (!login_email || !login_password) {
        errors.push("Both fields are required");
    }

    // If no errors, proceed to check the user's credentials
    if (errors.length === 0) {
        const user = await User.findOne({ email: login_email });
        if (user && await bcrypt.compare(login_password, user.password)) {
            // Set session variables
            req.session.username = user.username;
            return res.redirect('/home'); // Redirect to home page
        } else {
            errors.push("Incorrect email or password");
        }
    }

    // Handle errors
    res.status(400).json({ errors });
});

// Home Page (Protected Route)
app.get('/home', (req, res) => {
    if (!req.session.username) {
        return res.redirect('/'); // Redirect to signup page if not logged in
    }
    res.sendFile(path.join(__dirname, 'final_home.html')); // Serve the final home page
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
