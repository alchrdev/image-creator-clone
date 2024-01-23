window.onload = function() {
  var tooltip = document.querySelector('.FormItemTooltipContainer');
  var coinInside = document.querySelector('.FormItem__desktop');

  coinInside.addEventListener('click', function() {
    tooltip.style.display = (tooltip.style.display == 'none') ? 'block' : 'none';
  });

  document.addEventListener('click', function(event) {
    var isClickInside = coinInside.contains(event.target);
    if (!isClickInside) {
      tooltip.style.display = 'none';
    }
  });
};
