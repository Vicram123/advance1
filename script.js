function toggleDropdown(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  const dropdownContent = event.target.nextElementSibling;
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// Close the dropdown if clicked outside
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-toggle")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  }
};
