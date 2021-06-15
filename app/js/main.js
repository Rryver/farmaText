let langArray = [];

$('.country-picker__option').each(function(){
    let img = $(this).attr("img-src");
    let text = this.innerText;
    let value = $(this).val();
    let item =
        '<li class="country-picker__item">\n' +
        '<span class="country-picker__item-text">'+ text +'</span>\n' +
        '<img class="country-picker__item-icon" src="'+ img +'" value="'+ value +'">\n' +
        '</li>';
    langArray.push(item);
});

$('.country-picker__list-fake').html(langArray);

//Set the button value to the first el of the array
$(document).ready(function () {
    let optionitem = $('.country-picker__option:first-child');
    let btn =
        '<span class="country-picker__item-text">'+ optionitem.html() +'</span>\n' +
        '<img class="country-picker__item-icon" src="'+ optionitem.attr("img-src") +'">';
    $('.country-picker__btn-content').html(btn);
})


//change button stuff on click
$('.country-picker__item').click(function(){
    let img = $(this).find('img').attr("src");
    let text = this.innerText;
    let btn =
        '<span class="country-picker__item-text">'+ text +'</span>\n' +
        '<img class="country-picker__item-icon" src="'+ img +'">';
    $('.country-picker__btn-content').html(btn);
    $(".country-picker__list-fake").toggleClass("country-picker__list-fake_open");
    $('.country-picker__option').eq($(this).index()).prop('selected', true);
});

$(".country-picker__btn-fake").click(function(){
    $(".country-picker__list-fake").toggleClass("country-picker__list-fake_open");
});


