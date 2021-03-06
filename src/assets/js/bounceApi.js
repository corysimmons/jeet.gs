$(function() {
  var $doc           = $(document),
      featuresOffset = $('.features-headline').offset(),
      bounceIcon     = 'bounceInLeftRepeat',
      apiIcon        = $('.side-nav-link.toggle-api');

  hovered = false

  function bounceApiIcon() {
    if (!hovered && featuresOffset.top <= $doc.scrollTop()) {
      apiIcon.addClass(bounceIcon);
    } else {
      apiIcon.removeClass(bounceIcon);
    }
  }

  function stopAnimationOnHover() {
    if (apiIcon.hasClass(bounceIcon)) {
      apiIcon.removeClass(bounceIcon);
      hovered = true
    }
  }

  $doc.scroll(function() {
    bounceApiIcon();
  });

  apiIcon.hover(stopAnimationOnHover);
  bounceApiIcon();
});
