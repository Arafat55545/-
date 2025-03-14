let currentPage = 1;
const totalPages = 4;

function nextPage() {
  if (currentPage < totalPages) {
    // Hide current page
    document.getElementById(`page${currentPage}`).classList.add('hidden');

    // Show next page
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.remove('hidden');

    // Change button text on last page
    if (currentPage === totalPages) {
      document.querySelector('button').innerText = 'End';
    }
  } else {
    alert("End of the card!");
  }
}
