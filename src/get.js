fetch('/api/tables', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        createCards(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

fetch('/api/waitlist', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        createCards(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

function createCards(data) {
    let cardbox = document.getElementById('box');
    data.forEach((reserve, index) => {
        let cardHtml = `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Table #${(index+1)}</h5>
                <p class="card-text">${reserve.name}</h6>
                <p class="card-text">Phone: ${reserve.phone}</p>
                <p class="card-text">Email: ${reserve.email}</p>
                <p class="card-text">ID: ${reserve.id}</p>
            </div>
        </div>`

        cardbox.appendChild(cardHtml);
    });
}