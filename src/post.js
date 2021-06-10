const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let name = document.getElementById('inputName').value.trim();
    let phone = document.getElementById('inputPhone').value.trim();
    let email = document.getElementById('inputEmail').value.trim();
    let id = document.getElementById('inputId').value.trim();
    
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