document.addEventListener('DOMContentLoaded', function() {
    // Add demo data when the page loads
    addDemoData();
});

document.querySelector('#addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const itemName = document.querySelector('#itemName').value.trim();
    const quantity = document.querySelector('#quantity').value.trim();
    const expirationDate = document.querySelector('#expirationDate').value.trim();
    const tableBody = document.querySelector('#pantryItems');

    // Validate form inputs
    if (!itemName || !quantity || !expirationDate) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new row in the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td>${expirationDate}</td>
        <td><button class="btn btn-danger btn-sm" onclick="removeItem(this)">Remove</button></td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear the form
    document.querySelector('#addItemForm').reset();
});

// Function to remove an item from the table
function removeItem(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

// Function to add demo data to the table
function addDemoData() {
    const demoItems = [
        { itemName: 'Milk', quantity: '2 ', expirationDate: '2024-08-15' },
        { itemName: 'Bread', quantity: '1 ', expirationDate: '2024-08-10' },
        { itemName: 'Eggs', quantity: '12', expirationDate: '2024-08-20' },
        
    ];

    const tableBody = document.querySelector('#pantryItems');

    demoItems.forEach(item => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${item.itemName}</td>
            <td>${item.quantity}</td>
            <td>${item.expirationDate}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeItem(this)">Remove</button></td>
        `;
        tableBody.appendChild(newRow);
    });
}
