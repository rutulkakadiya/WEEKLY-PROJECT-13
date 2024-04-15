$(window).scroll(function()
{
    $('.main4').toggleClass('background',$(this).scrollTop()>3100);
});