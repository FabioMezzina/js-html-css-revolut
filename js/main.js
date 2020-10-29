$(document).ready(function () {
  // reference
  var actions = $('.with-dropdown a');
  var menus = $('.dropdown-menu');
  var links = $('nav a');
  // click su elemento del menù
  actions.click( function(event) {
    // ref al menù relativo all'elemento cliccato
    var actualMenu = $(this).next('.dropdown-menu');
    // nascondo tutti i menù tranne quello dell'elemento cliccato
    menus.not(actualMenu).hide();
    // apro o chiudo il menù cliccato
    actualMenu.toggle();
    // evita che il click dei dropdown venga visto come un click sul document
    event.stopPropagation();
  });
  // gestisco il focus sui link
  links.click( function() {
    $(this).addClass('color-black');
    links.not(this).removeClass('color-black');
  });
  // chiudo il menù aperto se clicco all'esterno
  $(document).click(function(e){
    menus.hide();
    actions.removeClass('color-black');
  });
}); // <-- end doc ready