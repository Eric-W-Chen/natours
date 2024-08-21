/**
 * Container element for the navigation links.
 * @type {HTMLElement}
 */
const navContainer = document.querySelector(".navigation__nav");

/**
 * Event listener for handling clicks on the navigation links.
 * Closes the navigation menu when a link is clicked.
 * 
 * @param {MouseEvent} e - The event object representing the click event.
 */
navContainer.addEventListener("click", function (e) {
  /**
   * The closest navigation link element to the clicked target.
   * @type {HTMLElement|null}
   */
  const clickedLink = e.target.closest(".navigation__link");

  // If a navigation link was clicked, close the navigation menu
  if (clickedLink) {
    document.querySelector(".navigation__checkbox").checked = false;
  }
});
