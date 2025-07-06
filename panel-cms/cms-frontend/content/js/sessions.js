import './utils/shared.js'

const $ = document
const sessionNameInput = $.querySelector('#session-name-input')
const sessionTimeInput = $.querySelector('#session-time-input')
const sessionPriceInput = $.querySelector('#session-price-input')
const coursesParentDropdown = $.querySelector('#courses-parent-dropdown')
const mainCourseElem = $.querySelector('#main-course')
let allCoursesListItems = $.querySelectorAll('.session-dropdown-menu-item')
const sessionsContainer = $.querySelector('.sessions')
const removeSessionModal = $.querySelector('.remove-modal')

const addNewSessionBtn = $.querySelector('#add-btn')

let mainUserID = null

allCoursesListItems.forEach(course => {
    course.addEventListener('click', event => {
        mainCourseElem.innerHTML = event.target.innerHTML
    })
})

addNewSessionBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    console.log('جلسه اضافه شد');

    let newSessionData = {
        title: sessionNameInput.value,
        time: sessionTimeInput.value,
        isFree: !Boolean(Number(sessionPriceInput.value)), // !Boolean(Number(0))
        course: mainCourseElem.innerHTML,
    }

    await fetch('http://localhost:3000/api/sessions', {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(newSessionData)
    })
        .then(res => {
            console.log(res)

            clearInputs()
            getAllSessions()
        })
})

function clearInputs () {
sessionNameInput.value = ''
sessionTimeInput.value = ''
    sessionPriceInput.value = ''
    mainCourseElem.innerHTML = 'Course'
}

coursesParentDropdown.addEventListener('click', () => {
    coursesParentDropdown.classList.add('active')
})

window.addEventListener('click', event => {

    if (event.target.id !== 'courses-parent-dropdown') {
        coursesParentDropdown.classList.remove('active')
    }
})

function getAllSessions () {
    fetch('http://localhost:3000/api/sessions')
        .then(res => res.json())
        .then(sessions => {
            console.log(sessions)

            sessionsContainer.innerHTML = ''

            sessions.forEach(session => {
                sessionsContainer.insertAdjacentHTML('beforeend', `
                        <div class="session-box">
                        <div>
                            <h1 class="session-name-title">${session.title}</h1>
                            <span class="session-category">${session.course}</span>
                        </div>
                        <div>
                            <span class="session-price-badge">${session.isFree ? 'Free' : 'Not Free'}</span>
                            <span class="session-time">${session.time}</span>
                            <span style="cursor: pointer;" onclick="showRemoveModal('${session._id}')">X</span>
                        </div>
                    </div>
                `)
            })
        })
}

function showRemoveModal (userID) {
    mainUserID = userID

    removeSessionModal.classList.add('visible')
}

function closeRemoveModal () {
    removeSessionModal.classList.remove('visible')
}

function removeSession () {
    
    fetch(`http://localhost:3000/api/sessions/${mainUserID}`, {
        method: 'DELETE'
    })
        .then(res => {
            console.log(res)
            closeRemoveModal()
            getAllSessions()
        })

}

window.addEventListener('load', () => {
    getAllSessions()
})
