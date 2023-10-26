const accessKey = "Bul_WDC4SsEDHWlmIZ8PpXV06vHi15MMwZsXxCdCgfQ";

const formEle = document.querySelector("form");
const inputEle = document.querySelector("#search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector("#show-more");

let inputData = "";
let page = 1;

async function searchImage() {
    inputData = inputEle.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page == 1) {
        searchResults.innerHTML = "";

    }

    results.map((result) => {
        const imageWarpper = document.createElement('div');
        imageWarpper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWarpper.appendChild(image);
        imageWarpper.appendChild(imageLink);
        searchResults.appendChild(imageWarpper);

    })

    page++;

    if (page > 1) {
        showMore.style.display = "block";
    }
}

formEle.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImage()
})

showMore.addEventListener("click", () => {
    searchImage()
})