// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  // lightbox
  lightbox.option({
    // 'resizeDuration': 200,
    'alwaysShowNavOnTouchDevices': true
  });

  // delete button click
  $('.delete-button').on('click', deletePicture);
  function deletePicture(e) {
    e.preventDefault();
    $(this).addClass('deleting');
  }
  // popover active
  $('[data-toggle="popover"]').popover()

  // picture click
  $('.picture-box a').on('click', clickedPicture);
  function clickedPicture(e) {
    console.log(this);
    var deleteButton = $('.delete-button');
    if (deleteButton.hasClass('deleting')) {
      var realDeleteButton = $('.real-delete-button');
      realDeleteButton.attr('href', $(this).data('href'));
      realDeleteButton.click();

      deleteButton.removeClass('deleting');
    }
  }
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
