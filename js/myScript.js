jQuery(function () {
  jQuery(".button-med").click(function () {
    var video = $('#video');
    video.attr('src', $(this).attr("target"));
    video[0].load();
  });

  jQuery(".sad").click(function () {
    jQuery(".single-s").hide();
    jQuery(".image-s" + $(this).attr("target")).show();
  });

  jQuery(".anger").click(function () {
    jQuery(".single-a").hide();
    jQuery(".image-a" + $(this).attr("target")).show();
  });

  jQuery(".tense").click(function () {
    jQuery(".single-t").hide();
    jQuery(".image-t" + $(this).attr("target")).show();
  });

  jQuery(".relax").click(function () {
    jQuery(".single-r").hide();
    jQuery(".image-r" + $(this).attr("target")).show();
  });

  jQuery(".happy").click(function () {
    jQuery(".single-h").hide();
    jQuery(".image-h" + $(this).attr("target")).show();
  });
});
