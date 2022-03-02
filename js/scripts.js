console.log("teste");

//filtro vendas//

$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'seed-btn') {
      eachBoxes('seed', boxes);
    } else if(type == 'bug-btn') {
      eachBoxes('bug', boxes);
    } else if(type == 'fert-btn') {
      eachBoxes('fert', boxes);
    } else if(type == 'bio-btn') {
      eachBoxes('bio', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }
