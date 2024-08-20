const navContainer = document.querySelector(".navigation__nav");

navContainer.addEventListener("click", function (e) {
  const clickedLink = e.target.closest(".navigation__link");

  if (clickedLink) {
    document.querySelector(".navigation__checkbox").checked = false;
  }
});
