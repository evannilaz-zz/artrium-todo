const searchForm = document.querySelector("#searchForm");
const searchInput = searchForm.querySelector("input")

function handleSearch(event) {
    event.preventDefault();
    var searchQuery = searchInput.value;
    searchQuery.replace(/ /g,"%20");
    location.replace(`https://www.google.com/search?q=${searchQuery}`)
}

function init() {
    searchForm.addEventListener("submit",handleSearch);
    searchInput.addEventListener("submit", handleSearch);
}