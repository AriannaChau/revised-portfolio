$(document).ready(function(){

//scrolling//
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1800, function(){
        window.location.hash = hash;
      });
    }
  });
  $('#scrollButton').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 1000);
  });
});


//scroll button//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("scrollButton").style.display = "block";
    } else {
        document.getElementById("scrollButton").style.display = "none";
    }
}
