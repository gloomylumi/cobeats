( function() {
  'use strict';
  angular
    .module( 'app' )
    .component( 'easel', {
      controller: controller,
      templateUrl: 'js/main/easel/easel.template.html'
    } )

  function controller() {
    const vm = this;

    vm.selectColor = selectColor;
    vm.applyColor = applyColor;
    vm.currentColor = '#FFFFFF'
    vm.pixelArray = pixelArray;
    vm.colorPallette = ["#FFFFFF", "#C0C0C0", "#808080", "#404040"];

    function selectColor( event ) {
      vm.currentColor = event.target.style.backgroundColor;
      document.getElementById( 'current-color' ).style.backgroundColor = vm.currentColor;

    }

    function applyColor( event ) {
      console.log(event);
      event.target.style.backgroundColor = vm.currentColor;
    }

    function pixelArray() {
      return new Array( 48 );
    }

    var colorPallette = ["#FFFFFF", "#C0C0C0", "#808080", "#404040"];
  }
}() );
