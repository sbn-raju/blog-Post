let searchButton = document.querySelector(".item-search");
searchButton.addEventListener("click",()=>{
    let searchInput = document.querySelector(".search-style");
    searchInput.classList.toggle("search-input");
    searchButton.classList.toggle("search");
    
});
let submitButton = document.querySelector(".submit-btn");
submitButton.addEventListener("click",()=>{
    let form = document.querySelector(".contact-form");
    form.submit();
    form.reset();
    return false;
})