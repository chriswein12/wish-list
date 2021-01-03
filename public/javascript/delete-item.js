async function deleteItemHandler (event) {
  event.preventDefault();

  //get item id
  const button_id = event.target.id;
  const id = button_id.split('-')[1];

  const response = await fetch(`/api/items/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    document.location.replace(document.location)
  } else {
    alert(response.statusText);
  }
}

const buttons = document.querySelectorAll('.itemDeleteBtn')
buttons.forEach(button => button.addEventListener('click', deleteItemHandler));