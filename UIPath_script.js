document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("note-input");
    const addNoteBtn = document.getElementById("add-note");
    const notesList = document.getElementById("notes-list");

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    function saveNotes() {
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function renderNotes() {
        notesList.innerHTML = "";
        notes.forEach((note, index) => {
            const li = document.createElement("li");

            const span = document.createElement("span");
            span.textContent = note;
            
            const editBtn = document.createElement("button");
            editBtn.textContent = "✏️";
            editBtn.className = "edit";
            editBtn.onclick = () => editNote(index);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.className = "delete";
            deleteBtn.onclick = () => deleteNote(index);

            li.appendChild(span);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            notesList.appendChild(li);
        });
    }

    function addNote() {
        const noteText = noteInput.value.trim();
        if (noteText === "") return;
        notes.push(noteText);
        saveNotes();
        renderNotes();
        noteInput.value = "";
    }

    function editNote(index) {
        const newText = prompt("Edit Note:", notes[index]);
        if (newText !== null) {
            notes[index] = newText;
            saveNotes();
            renderNotes();
        }
    }

    function deleteNote(index) {
        notes.splice(index, 1);
        saveNotes();
        renderNotes();
    }

    addNoteBtn.addEventListener("click", addNote);
    renderNotes();
});
