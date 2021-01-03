async function newListHandler(event) {
  event.preventDefault();
  
  const wishlist_name = document.querySelector('#list-name').value.trim();
  const script = document.querySelector("#dashboard-script")
  const user_id = script.getAttribute('data-user')

  console.log(user_id);

  if (wishlist_name) {
    const response = await fetch('/api/wishlists', {
      method: 'post',
      body: JSON.stringify({
        user_id,
        wishlist_name
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.reload;
    } else{
      alert(response.statusText);
    }
  }
}
document.querySelector('.new-list-form').addEventListener('submit', newListHandler);