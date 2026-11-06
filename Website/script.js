console.log("Whispers from History: JavaScript connected!");

const searchInput = document.querySelector("#collection-search-input");

if (searchInput) {
  const cards = document.querySelectorAll(".building-grid .building-card");
  const noResults = document.querySelector("#search-no-results");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    cards.forEach((card) => {
      const cardText = card.textContent.toLowerCase();
      const isMatch = cardText.includes(searchTerm);

      card.classList.toggle("is-hidden", !isMatch);

      if (isMatch) {
        visibleCount++;
      }
    });

    noResults.hidden = visibleCount > 0;
  });
}
