$(function(){
    $('.burger_btn').click(function(){
        $('.nav_container').toggleClass('open');
        $('.bar').toggleClass('open_bar');
        // $('.nav_container').slideToggle();
    });


    // qa
    $('.qa_title').click(function(){
        $(this).next().toggleClass('sp_height');
    });
});