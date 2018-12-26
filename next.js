$(function(){
    var ul = $('#ingredients');
    var cake_name= $('#cake-name').text();
    var cake = $('#cake').attr('value');
    console.log(cake_name);
    console.log(cake);
    $('#onekg').on('click',function(){
       var confimation = confirm("ARE YOU SURE YOU WANT TO PURCHASE 1 Kg of  "+cake_name+" at");
       if(confimation === true){
               return true;
       }
       else{
        return false;
       }
    // alert(confimation);
    });
    $('#twokg').on('click',function(){
        var confimation = confirm("ARE YOU SURE YOU WANT TO PURCHASE 1 Kg of  "+cake_name+" at");
        if(confimation === true){
                return true;
        }
        else{
         return false;
        }
     // alert(confimation);
     });
     $('#threekg').on('click',function(){
        var confimation = confirm("ARE YOU SURE YOU WANT TO PURCHASE 1 Kg of  "+cake_name+" at");
        if(confimation === true){
                return true;
        }
        else{
         return false;
        }
     // alert(confimation);
     });
     $('#fourkg').on('click',function(){
        var confimation = confirm("ARE YOU SURE YOU WANT TO PURCHASE 1 Kg of  "+cake_name+" at");
        if(confimation === true){
                return true;
        }
        else{
         return false;
        }
     // alert(confimation);
     }); 
});