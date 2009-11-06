TrunkFilm = {}
TrunkFilm.Movies = {
  
  init: function(){
    current_position = 0;
    $('#scroll-left').click(TrunkFilm.Movies.scrollLeft);
    $('#scroll-right').click(TrunkFilm.Movies.scrollRight);
  },
  
  scrollLeft: function(){
    if(current_position > 0){
      TrunkFilm.Movies.scroll('+=703px');
      current_position -= 1;
    }
  },
  
  scrollRight: function(){
    if(current_position < ($('#movies object').size()-1)){
      TrunkFilm.Movies.scroll('-=703px');
      current_position += 1;
    }
  },
  
  scroll: function(scroll_amount){
    $('#movies').animate({
      marginLeft: scroll_amount
    }, 1000);
  }
}

$(document).ready(TrunkFilm.Movies.init);

