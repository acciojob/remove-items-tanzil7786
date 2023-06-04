const colorSelect = document.getElementById('colorSelect');
const removeButton = document.querySelector('input[type="button"]');

// Add event listener to the button
removeButton.addEventListener('click', function() {
  // Get the selected color option
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  
  // Remove the selected option from the dropdown list
  colorSelect.removeChild(selectedOption);
});