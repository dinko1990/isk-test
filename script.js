(function ($) {

  $.fn.timeline = function () {
    var sel = {
      id:          $(this),
      item:        $(this).find('.timeline-item'),
      activeClass: 'timeline-item--active',
      img:         '.timeline__img'
    };

    sel.item.eq(0).addClass(sel.activeClass);
    sel.id.css('background-image',
      'url(' + sel.item.first().find(sel.img).attr('src') + ')');

    var len = sel.item.length;

    function openOverlay(src) {
      $('.zoomed-image').attr('src', src);
      $('.zoomed-container').fadeIn(150);
    }
    function closeOverlay() {
      $('.zoomed-container').fadeOut(150, function () {
        $('.zoomed-image').attr('src', '');
      });
    }

    $(document).on('click', '.timeline__img', function () {
      openOverlay($(this).attr('src'));
    });
    $(document).on('click', '.zoomed-container', function (e) {
      if ($(e.target).hasClass('zoomed-container')) closeOverlay();
    });
    $(document).on('click', '.xBtn', closeOverlay);
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape') closeOverlay();
    });

    // scroll-driven background swap
    $(window).on('scroll', function () {
      var pos = $(this).scrollTop();
      sel.item.each(function (i) {
        var min = $(this).offset().top;
        var max = min + $(this).height();
        if (i === len - 2 && pos > min + $(this).height() / 2) {
          sel.item.removeClass(sel.activeClass);
          sel.id.css('background-image',
            'url(' + sel.item.last().find(sel.img).attr('src') + ')');
          sel.item.last().addClass(sel.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          sel.id.css('background-image',
            'url(' + $(this).find(sel.img).attr('src') + ')');
          sel.item.removeClass(sel.activeClass);
          $(this).addClass(sel.activeClass);
        }
      });
    });
  };

  // Hamburger nav toggle
  $(document).ready(function () {
    var $nav    = $('#mainNav');
    var $toggle = $('#navToggle');

    $toggle.on('click', function () { $nav.toggleClass('open'); });
    $nav.find('a').on('click', function () { $nav.removeClass('open'); });
  });

})(jQuery);

$('#timeline-1').timeline();
