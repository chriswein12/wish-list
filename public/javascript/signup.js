async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const confirm = document.querySelector('#confirm-password').value.trim();

  if (username && email && password && confirm) {
    if (confirm === password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
}

document.querySelector('.create-form').addEventListener('submit', signupFormHandler);