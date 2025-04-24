// TODO: Create a variable that selects the form element
const form = document.querySelector('#blog-form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
  const error = document.querySelector('#error');

  if (!username || !title || !content) {
    error.textContent = 'Please complete the form.';
    return;

  localStorage.setItem('blogData', JSON.stringify({ username, title, content }));
  redirectPage();
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
    form.addEventListener('submit', handleFormSubmit);
    }
    return {
      ok: true,
      passed: false,
      feedback:
        'The form does not display an error message when submitted with empty fields.',
      expand_feedback: true,
    };
