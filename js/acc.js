$(document).ready(function(){
    $('#acco').find('p').slideUp(1);
    $('#acco').find('h3').click(function(){
      if($(this).hasClass('active')){
        $(this).next().slideUp(200);
        $(this).removeClass('active');
      }else{
        $('#acco').find('h3').removeClass('active');
        $('#acco').find('p').slideUp(200);
        $(this).next().slideDown(400);
        $(this).addClass('active');
      }
    })
  });