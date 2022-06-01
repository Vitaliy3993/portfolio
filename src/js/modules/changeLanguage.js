const changeLang = () => {
    const langTrigger = document.querySelectorAll('.menu__trigger__lang');
    const langClassUa = document.querySelectorAll('.lang-ua'),
          langClassRu = document.querySelectorAll('.lang-ru');

    langClassRu.forEach(lang => {
        lang.style.display = 'none';
    });

    langTrigger.forEach((trigger, i) => {
        trigger.addEventListener('click', (e) => {
            langTrigger.forEach(item => {
               item.classList.remove('menu__trigger__lang__active'); 
            })
            e.target.classList.add('menu__trigger__lang__active');

            if (e.target.classList.contains('language-ru')) {
                langClassUa.forEach(lang => {
                    lang.style.display = 'none';
                    langClassRu.forEach(lang => {
                        lang.style.display = '';
                    });
                });
            } else {
                langClassRu.forEach(lang => {
                    lang.style.display = 'none';
                    langClassUa.forEach(lang => {
                        lang.style.display = '';
                    });
                });
            }
        });
    })
}

export default changeLang;