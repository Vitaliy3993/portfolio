const menu = () => {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay');


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
    });

    function closeMenu() {
        closeElem.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
        overlay.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    closeMenu();
}

export default menu;