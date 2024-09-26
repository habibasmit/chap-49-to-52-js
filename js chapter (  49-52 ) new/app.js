// EVENTS 
// chapter no 49 to 52 


// question no 01 : Create a signup form and display form data in your web page on submission.

/* 
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayEmail').textContent = email;
  
  document.getElementById('result').style.display = 'block';
});      
 */


//  question no 02 : Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.

 /*
  function toggleDetails() {
  const moreText = document.getElementById('moreText');
  const button = document.querySelector('.content button');
  
  if (moreText.classList.contains('hidden')) {
    moreText.classList.remove('hidden');
    button.textContent = 'Read less';
  } else {
    moreText.classList.add('hidden');
    button.textContent = 'Read more';
  }
}
*/

// question no 03 : In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

 /* 
 var studentTable = document.querySelector('#studentTable tbody');
var editForm = document.getElementById('editForm');
var currentRow;

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var studentClass = document.getElementById('class').value;

    var row = studentTable.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = studentClass;

    // Edit and Dlt btn
    var actionsCell = row.insertCell(3);
    
    // Edit btn
    var editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', function() {
        editStudent(row);
    });

    // Dlt btn
    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function() {
        studentTable.deleteRow(row.rowIndex - 1); 
});

    actionsCell.appendChild(editBtn);
    actionsCell.appendChild(deleteBtn);

    document.getElementById('studentForm').reset();
});

// Edit student details
function editStudent(row) {
    currentRow = row;
    document.getElementById('editName').value = row.cells[0].innerText;
    document.getElementById('editAge').value = row.cells[1].innerText;
    document.getElementById('editClass').value = row.cells[2].innerText;

    editForm.classList.remove('hidden1');
}
document.getElementById('saveEdit').addEventListener('click', function() {
    currentRow.cells[0].innerText = document.getElementById('editName').value;
    currentRow.cells[1].innerText = document.getElementById('editAge').value;
    currentRow.cells[2].innerText = document.getElementById('editClass').value;

    editForm.classList.add('hidden1'); 
});
*/