$(function () {
  var $pics = $("#pics");

  function refreshPics (pics) {
    $pics.empty();
    $.each(pics, function (i, picUrl) {
      var $pic = $("<img>").attr("src", picUrl);
      $pics.append( $pic )
    })
  }

  $.ajax({
    url: '/image-links',
    dataType: 'json',
    success: refreshPics
  });

  $('form').submit(function (e) {
    e.preventDefault();

    var data = {
      url: this.elements.url.value
    }

    $.ajax({
      url: '/image-links',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify( data ),
      success: refreshPics
    });

    this.reset();
  })
});
