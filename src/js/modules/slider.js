const slider = ({container, slide, nextArrow, prevArrow, wrapper, field}) => {
    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;
    let slideIndex = 1;
    let paused = false;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    // slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');

    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = '1';
        }

        indicators.append(dot);
        dots.push(dot);
    }

    function dotsOpacity() {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = replaceWidth(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            dotsOpacity();
        });
    });

    function replaceWidth(str) {
        if (document.documentElement.offsetWidth < 600) {
            return +str.replace(/\D/g, '').slice(0, 3); 
        } else {
          return +str.replace(/\D/g, '');
        }
        
    }

    function nextBtnSlide() {
        if (offset == parseFloat(replaceWidth(width)) * (slides.length - 1)) {
            offset = 0;
            } else {
                offset += parseFloat(replaceWidth(width));
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;
    
            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
        }

        dotsOpacity();
    }

    let timerSlide = setInterval(nextBtnSlide, 6000);

    next.addEventListener('click', () => {
        nextBtnSlide();  
    });

    slider.addEventListener('mouseenter', () => {
        clearInterval(timerSlide);
    });
    slider.addEventListener('mouseleave', () => {
        timerSlide = setInterval(nextBtnSlide, 5000);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = replaceWidth(width) * (slides.length - 1);
        } else {
            offset -= replaceWidth(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    });
}

export default slider;