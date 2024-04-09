$(function() {
    const tabBtn = document.querySelectorAll('.tabs__list-item');
    const tabContent = document.querySelectorAll('.tabs-inner');

    tabBtn.forEach(function(element) {
        element.addEventListener('click', slickContent);
    });


    /* Menu Nav Toggle*/
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();         /* убираем стандартное поведение кнопки*/

        $(this).toggleClass("active");
        $("#menu-toggle").toggleClass("active");
    });   


    function slickContent(evt) {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        tabBtn.forEach(function(item) {
            item.classList.remove('active');
        });
        tabContent.forEach(function(item) {
            item.classList.remove('active');
        });

        tabTarget.classList.add('active');
        document.querySelector(`#${button}`).classList.add('active');

    };

});
 

