const animationTextInterval = (textAnimation) => {
    const title = document.querySelector(textAnimation);

    setInterval(function() {
        title.classList.remove('animate__fadeInUp');
        title.classList.toggle('animate__fast');
        title.classList.toggle('animate__flash');
    }, 5000);
}

export default animationTextInterval;