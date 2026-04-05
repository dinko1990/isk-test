document.addEventListener('DOMContentLoaded', function () {

  // ── thumbnail click → swap big image + reset zoom ──
  $('#small_image img').on('click', function () {
    var url = $(this).attr('src');
    var $big = $('#zoomed_image');
    $big.attr('src', url);
    // reset zoom
    currentZoomW = baseW;
    $big.css('width', currentZoomW + 'px');
  });

  // ── big image click → toggle between _1 / _2 versions (translated/original) ──
  $('#big_image img').on('click', function () {
    var src = $(this).attr('src');
    var newSrc;
    // Only toggle when the filename actually ends in 1.jpg / 2.jpg
    if (/1\.(jpg|jpeg|png)$/i.test(src)) {
      newSrc = src.replace(/1(\.(jpg|jpeg|png))$/i, '2$1');
    } else if (/2\.(jpg|jpeg|png)$/i.test(src)) {
      newSrc = src.replace(/2(\.(jpg|jpeg|png))$/i, '1$1');
    }
    if (newSrc) {
      // check the alt-version actually exists before swapping
      var img = new Image();
      img.onload  = function () { $('#zoomed_image').attr('src', newSrc); };
      img.onerror = function () { /* no alt version — do nothing */ };
      img.src = newSrc;
    }
  });

  // ── zoom in / out using image width (proper, scrollable) ──
  var $big  = $('#zoomed_image');
  var baseW = $big.width() || 600;   // natural rendered width
  var currentZoomW = baseW;
  var MIN_W = 200;
  var MAX_W = 3000;
  var STEP  = 120;   // px per click

  // update baseW once the image actually loads
  $big.on('load', function () {
    baseW = $(this).width();
    currentZoomW = baseW;
  });

  $('#zoomInButton').on('click', function () {
    currentZoomW = Math.min(currentZoomW + STEP, MAX_W);
    $big.css({ width: currentZoomW + 'px', height: 'auto' });
  });

  $('#zoomOutButton').on('click', function () {
    currentZoomW = Math.max(currentZoomW - STEP, MIN_W);
    $big.css({ width: currentZoomW + 'px', height: 'auto' });
  });

  // ── hamburger nav (used on all pages that include this file) ──
  var toggle = document.getElementById('navToggle');
  var nav    = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    // close when any link is tapped
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

});
