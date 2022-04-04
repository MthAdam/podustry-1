$(function(){
    $('#menu_btn').on('click', function(){
        $('#main_menu ul').toggleClass('active')
        $('nav .logo').toggleClass('active_logo')
    })
})