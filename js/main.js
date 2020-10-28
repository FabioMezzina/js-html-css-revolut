$(document).ready(function () {
  // reference
  var actions = $('.with-dropdown a');
  var menus = $('.dropdown-menu');
  // click su elemento del menù
  actions.click( function() {
    // ref al menù relativo all'elemento cliccato
    var actualMenu = $(this).next('.dropdown-menu');
    // nascondo tutti i menù tranne quello dell'elemento cliccato
    menus.not(actualMenu).hide();
    // apro o chiudo in menù cliccato
    actualMenu.toggle();
  });
}); // <-- end doc ready