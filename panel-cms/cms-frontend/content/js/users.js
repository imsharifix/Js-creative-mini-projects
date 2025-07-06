import './utils/shared.js'

const usersWrapper = document.querySelector('.users-wrap')
const removeModal = document.querySelector('.remove-modal')
const editModal = document.querySelector('.edit-modal')

const usernameInput = document.querySelector('#username-input')
const firstNameInput = document.querySelector('#first-name-input')
const lastNameInput = document.querySelector('#last-name-input')

const logoutBtn = document.querySelector('#exit-btn')

let mainUserID = null

logoutBtn.addEventListener('click', () => {
    localStorage.clear()
    location.href = 'http://127.0.0.1:5500/cms-frontend/login.html'
})

window.addEventListener('load', getAllUsers)

function getAllUsers() {
    fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => {

            console.log(data);
            usersWrapper.innerHTML = ''

            data.forEach(user => {
                usersWrapper.insertAdjacentHTML('beforeend', `
                    <div class="user-box">
                    <div class="user-box_left">
                        <img src="${user.profile}" class="user-profile-box" alt="">
                        <div class="user-detail">
                            <h1 class="user-id">
                                <span>${user.userName} <!-- username --> </span>
                                <span class="user-history"> ${user.created_AT} <!-- history --> </span>
                            </h1>
                            <h3 class="user-name">${user.firstName} ${user.lastName} <!-- user name (first name and last name) --> </h3>
                        </div>
                    </div>

                    <div class="user-btns-group">
                        <!-- ! ------------------------------ edit btn ------------------------------- ! -->
                        <button onclick="showEditModal('${user._id}')" class="user-edit-btn">
                            edit
                        </button>
                        <!-- ! ----------------------------- remove btn ------------------------------ ! -->
                        <button onclick="showModal('${user._id}')" class="user-remove-btn">
                            remove
                        </button>
                    </div>
                </div>
                `)
            })
        })
}

// Remove User Functions

function showModal(userID) {
    console.log(userID);
    mainUserID = userID
    removeModal.classList.add('visible')
}

function closeModal() {
    removeModal.classList.remove('visible')
}

function removeUser() {
    fetch(`http://localhost:3000/api/users/${mainUserID}`, {
        method: 'DELETE'
    }).then(res => {
        console.log(res)
        closeModal()
        getAllUsers()
    })
}

// Edit User Functions

function showEditModal(userID) {
    editModal.classList.add('visible')

    mainUserID = userID
}

function closeEditModal() {
    editModal.classList.remove('visible')
}

function updateUser(event) {
    event.preventDefault()

    let userNewData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        userName: usernameInput.value,
        profile: 'content/img/profile/banana.png',
    }

    fetch(`http://localhost:3000/api/users/${mainUserID}`, {
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(userNewData)
    })
        .then(res => {
            console.log(res)
            closeEditModal()
            clearEditModalInputs()
            getAllUsers()
        })

}

function clearEditModalInputs() {
    usernameInput.value = ''
    firstNameInput.value = ''
    lastNameInput.value = ''
}

window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeEditModal()
    }
})