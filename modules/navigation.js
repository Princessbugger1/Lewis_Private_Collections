/* Lewis Private Collections — phone-first navigation module
 * Build branch: build/navigation
 * This module is intentionally standalone. It does not replace index.html.
 * Integration should call LewisNavigation.mount({ ... }) from the app shell.
 */
(function (global) {
  'use strict';

  function mount(options) {
    options = options || {};
    var root = options.root || document.body;
    var items = [
      ['coins', 'Coins'],
      ['paper-money', 'Paper Money'],
      ['lookup', 'Lookup'],
      ['collection', 'Collection'],
      ['settings', 'Settings']
    ];

    var nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Collection navigation');
    nav.className = 'lpc-nav';

    var list = document.createElement('div');
    list.className = 'lpc-nav-list';

    items.forEach(function (item) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'lpc-nav-item';
      button.dataset.destination = item[0];
      button.textContent = item[1];
      button.addEventListener('click', function () {
        setActive(item[0]);
        if (typeof options.onNavigate === 'function') {
          options.onNavigate(item[0]);
        }
      });
      list.appendChild(button);
    });

    nav.appendChild(list);
    root.insertBefore(nav, root.firstChild || null);

    function setActive(destination) {
      Array.prototype.forEach.call(
        list.querySelectorAll('.lpc-nav-item'),
        function (button) {
          var active = button.dataset.destination === destination;
          button.classList.toggle('is-active', active);
          button.setAttribute('aria-current', active ? 'page' : 'false');
        }
      );
    }

    setActive(options.initial || 'coins');
    return { element: nav, setActive: setActive };
  }

  global.LewisNavigation = { mount: mount };
})(window);
