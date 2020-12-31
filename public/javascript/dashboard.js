async function newListHandler(event) {
  event.preventDefault();

  const wishlist_name = document.querySelector('#list-name').value.trim();
  const user_id=1;
  //const user_id=req.session.user_id;

  if (wishlist_name) {
    const response = await fetch('/api/wishlists', {
      method: 'post',
      body: JSON.stringify({
        user_id,
        wishlist_name
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    if (response.ok) {
      console.log('success');
      document.location.reload;
    } else{
      alert(response.statusText);
    }
  }
}
document.querySelector('.new-list-form').addEventListener('submit', newListHandler);