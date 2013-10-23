$(document).ready(function() {

  // Selecting by element name and manipulating the text
  $('h3').text('jQuery is working!');

  // Selecting by class and applying a style
  $('.great-list').css('border', '2px solid red');

  // Traversing and adding style
  $('.great-list li:last-child').css('color', 'blue');

  // Append element
  $('ul').append('<li>Brand new list-item.</li>');
  $('ul li:last-child').css({'font-family': 'Futura'});
  // Prepending
  $('.great-list').prepend('<p>This is the header paragraph of our list</p>');
  $('p').css('font-size', '18px');

  // Add class
  $('div:last').addClass('button');

  // Removing on click
  $('.button').on('click', function() {
    $('.button').remove();
  });
});
