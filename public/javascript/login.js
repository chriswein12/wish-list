async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        if (document.location.pathname === "/" ){
          document.location.replace('/dashboard');
        }
        document.location.replace(document.location);

      } else {
        alert("Please check your email and password and try again.")
      }
    }
  }

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);