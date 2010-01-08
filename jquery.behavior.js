 /*
 * jquery.behavior JavaScript Library v0.1
 * http://rodpetrovic.com/jquery/behavior
 *
 * Copyright (c) 2009 Rodoljub Petrović
 * Licensed under the MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2009-12-13
 */
(function ($) {

    var bhv = "behavior";

    function attach(jq, cls, config) {
      return jq.each(function () {
        $(this).data(bhv, new cls(this, config));
      });
    }

    function get(jq, index) {
      return $(jq.get(index)).data(bhv);
    }

    function map(jq, method, attributes) {
      return jq.each(function () {
        var obj = $(this).data(bhv);
        if (method in obj) {
          if (typeof obj[method] === 'function') {
            obj[method].apply(obj, attributes);
          } else {
            obj[method] = attributes;
          }
        }
      });
    }

    $.fn.behavior = function (p1, p2) {
      if (p1) {
        if (typeof p1 === 'function') {
          return attach(this, p1, p2 || {});
        } else if (typeof p1 === 'string') {
          return map(this, p1, p2 || []);
        } else if (typeof p1 === 'number') {
          return get(this, p1);
        }
      }
      return get(this);
    }
})(jQuery);
