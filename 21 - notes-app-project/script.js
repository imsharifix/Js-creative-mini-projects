const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const contentIcon = document.querySelector(".content i");
const contentHeader = document.querySelector(".content header p");
const contentTitle = document.querySelector(".row.title input");
const contentDescription = document.querySelector(".row.description textarea");
const contentBtn = document.querySelector("form button");
const wrapper = document.querySelector(".wrapper");

let editIndex = null; // ذخیره‌ی ایندکس یادداشت در حالت ویرایش

// Show notes on page load
showNotes();

// Add new note button click
addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
    contentHeader.innerText = "Add Note";
    contentBtn.innerText = "Add Note";
    clearInputs();
    contentTitle.focus();
});

// Close popup
contentIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
    clearInputs();
    editIndex = null; // خروج از حالت ویرایش
});


// Add or update note to localStorage
contentBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    const title = contentTitle.value.trim();
    const description = contentDescription.value.trim();

    if (title || description) {
        const notes = JSON.parse(localStorage.getItem("notes") || "[]");

        if (editIndex !== null) {
            // Update mode
            notes[editIndex].title = title;
            notes[editIndex].description = description;
            notes[editIndex].date = new Date().toISOString();
            editIndex = null;
            contentHeader.innerText = "Add Note";
            contentBtn.innerText = "Add Note";
        } else {
            // Add mode
            const noteObj = {
                title,
                description,
                date: new Date().toISOString()
            };
            notes.push(noteObj);
        }
        
        localStorage.setItem("notes", JSON.stringify(notes));
        
        clearInputs();
        popupBox.classList.remove("show");
        showNotes();
    } else {
        alert("Please enter title or description!");
    }
});

function showNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    wrapper.innerHTML = `
      <li class="add-box">
        <div class="icon"><i class="uil uil-plus"></i></div>
        <p>Add New Note</p>
      </li>
    `;

    notes.forEach((note, index) => {
        wrapper.insertAdjacentHTML("beforeend", `
            <li class="note">
                <div class="details">
                    <p>${note.title || "Untitled"}</p>
                    <span>${note.description || "No description"}</span>
                </div>
                <div class="bottom-content">
                    <span>${formatDate(note.date)}</span>
                    <div class="settings">
                        <i class="uil uil-ellipsis-h" onclick="toggleSetting(this)"></i>
                        <ul class="menu">
                            <li onclick="editNote(${index})">
                              <i class="uil uil-pen"></i>Edit
                            </li>
                            <li onclick="deleteNote(${index})">
                                <i class="uil uil-trash"></i>Delete
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        `);
    });

    // Re-add event listener for add box (because it's recreated)
    document.querySelector(".add-box").addEventListener("click", () => {
        popupBox.classList.add("show");
        contentHeader.innerText = "Add Note";
        contentBtn.innerText = "Add Note";
        clearInputs();
        editIndex = null;
        contentTitle.focus();
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ["January", "February", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${month} ${day}, ${year} ${hours}:${minutes}`;
}

function clearInputs() {
    contentTitle.value = "";
    contentDescription.value = "";
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

// edit note btn
function editNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  const note = notes[index];
  if (note) {
      contentTitle.value = note.title;
      contentDescription.value = note.description;
      popupBox.classList.add("show");
      contentHeader.innerText = "Edit Note";
      contentBtn.innerText = "Update Note";
      editIndex = index;
  }
}

function toggleSetting(element) {
    // Close other menus first
    document.querySelectorAll(".settings.show").forEach(menu => {
        if (menu !== element.parentElement) {
            menu.classList.remove("show");
        }
    });
    element.parentElement.classList.toggle("show");
}

// Make functions available globally
window.deleteNote = deleteNote;
window.toggleSetting = toggleSetting;
window.editNote = editNote;

// Close settings menu when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".settings")) {
        document.querySelectorAll(".settings.show").forEach(menu => {
            menu.classList.remove("show");
        });
    }
});
