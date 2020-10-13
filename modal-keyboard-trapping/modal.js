let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal-overlay');

let modalToggle = document.querySelector('.modal-toggle');
modalToggle.addEventListener('click', openModal);

function openModal() {
  focusedElementBeforeModal = document.activeElement;

  // listen for and trap the keyboard
  modal.addEventListener('keydown', trapTabkey);

  // listen for indicators to close the modal
  modalOverlay.addEventListener('click', closeModal);

  let signUpButton = modal.querySelector('#signup');
  signUpButton.addEventListener('click', closeModal);

  let focusableElementString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

  let focusableElements = modal.querySelectorAll(focusableElementString);

  //Convert NodeList to Array
  focusableElements = Array.prototype.slice.call(focusableElements);

  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElements[focusableElements.length - 1];

  //show the modal and overlay
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';

  // Focus first child
  firstTabStop.focus();

  function trapTabkey(e) {
    // check for TAB key press
    if (e.keyCode === 9) {
      // Shift + TAB key
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }
      } else {
        // TAB key only
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    // ESCAPE key
    if (e.keyCode === 27) {
      closeModal();
    }
  }
}

function closeModal() {
  // Hide the Modal and overlay
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';

  focusedElementBeforeModal.focus();
}
