
import {
    getPosts
} from '/api-const.js';


let pageNext = document.getElementById('page-turn-next');
let pagePrev = document.getElementById('page-turn-prev');
let form = document.getElementById('submit-page-number');

let pageNumber = document.getElementById('pageNumber');

export let pageNum = pageNumber.innerHTML;

const hidePrevButton = () => {
    return (pageNum > 1 ? pagePrev.style.display = " inline" : pagePrev.style.display = "none");
}

window.onload = getPosts(), hidePrevButton();


let nextPage = () => {
    pageNum++;
    pageNumber.innerHTML = pageNum;
    getPosts(pageNum);
    hidePrevButton();
    console.log(pageNum);
}

let prevPage = () => {
    pageNum--;
    pageNumber.innerHTML = pageNum;
    getPosts(pageNum);
    hidePrevButton();
    console.log(pageNum);
}

// pageNum here is a totally isolated variable
// how to take the value of the form input and transfer that to the variable pageNum (page turns access it but I reassigned it here)

// sync form data with a variable from another function????
let getPageNumber = (e) => {
    let pageNumberField = document.getElementById('number-field').value;
    e.preventDefault();
    let pageNum = pageNumberField;
    pageNumber.innerHTML = pageNum;
    getPosts(pageNum);
    hidePrevButton();
    form.reset();
    console.log(pageNum);
}

pageNext.addEventListener('click', nextPage);
pagePrev.addEventListener('click', prevPage);
form.addEventListener('submit', getPageNumber);