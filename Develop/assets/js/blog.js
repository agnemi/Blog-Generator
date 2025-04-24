// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  main.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  const message = 'No blog posts to display.';
  buildElement('h2', message);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  const blogData = JSON.parse(localStorage.getItem('blogData'));
  if (!blogData) {
    noPosts();
    return;
  }

  const { username, title, content } = blogData;
  buildElement('h2', `Welcome, ${username}`);
  buildElement('h3', title);
  buildElement('p', content);
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
const backButton = document.querySelector('#back-button');
