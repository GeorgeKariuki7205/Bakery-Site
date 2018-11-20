$(function(){
    var ul = $('#ingredients');
    var cake_name= $('#cake-name').text();
    var cake = $('#cake').attr('value');
    console.log(cake_name);
    console.log(cake);
    $('#onekg').on('click',function(){
        window.location = 'purchase.html';
    });
});