const skillDescr = (selector, descrSelector) => {
    const select = document.querySelectorAll(selector),
          descr = document.querySelectorAll(descrSelector);

    select.forEach((sel, i) => {
        sel.addEventListener('click', () => {
            if (sel.classList.contains("border-yellow")) {
                sel.classList.remove('border-yellow', '.animate__animated', 'animate__fadeIn');
                descr[i].style.display = 'none';
            } else {
                select.forEach(item => {
                    item.classList.remove('border-yellow', '.animate__animated', 'animate__fadeIn');
                });
                sel.classList.add('border-yellow', '.animate__animated', 'animate__fadeIn');

                descr.forEach(item => {
                    item.style.display = 'none';
                });
                descr[i].style.display = 'block';
            }
            
        });
    });
}

export default skillDescr;