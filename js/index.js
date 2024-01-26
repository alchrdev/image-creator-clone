window.onload = function() {
  var tooltip = document.querySelector('.FormItemTooltipContainer');
  var coinInside = document.querySelector('.FormItem__desktop');

  var closeHero = document.querySelector('.Hero');
  var iconClose = document.querySelector('.HeroEndCloseIcon')
  var exploreSection = document.querySelector('.Explore'); 


  coinInside.addEventListener('click', function() {
    tooltip.style.display = (tooltip.style.display == 'none') ? 'block' : 'none';
  });

  iconClose.addEventListener('click', function() {
    closeHero.style.display = (iconClose.style.display == 'block') ? 'none' : 'none';
    exploreSection.style.paddingBlock = '0'; 
  })

  document.addEventListener('click', function(event) {
    var isClickInside = coinInside.contains(event.target);
    if (!isClickInside) {
      tooltip.style.display = 'none';
    }
  });
};
