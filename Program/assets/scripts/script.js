// Store the person details in an array
let persons = [];

// Handle adding a new details
function handleAddPerson(event) {
  event.preventDefault();

  const person = {
    id: Date.now().toString(),
    fullName: document.getElementById('fullName').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    birthDate: document.getElementById('birthDate').value,
    age: parseInt(document.getElementById('age').value),
    occupation: document.getElementById('occupation').value
  };

  persons.push(person);
  event.target.reset();
  renderPersonsList();
}

// Render the persons list
function renderPersonsList() {
  const personsList = document.getElementById('personsList');
  personsList.innerHTML = persons.map(person => `
    <div class="col-md-6 col-lg-4">
      <div class="card person-card">
        <div class="card-body">
          <h5 class="card-title">${person.fullName}</h5>
          <p class="card-text">
            <small class="text-muted">${person.gender} • ${person.age} years old</small><br>
            <small class="text-muted">Born: ${new Date(person.birthDate).toLocaleDateString()}</small><br>
            Occupation: ${person.occupation}
          </p>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" onclick="editPerson('${person.id}')">Edit</button>
            <button class="btn btn-outline-danger btn-sm" onclick="deletePerson('${person.id}')">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}



// Delete details
function deletePerson(id) {
  persons = persons.filter(person => person.id !== id);
  renderPersonsList();
}

// Edit details
function editPerson(id) {
  const person = persons.find(p => p.id === id);
  if (person) {
    document.getElementById('editId').value = person.id;
    document.getElementById('editFullName').value = person.fullName;
    document.querySelector(`input[name="editGender"][value="${person.gender}"]`).checked = true;
    document.getElementById('editBirthDate').value = person.birthDate;
    document.getElementById('editAge').value = person.age;
    document.getElementById('editOccupation').value = person.occupation;
    
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  }
}

// Update details
function handleUpdatePerson() {
  const id = document.getElementById('editId').value;
  const updatedPerson = {
    id,
    fullName: document.getElementById('editFullName').value,
    gender: document.querySelector('input[name="editGender"]:checked').value,
    birthDate: document.getElementById('editBirthDate').value,
    age: parseInt(document.getElementById('editAge').value),
    occupation: document.getElementById('editOccupation').value
  };
  
  persons = persons.map(person => 
    person.id === id ? updatedPerson : person
  );
  
  const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
  modal.hide();
  renderPersonsList();
 
}

// ayaw ni basaha sir HAHAHA
function hello(){
    window.location.href  = "https://www.pornhub.com";
}