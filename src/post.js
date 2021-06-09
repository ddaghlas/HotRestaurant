const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let id = document.getElementById('id').value.trim();
    
    let newReservation = {
      name: name,
      phone: phone,
      email: email,
      id: id,
    };

    fetch('/api/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReservation),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('reserve.html', data);
            alert(`Adding reservation: ${data.id}`);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});