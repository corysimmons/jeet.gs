var $doc, $win, alignNavs, allNavBtns, didResize, finishedAnimating, onToggle, orangeSection, showGrid, synchronizeHovers, targetNav;

if ($("html").hasClass("no-touch")) {
  $doc = $(document);
  $win = $(window);
  targetNav = $(".side-nav.default");
  orangeSection = $(".installation");
  allNavBtns = $(".side-nav-link");
  alignNavs = function() {
    var scrolled, targetedPosition;
    scrolled = $doc.scrollTop();
    targetedPosition = targetNav.offset();
    $(".side-nav.to-be-fixed").each(function() {
      var $this, actualPosition;
      $this = $(this);
      actualPosition = $this.parents(':eq(1)').offset();
      $this.css("top", (targetedPosition.top - actualPosition.top) + "px");
    });
  };
  synchronizeHovers = function(navLink) {
    var currentBtnClasses, otherNavBtns;
    currentBtnClasses = navLink.attr('class').split(/\s/);
    otherNavBtns = currentBtnClasses[currentBtnClasses.length - 1];
    allNavBtns.removeClass('hover');
    return $("." + otherNavBtns).addClass('hover');
  };
  onToggle = function() {
    $('#demo-container').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", finishedAnimating);
  };
  finishedAnimating = function() {
    $('#demo-container').off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
    alignNavs();
    return showGrid();
  };
  showGrid = function() {
    if ($('body').hasClass("pushy-active")) {
      $(".landing-page").addClass("grid-visible");
      return;
    } else {
      $(".landing-page").removeClass("grid-visible");
      return;
    }
  };
  didResize = null;
  $win.resize(function() {
    didResize = true;
  });
  setInterval((function() {
    if (didResize) {
      didResize = false;
      alignNavs();
    }
  }), 250);
  $doc.scroll(function() {
    return alignNavs();
  });
  $('.toggle-api').click(function() {
    return onToggle();
  });
  $(".side-nav-link").hover(function() {
    return synchronizeHovers($(this));
  });
  alignNavs();
}

// ---
// generated by coffee-script 1.9.2
