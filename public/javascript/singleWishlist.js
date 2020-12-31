async function itemFormHandler(event) {
    // event.preventDefault();
    // debugger;
    const item_name = document.querySelector('#item-name').value.trim();
    const price = document.querySelector('#price').value;
    const purchase_location = document.querySelector('#retailer').value.trim();
    const link = document.querySelector('#weblink').value;
    const description = document.querySelector('#notes').value.trim();

    const rawId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const id = rawId.slice(0, 36)

    console.log(item_name);
    console.log(link);
    console.log(id);

    if (item_name && price && purchase_location && id) {
        const response = await fetch('/api/items', {
            method: 'post',
            body: JSON.stringify({
                item_name,
                price,
                purchase_location,
                link,
                description,
                id
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.add-item-form').addEventListener('submit', itemFormHandler);
