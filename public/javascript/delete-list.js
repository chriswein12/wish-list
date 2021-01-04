async function deleteListHandler (event) {
    event.preventDefault();
  
    // const button_id = event.target.id;
    // const id = button_id.split('-')[1];
    //get wishlist id
    const rawId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const id = rawId.slice(0, 36)
  
    const response = await fetch(`/api/wishlists/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      document.location.replace(document.location)
    } else {
      alert(response.statusText);
    }
  }
  
  const buttons = document.querySelectorAll('.listDeleteBtn')
  buttons.forEach(button => button.addEventListener('click', deleteListHandler));