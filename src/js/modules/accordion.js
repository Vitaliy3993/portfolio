const accordion = (triggers, selector) => {
    const trggs = document.querySelectorAll(triggers),
          selectorName = document.querySelectorAll(selector);

    trggs.forEach((trigger, i) => {
        selectorName.forEach(sel => {
            sel.classList.add('hidden');
        });

        function openAccord() {
            selectorName[i].classList.add('active', '.animate__animated', 'animate__fadeIn');
            selectorName[i].classList.remove('hidden');
        }

        function closeAccord() {
            selectorName[i].classList.remove('active', '.animate__animated', 'animate__fadeIn');
            selectorName[i].classList.add('hidden');
        }

        trigger.addEventListener('click', () => {
            if (selectorName[i].classList.contains("hidden")) {
                openAccord();
            } else {
                closeAccord();
            }
        });
    });
}

export default accordion;