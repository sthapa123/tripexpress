$(document).ready(function(){ 
	$("#check").click(function()
    {     
      $("#from_results").html('');
      $("#return_results").html('');
      $('#book_ticket').attr('disabled','disabled');

      
     $.ajax({
         type: "POST",
         url: base_url + "bookings/ajax_check_tours", 
         data: {from: $("#from").val(), to: $("#to").val()},
         dataType: 'json',  
         cache:false,
         success: 
            function(data){
              var obj = jQuery.parseJSON(data);
              $.each( obj, function( key, value ) {
              var to_info = value.split('|');
              $("#from_results").append('<div class="radio list-group-item"><label> <input type="radio" name="choose_from" id="choose_from" value="' + key + '" >Date: ' + to_info[0] + '<br/> Price: ' + to_info[1] + ' ' + currency + '</label></div> ' ); //.hide().slideDown('slow') to add effects but I have to remember to use the hide() first
             });
            }
    });// .ajax
     return false;
	});
});