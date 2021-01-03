async function newListHandler(event) {
  event.preventDefault();
  
  const wishlist_name = document.querySelector('#list-name').value.trim();
  const script = document.querySelector("#dashboard-script");
  const user_id = script.getAttribute('data-user');
  // const event_date = document.querySelector('#event-date');

  if (wishlist_name) {
    const response = await fetch('/api/wishlists', {
      method: 'post',
      body: JSON.stringify({
        user_id,
        wishlist_name,
        // event_date
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      console.log('success');
      document.location.replace(document.location);
    } else{
      alert(response.statusText);
    }
  }
  else {
    alert("Please enter in a wishlist name")
  }
}

// new ClipboardJS('.btn', {
//   container: document.getElementById('url-modal')
// });

document.querySelector('.new-list-form').addEventListener('submit', newListHandler);