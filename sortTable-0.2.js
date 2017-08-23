/**
 * sortTable v0.2
 * https://github.com/Lugat/sortTable
 *
 * Copyright (c) 2017 SquareFlower Websolutions - Lukas Rydygel
 * Licensed under the MIT license
 */
;(function($, window, document, undefined) {
  
  $.fn.sortTable = function(col, reverse, numeric) {
          
    var tb = this[0].tBodies[0],
        tr = Array.prototype.slice.call(tb.rows, 0),
        i;

    reverse = reverse ? -1 : 1;

    tr = tr.sort(function(a, b) {
      
      var dataA = $(a.cells[col]).data('sort'),
          dataB = $(b.cells[col]).data('sort'),
     
      a = dataA === undefined ? a.cells[col].textContent.trim() : dataA;
      b = dataB === undefined ? b.cells[col].textContent.trim() : dataB;
      
      if (numeric === true) {
        return reverse * (Number(a) - Number(b));
      }
      
      return reverse * (a.toString().localeCompare(b));
      
    });

    for (i = 0; i < tr.length; i++) {
      tb.appendChild(tr[i]);
    }
    
  };
  
}(jQuery, window, document));