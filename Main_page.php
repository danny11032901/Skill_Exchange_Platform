<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skill Exchange Platform</title>
    <!-- Link to external CSS -->
    <link rel="stylesheet" href="test1.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="Skill_Exchange2.png" width="120" height="50" alt="Skill Exchange Logo">
        </div>
        <nav>
            <ul class="navbar">
                <li class="dropdown">
                    <a href="#">Categories <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content">
                        <ul>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Finance & Accounting</a></li>
                            <li><a href="#">IT & Software</a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">IT Certifications</a></li>
                                    <li><a href="#">Network & Security</a></li>
                                    <li><a href="#">Hardware</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Office Productivity</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="Danish_points_new.html">Points</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="somethingnew.html">New</a></li>
                <li><a href="admin.html" id="admin">Admin Dashboard</a></li>
            </ul>
        </nav>
        <div class="search-container">
            <input type="text" placeholder="Search for skills...">
            <button class="search-button">&#128269;</button>
        </div>
        <div class="buttons">
            <button class="profile-button">Profile</button>
            <button class="login-button" onclick="window.location.href='Danish_Signin_SignUp.html';">Login</button>
        </div>
    </header>

    <section id="hero">
        <div class="container">
            <h2>Learn. Teach. Grow Together.</h2>
            <p>A platform where you can exchange skills with others and become the master of a new craft while teaching others your unique talents.</p>
            <a href="#about" class="cta-btn">Discover More</a>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>About Skill Exchange</h2>
            <div class="subsection image-container">
                <div class="text-overlay">
                    <h3>Why Choose Us?</h3>
                    <p>We focus on providing quality learning experiences through peer-to-peer interaction, hands-on projects, and expert guidance.</p>
                </div>
            </div>
            <div class="subsection image-container">
                <div class="text-overlay">
                    <h3>How It Works?</h3>
                    <p>You can browse a variety of skills offered by others, book sessions with experts, or offer your own skills to others. Whether you want to learn coding, painting, or yoga, there’s something for everyone!</p>
                </div>
            </div>
        </div>
    </section>

    <section id="trending-skills">
        <div class="container">
            <h2>Trending Now</h2>
            <div class="trending-content">
                <div class="trending-category">
                    <h3>ChatGPT is a top skill</h3>
                    <a href="#">See ChatGPT courses &rarr;</a>
                    <p>3,588,321 learners</p>
                </div>
                <div class="trending-category">
                    <h4>Development</h4>
                    <ul>
                        <li><a href="#">Python</a> - 45,904,771 learners</li>
                        <li><a href="#">Web Development</a> - 13,607,688 learners</li>
                        <li><a href="#">Data Science</a> - 7,441,543 learners</li>
                    </ul>
                </div>
                <div class="trending-category">
                    <h4>Design</h4>
                    <ul>
                        <li><a href="#">Blender</a> - 2,756,260 learners</li>
                        <li><a href="#">Graphic Design</a> - 4,340,709 learners</li>
                        <li><a href="#">UX Design</a> - 1,990,703 learners</li>
                    </ul>
                </div>
                <div class="trending-category">
                    <h4>Business</h4>
                    <ul>
                        <li><a href="#">PMP Certification</a> - 2,389,518 learners</li>
                        <li><a href="#">Power BI</a> - 4,288,099 learners</li>
                        <li><a href="#">Project Management</a> - 3,705,829 learners</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="service-wrapper">
                <div class="service-box image-container">
                    <img src="cool-background.png" alt="Learn Skills" class="service-img">
                    <div class="text-overlay">
                        <h3>Learn Skills</h3>
                        <p>Choose from a variety of skills taught by experts and learners just like you.</p>
                    </div>
                </div>
                <div class="service-box image-container">
                    <img src="cool-background.png" alt="Teach Skills" class="service-img">
                    <div class="text-overlay">
                        <h3>Teach Skills</h3>
                        <p>Offer your expertise and help others learn from your experiences.</p>
                    </div>
                </div>
                <div class="service-box image-container">
                    <img src="cool-background.png" alt="Community Engagement" class="service-img">
                    <div class="text-overlay">
                        <h3>The Community</h3>
                        <p>Join us, and upgrade your skills to new levels.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-container">
            <p>Top companies choose <a href="#">Skill Exchange Business</a> to build in-demand career skills.</p>
            <div class="footer-links">
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    </footer>

    <script src="test1.js"></script>
</body>
</html>
