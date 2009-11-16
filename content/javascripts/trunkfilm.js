TrunkFilm = {}
TrunkFilm.Movies = {
  amount_to_move: 903,
  
  init: function(){
    current_position = 0;
    $('#scroll-left').click(TrunkFilm.Movies.scrollLeft);
    $('#scroll-right').click(TrunkFilm.Movies.scrollRight);
    $('.scroll-ball').click(TrunkFilm.Movies.scrollToMe);
  },

  scrollLeft: function(){
    if(current_position > 0){
      TrunkFilm.Movies.scroll('+='+TrunkFilm.Movies.amount_to_move+'px');
      current_position -= 1;
      TrunkFilm.Movies.selectScrollBall(current_position, current_position+1);
    }
    return false;
  },

  scrollRight: function(){
    if(current_position < ($('.movie').size()-1)){
      TrunkFilm.Movies.scroll('-='+TrunkFilm.Movies.amount_to_move+'px');
      current_position += 1;
      TrunkFilm.Movies.selectScrollBall(current_position, current_position-1);
    }
    return false;
  },

  scrollToMe: function(){

    var old_current_position = current_position;
    current_position = parseInt(this.innerHTML);

    if(old_current_position == current_position)
      return;

    $('.scroll-ball').removeClass('selected');
    $($('.scroll-ball')[current_position]).addClass('selected');

    sign = old_current_position < current_position ? '+' : '-';
    amount_moved = old_current_position < current_position ? old_current_position-current_position : current_position-old_current_position
    amount_to_move = TrunkFilm.Movies.amount_to_move*amount_moved;
    TrunkFilm.Movies.scroll(sign+'='+amount_to_move+'px');

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

