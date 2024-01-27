window.onload = function() {
  var tooltip = document.querySelector('.FormItemTooltipContainer');
  var coinInside = document.querySelector('.FormItem__desktop');

  var closeHero = document.querySelector('.Hero');
  var iconClose = document.querySelector('.HeroEndCloseIcon')
  var exploreSection = document.querySelector('.Explore'); 

  var faqArrows = document.querySelectorAll('.FaqArrowDown');


  coinInside.addEventListener('click', function() {
    tooltip.style.display = (tooltip.style.display == 'none') ? 'block' : 'none';
  });

  document.addEventListener('click', function(event) {
    var isClickInside = coinInside.contains(event.target);
    if (!isClickInside) {
      tooltip.style.display = 'none';
    }
  });


  iconClose.addEventListener('click', function() {
    closeHero.style.display = (iconClose.style.display == 'block') ? 'none' : 'none';
    exploreSection.style.paddingBlock = '0'; 
  })

faqArrows.forEach(function(arrow) {
  arrow.addEventListener('click', function() {
    // Selecciona el párrafo correspondiente
    var paragraph = arrow.nextElementSibling.querySelector('.FaqItemDesc');

    // Cambia el estilo del párrafo
    if (paragraph.style.maxHeight === '100vh') { // Comprueba si max-height es '100vh'
      paragraph.style.maxHeight = '0px';
      paragraph.style.paddingTop = '0px';
      arrow.classList.remove('FaqArrowUp'); // Elimina la clase FaqArrowUp
    } else {
      paragraph.style.maxHeight = '100vh';
      paragraph.style.paddingTop = '8px';
      arrow.classList.add('FaqArrowUp'); // Añade la clase FaqArrowUp
    }
  });
  });


};
