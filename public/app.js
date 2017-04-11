console.log(sanity check);
$(document).ready(function(){
  $('#guess-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      // What kind of request
      method: 'POST',
      // The URL for the request
      url: '/pickanumber',
      // The type of data we want back
      dataType: 'json',
      data: $('#guess-number-form').serialize(),
  // Code to run if the request succeeds; the JSON
  // response is passed to the function as an argument.
      success: onSuccess,
      error: onError
    });
  });
        function onSuccess(guessInput){
          $('#guessHere').html(guessInput);
            console.log(guessInput);
        }
        function onError(jqXHR, status, error){
          console.log('error:', error);
        }
});
// defining the callback function that will happen
// if the request succeeds.
