function openDropdown() {
  const dropdownContent = document.getElementById('dropdown-content');
  const dropdownDisplay = dropdownContent.style.display;

  if (dropdownDisplay === 'none') {
    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }
}

function changeBtnName(element) {
  const button = document.getElementsByClassName('dropbtn')[0];
  button.innerHTML =
    element.innerHTML +
    '<img src="./images/chevron-down.svg" alt="Chevron Down" />';
  openDropdown();
}
