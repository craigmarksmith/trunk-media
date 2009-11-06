TrunkFilm = {}
TrunkFilm.Movies = {
  
  init: function(){
    $('#scroll-left').click(TrunkFilm.Movies.scrollLeft);
    $('#scroll-right').click(TrunkFilm.Movies.scrollRight);
  },
  
  scrollLeft: function(){
    TrunkFilm.Movies.scroll('-=550px');
  },
  
  scrollRight: function(){
    TrunkFilm.Movies.scroll('+=550px');
  },
  
  scroll: function(scroll_amount){
    $('#movies').animate({
      marginLeft: scroll_amount
    }, 1000);
  }
}

$(document).ready(TrunkFilm.Movies.init);

