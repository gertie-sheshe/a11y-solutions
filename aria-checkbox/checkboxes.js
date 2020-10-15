(function () {
  'use strict';

  /** Define values for keycodes */
  let VK_ENTER = 13;
  let VK_SPACE = 32;
  let VK_LEFT = 37;
  let VK_UP = 38;
  let VK_RIGHT = 39;
  let VK_DOWN = 40;

  /** Helper function to convert NodeLists to Arrays */
  function slice(nodes) {
    return Array.prototype.slice.call(nodes);
  }

  function Checkbox(el) {
    this.el = el;

    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.el.addEventListener('click', this.toggle.bind(this));

    this.el.setAttribute('role', 'checkbox');

    if (this.el.hasAttribute('checked')) {
      this.el.setAttribute('aria-checked', 'true');
    } else {
      this.el.setAttribute('aria-checked', 'false');
    }
  }

  Checkbox.prototype.handleKeyDown = function (e) {
    switch (e.keyCode) {
      case VK_ENTER:
      case VK_SPACE: {
        console.log('OLAAA');
        this.toggle();
        break;
      }
    }
  };

  Checkbox.prototype.toggle = function () {
    if (this.el.hasAttribute('checked')) {
      this.el.removeAttribute('checked');
      this.el.setAttribute('aria-checked', 'false');

      // Hmm.
    } else {
      this.el.setAttribute('checked', '');
      this.el.setAttribute('aria-checked', 'true');

      // Hmmmmm.
    }
  };

  var checkboxes = slice(document.querySelectorAll('.checkbox'));
  for (var checkbox of checkboxes) {
    checkbox.logic = new Checkbox(checkbox);
    console.log('CHECKBOX', checkbox.logic);
  }
})();
