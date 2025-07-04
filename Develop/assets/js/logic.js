// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const body = document.querySelector('body');


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const data = localStorage.getItem('blogData');
  return data ? JSON.parse(data) : [];
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(data) {
  const existingData = readLocalStorage();
  existingData.push(data);
  localStorage.setItem('blogData', JSON.stringify(existingData));
}


// ! Use the following function whenever you need to redirect to a different page


let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

