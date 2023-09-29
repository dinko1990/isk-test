document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here



$(function() {
  $('#small_image img').on('click', function() {
    var url = $(this).attr('src');
    $('#big_image img').attr('src', url);
  })
})

$(function() {
  // Click event handler for the big image
  $('#big_image img').on('click', function() {
    // Get the current image source
    var currentSrc = $(this).attr('src');

    // Check if the current source contains "_1" in its filename
    if (currentSrc.includes('1')) {
      // If it does, remove "_1" from the source to revert to the original image
      var originalSrc = currentSrc.replace('1', '2');
      $(this).attr('src', originalSrc);

    }
    if (currentSrc.includes('2')) {
      // If it does, remove "_1" from the source to revert to the original image
      var originalSrc = currentSrc.replace('2', '1');
      $(this).attr('src', originalSrc);
    }
  });

$('#big_image img').hover(function() {
    // Get the current image source
    var currentSrc = $(this).attr('src');

    // Check if the current source contains either '1' or '2' in its filename
    if (currentSrc.includes('1') || currentSrc.includes('2')) {
      $(this).css('cursor', 'pointer'); // Change the cursor to pointer when hovering
      $(this).css('transform', 'scale(1.01)'); // Scale the image up by 107% on hover
      $(this).css('transition', 'transform 0.3s ease'); // Add the transition

/* Add a dark box shadow on hover */


    }
  }, function() {
    // Revert the cursor style to the default when not hovering
    $(this).css('cursor', 'default');
    $(this).css('transform', 'scale(1)'); // Revert to the original scale

  });

});



// Get references to the image and buttons
const image = document.getElementById('zoomed_image');
const zoomInButton = document.getElementById('zoomInButton');
const zoomOutButton = document.getElementById('zoomOutButton');

// Initial zoom level (1 represents the original size)
let zoomLevel = 1;

// Function to zoom in
zoomInButton.addEventListener('click', () => {
    zoomLevel += 0.1; // Increase the zoom level
    image.style.transform = `scale(${zoomLevel})`; // Apply the zoom
});

// Function to zoom out
zoomOutButton.addEventListener('click', () => {
    zoomLevel -= 0.1; // Decrease the zoom level
    image.style.transform = `scale(${zoomLevel})`; // Apply the zoom
});

});
