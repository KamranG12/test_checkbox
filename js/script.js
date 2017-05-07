$(document).ready(function() {
	var click=0;
    $('.panel-heading').click(function() {
    	click++;
       $(".panel-body").slideToggle("slow");
       if(click%2!=0){
       	  $('.plus').css('display','none');
          $('.minus').css('display','block');
       }else{
       	  $('.plus').css('display','block');
          $('.minus').css('display','none');
       }
    });


    $('.save').click(function(){
       if($('.tokenid').val()==''){
           $('.tokenid').attr('value','The text field is required.').css('color','red');
       }
   })
    $('.tokenid').click(function(){
       if($('.tokenid').val()=='The text field is required.'){
           $('.tokenid').attr('value','').css('color','black');;
       }
   })

    

    var select=0;
    $('input[type=checkbox]').click(function(){
      if($(this).is(':checked')){
        select++;
      }else{
        select--;
      }
      if(select==1){
        $('.edit').removeAttr('disabled','disabled');
      }else{
         $('.edit').attr('disabled','disabled');
      }
      if(select>0){
        $('.delete').removeAttr('disabled','disabled');
      }else{
        $('.delete').attr('disabled','disabled');
      }
    })


    $(".select_all").click(function(){
    $('input:checkbox').not(this).prop('checked', this.checked);
    var count = $("[type='checkbox']:checked").length;
       $('.edit').attr('disabled','disabled');
    });
   
}); 