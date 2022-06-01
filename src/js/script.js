import menu from "./modules/menu";
import accordion from "./modules/accordion";
import scrolling from "./modules/scrolling";
import skillDescr from "./modules/skillDescr";
import slider from "./modules/slider";
import animationTextInterval from "./modules/animationTextInterval";
import changeLang from "./modules/changeLanguage";
import scrollHeightAnimation from "./modules/scrollHeightAnimation";
import mask from "./modules/mask";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    const percents = document.querySelectorAll('.skill__percent-number'),
          blocks = document.querySelectorAll('.skill__percent-block');

    percents.forEach((item, i) => {
        blocks[i].style.width = item.innerHTML;
    });

    
    

    $(document).ready(function(){
        $('form').submit(function(e) {
            e.preventDefault();
            
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input, textarea").val("");

                $('form').trigger('reset');
            });

            const modal = document.querySelector('.modal');
            modal.classList.add('active');
            setTimeout(function() {
                modal.classList.remove('active');
            }, 2000)

            return false;
        });
    });

    menu();
    accordion('.about__skill-main-wrapper', '.about__skill-accordeon');
    scrolling('.pageup');
    skillDescr('.skill__item', '.skill__descr');
    slider({
        container: '.portfolio__slider',
        slide: '.portfolio__image',
        nextArrow: '.chevron-right',
        prevArrow: '.chevron-left',
        wrapper: '.portfolio__window',
        field: '.porfolio__field'
    });
    animationTextInterval('[data-anime]');
    changeLang();
    scrollHeightAnimation('.skill__percents');
    scrollHeightAnimation('.price');
    mask('[name="phone"]');
});