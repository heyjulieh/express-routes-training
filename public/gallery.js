console.log('sanity check');
$(document).ready(function(){
  $('#gallery-form').on('submit', addArt);
  });
  function addArt(event){
    $.ajax({
      // What kind of request
      method: 'POST',
      // The URL for the request
      url: 'localhost:5000/art-gallery',
      // The type of data we want back
      // dataType: 'json',
      data: $('gallery-form').serialize(),
  // Code to run if the request succeeds; the JSON
  // response is passed to the function as an argument.
      success: onSuccess,
      error: onError
    });
  }
  //on success add art-related inputs as a list array
        function onSuccess(artInput){
          var artList = $('#galleryArr');
          artList.html(artInput.map(getSummary));
        }
        function getSummary(art){
          return `<li>${art.name} by ${art.artist}</li>`;
        }
        function onError(jqXHR, status, error){
          console.log('error:', error);
        }
});
