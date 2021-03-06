async function itemFormHandler(event) {

    event.preventDefault();
    const item_name = document.querySelector('#item-name').value.trim();
    const price = document.querySelector('#price').value;
    const purchase_location = document.querySelector('#retailer').value.trim();
    const link = document.querySelector('#weblink').value;
    const description = document.querySelector('#notes').value.trim();

    const rawId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const wishlist_id = rawId.slice(0, 36)

    if (item_name && price && purchase_location && wishlist_id) {
        const response = await fetch('/api/items', {
            method: 'post',
            body: JSON.stringify({
                item_name,
                price,
                purchase_location,
                link,
                description,
                wishlist_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            debugger;
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.add-item-form').addEventListener('submit', itemFormHandler);
