const $ = document
const usernameInput = $.querySelector('#username-input')
const passwordInput = $.querySelector('#password-input')
const adminLoginBtn = $.querySelector('.submit-form-btn')

adminLoginBtn.addEventListener('click', event => {
    event.preventDefault()

    let adminID = null

    let adminUserName = usernameInput.value
    let adminPassword = passwordInput.value

    console.log(adminUserName, adminPassword);

    fetch('http://localhost:3000/api/admins')
        .then(res => res.json())
        .then(admins => {
            console.log(admins);

            let isAdmin = admins.some(admin => {
                if (admin.userName === adminUserName && admin.password === adminPassword) {
                    adminID = admin._id
                    return admin.userName === adminUserName && admin.password === adminPassword
                }
            })

            if (isAdmin) {
                clearInputs()
                localStorage.setItem('loginID', adminID)
                location.href = 'http://127.0.0.1:5500/cms-frontend/panel-users.html'
            } else {
                alert('اطلاعات شما به عنوان مدیر سایت صحیح نمی باشد')
                clearInputs()
            }

        })
})

function clearInputs() {
    usernameInput.value = ''
    passwordInput.value = ''
}