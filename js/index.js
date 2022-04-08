$(document).ready(function(){

   $('#resMenuBtn').click(function(){
       $('.navigation').addClass('showResMenu')
   })
   $('#closeResMenu').click(function(){
     $('.navigation').removeClass('showResMenu')
   })
})