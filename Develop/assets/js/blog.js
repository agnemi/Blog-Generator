// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector("main");
const backButton = document.querySelector("#back-button");
// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(tag, text) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  // main.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  const message = buildElement("h2", "No blog posts to display.");

  h2.textContent = "No blog posts to display.";
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  const blogData = readLocalStorage();
  if (!blogData || blogData.length === 0) {
    noPosts();
    return;
  } else {
    console.log("INFO: There are blogs here, attempting to render.");
  }
  blogData.forEach((blog) => {
    //setup the article and append
    const article = buildElement("article", main);
    //setup the h2 and append to article
    const h2 = buildElement("h2", article);
    //setup the paragraph and append to h2
    const p = buildElement("p", article);
    //setup the blockquote and append to paragraph
    const blockquote = buildElement("blockquote", article);
    h2.textContent = blog.title;
    blockquote.textContent = blog.content;
    p.textContent = `By: ${blog.username}`;
  });
  // const blogData = JSON.parse(localStorage.getItem('blogData'));
  // if (!blogData) {
  //   noPosts();
  //   return;
  // }

  // const { username, title, content } = blogData;
  // buildElement('h2', `Welcome, ${username}`);
  // buildElement('h3', title);
  // buildElement('p', content);
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener("click", function () {
  redirectPage("index.html");
});
