$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

var fixNavBar=function(pos,target){
  var position=$(pos).scrollTop();
  if(position>target){
    $('.navbar').addClass('changeColor');
  }
  else{
    if( $('.navbar').hasClass('changeColor')){
    $('.navbar').removeClass('changeColor');
  }
  }
}
$(window).scroll(function(){
  fixNavBar(window,100);});



$('#navbar > ul.navbar-nav li').click(function(e) {
    $('.navbar-nav li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});