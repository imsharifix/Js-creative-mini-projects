
let adminUserNameTitle = document.querySelector('.admin-id');
let adminUserEmailTitle = document.querySelector('.admin-email');
let leftAdminUserNameTitle = document.querySelector('.admin-information-container .admin-id')
let leftAdminUserEmailTitle = document.querySelector('.admin-information-container .admin-email')
let leftAdminFirstNameTitle = document.querySelector('.admin-info-box .dark-blue')
let leftAdminLastNameTitle = document.querySelector('.admin-info-box .orange')


window.addEventListener('load', () => {
    let adminID = localStorage.getItem('loginID')
    if (!adminID) {
        location.href = 'http://127.0.0.1:5500/cms-frontend/login.html'
        return
    }

    fetch(`http://localhost:3000/api/admins/${adminID}`)
        .then(res => res.json())
        .then(admin => {
            console.log(admin);

            document.title = `Panel - ${admin.firstName} ${admin.lastName}`

            adminUserNameTitle.textContent = `${admin.firstName} ${admin.lastName}`
            adminUserEmailTitle.textContent = admin.email
            leftAdminUserNameTitle.textContent = `${admin.firstName} ${admin.lastName}`
            leftAdminUserEmailTitle.textContent = admin.email
            leftAdminFirstNameTitle.textContent = admin.firstName
            leftAdminLastNameTitle.textContent = admin.lastName
        })
})

console.log("Shared File Run :))");