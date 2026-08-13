/* Lewis Private Collections — navigation state helper
 * Standalone build module. Does not alter index.html or persist data.
 */
(function (global) {
  'use strict';

  var allowed = ['coins', 'paper-money', 'lookup', 'collection', 'settings'];
  var current = 'coins';

  function isAllowed(destination) {
    return allowed.indexOf(destination) !== -1;
  }

  function get() {
    return current;
  }

  function set(destination) {
    if (!isAllowed(destination)) return current;
    current = destination;
    return current;
  }

  global.LewisNavigationState = {
    allowed: allowed.slice(),
    get: get,
    set: set,
    isAllowed: isAllowed
  };
})(window);
