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
      TrunkFilm.Movies.selectScrollBall(current_position, current_position+1);
    }
    return false;
  },

  scrollRight: function(){
    if(current_position < ($('#movies object').size()-1)){
      TrunkFilm.Movies.scroll('-=703px');
      current_position += 1;
      TrunkFilm.Movies.selectScrollBall(current_position, current_position-1);
    }
    return false;
  },

  scroll: function(scroll_amount){
    $('#movies').animate({
      marginLeft: scroll_amount
    }, 1000);
  },

  selectScrollBall: function(current_position, previous_position){
    $($('.scroll-ball')[current_position]).addClass('selected');
    $($('.scroll-ball')[previous_position]).removeClass('selected');
  }
}

$(document).ready(TrunkFilm.Movies.init);

