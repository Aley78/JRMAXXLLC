(function ($) {
  const wdtInteractiveShowcaseWidgetHandler = function ($scope, $) {
    const $showcaseItem = $scope.find(".wdt-interactive-showcase-container");
    const $hover_and_click = $showcaseItem.data("click");

    var hover_content_section = $showcaseItem.find("ul li");
    var image_content_section = $showcaseItem
      .find(".wdt-interactive-showcase-content-wrapper")
      .find("div");

    $showcaseItem
      .find("ul li:first-child")
      .addClass("wdt-interactive-showcase-active");
    $showcaseItem
      .find(".wdt-interactive-showcase-content-wrapper")
      .find("div:first-child")
      .addClass("wdt-interactive-showcase-active");

    if ($hover_and_click) {
      // Content on click
      hover_content_section.click(function () {
        var content_id_name = $(this).attr("id");
        if (!$(this).hasClass("wdt-interactive-showcase-active")) {
          $showcaseItem
            .find("ul li")
            .removeClass("wdt-interactive-showcase-active");
          $showcaseItem
            .find(".wdt-interactive-showcase-content-wrapper")
            .find("div")
            .removeClass("wdt-interactive-showcase-active");
          $(this).addClass("wdt-interactive-showcase-active");

          image_content_section.each(function () {
            var this_image = $(this);
            var image_id_name = this_image.attr("id");
            if (image_content_section.is("#" + content_id_name)) {
              if (image_id_name == content_id_name) {
                this_image.addClass("wdt-interactive-showcase-active");
              } else {
                this_image.removeClass("wdt-interactive-showcase-active");
              }
            }
          });
        }

        // Descp Onclick Callback Function

        animateIntreactiveDescription();
      });

      // End
    } else {
      // Content on hover
      hover_content_section.mouseover(function () {
        var content_id_name = $(this).attr("id");
        if (!$(this).hasClass("wdt-interactive-showcase-active")) {
          $showcaseItem
            .find("ul li")
            .removeClass("wdt-interactive-showcase-active");
          $showcaseItem
            .find(".wdt-interactive-showcase-content-wrapper")
            .find("div")
            .removeClass("wdt-interactive-showcase-active");
          $(this).addClass("wdt-interactive-showcase-active");

          image_content_section.each(function () {
            var this_image = $(this);
            var image_id_name = this_image.attr("id");
            if (image_content_section.is("#" + content_id_name)) {
              if (image_id_name == content_id_name) {
                this_image.addClass("wdt-interactive-showcase-active");
              } else {
                this_image.removeClass("wdt-interactive-showcase-active");
              }
            }
          });
        }

        // Descp Onclick Callback Function

        animateIntreactiveDescription();
      });
    }

    // Custom Accordion Style

    $(document).ready(function () {
      animateIntreactiveDescription();
    });

    function animateIntreactiveDescription() {
      let $itemHolders = $(".wdt-interactive-showcase-container");

      $itemHolders.each(function () {
        let $itemList = $(this).find(
          ".wdt-interactive-showcase-list-wrapper > .wdt-interactive-showcase-list > li"
        );

        $itemList.each(function () {
          let $itemDesc = $(this).find(".wdt-content-description");

          if ($(this).hasClass("wdt-interactive-showcase-active")) {
            $itemDesc
              .stop()
              .animate({ height: $itemDesc.get(0).scrollHeight }, 150);
          } else {
            $itemDesc.stop().animate({ height: 0 }, 150);
          }
        });
      });
    }
  };

  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/wdt-interactive-showcase.default",
      wdtInteractiveShowcaseWidgetHandler
    );
  });
})(jQuery);

