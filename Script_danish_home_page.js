// JavaScript to move the background with cursor
const background = document.querySelector('.background');

document.addEventListener('mousemove', (e) => {
    let moveX = (e.pageX * -1 / 40);
    let moveY = (e.pageY * -1 / 40);
    background.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
