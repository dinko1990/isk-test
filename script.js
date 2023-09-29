(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
      xBtn: ".xBtn",
      hotspots_resurrection: ".hotspots_resurrection"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;

    // Function to open the container
    function openContainer(imgSrc) {
      $(".zoomed-image").attr("src", imgSrc);
      $(".zoomed-container").fadeIn();
    }

    // Function to close the container
    function closeContainer() {
      $(".xBtn").attr("src", "");
      $(".zoomed-container").fadeOut();
    }


    // Event handlers for image click and close button
    $(document).on("click", ".timeline__img", function() {
      var imgSrc = $(this).attr("src");
      openContainer(imgSrc);
    });

    // Event handler for clicking on the dark background
    $(document).on("click", ".zoomed-container", function(event) {
      // Check if the clicked element is the dark background
      if (
        $(event.target).hasClass("zoomed-container")
      ) {
        closeContainer();
      }
    });

    $(document).on("click", ".xBtn", function() {
      closeContainer();
    });

///Hotspots
    $(document).on("click", ".hotspots_resurrection", function() {

    });

    // Rest of your existing code for the timeline scroll
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };

  $(document).ready(function() {
    // Add an "active" class to the initially selected tab (e.g., Story)
    $("index.html").addClass("active");
    $("documents.html").addClass("active");

    // Event handlers for clicking on navigation links
    $(".navbar a").click(function() {
      // Remove the "active" class from all links
      $(".navbar a").removeClass("active");

      // Add the "active" class to the clicked link
      $(this).addClass("active");
    });
  });



  // JavaScript for the image modal
  var modal = document.querySelector(".image-modal");
  var modalImage = document.getElementById("modal-image");
  var captionText = document.getElementById("caption");

  // Function to open the modal
  function openModal(imageSrc, imageAlt, caption) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    captionText.innerHTML = caption;
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Function to handle clicks on timeline images
  var timelineImages = document.querySelectorAll(".timeline__img");
  timelineImages.forEach(function (image, index) {
    image.addEventListener("click", function () {
      // Replace with your image source, alt text, and caption
      var imageSrc = image.src;
      var imageAlt = "Image " + (index + 1);
      var caption = "Description for Image " + (index + 1);

      openModal(imageSrc, imageAlt, caption);
    });
  });




})(jQuery);


$("#timeline-1").timeline();
