async function deleteListHandler (event) {
    event.preventDefault();
  
    //get item id
    const rawId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const id = rawId.slice(0, 36)
  
    const response = await fetch(`/api/wishlists/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      document.location.replace('/dashboard')
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.listDeleteBtn').addEventListener('click', deleteListHandler);