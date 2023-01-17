let callBtn = document.querySelector('.call')
let closeBtn = document.querySelector('.overlay__close')
let overlay = document.querySelector('.overlay')


callBtn.onclick = function () {
    overlay.style.display = 'flex'
}

closeBtn.onclick = function () {
    overlay.style.display = 'none'
}

overlay.onclick = function (event) {
    if (event.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
    }
}
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

let burger = document.querySelector('.header__burger')
burger.onclick = function () {
    burger.classList.toggle('.active')
}