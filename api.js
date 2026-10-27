document.addEventListener("DOMContentLoaded", () => {
    const loadBtn = document.getElementById("load-btn");
    const statusEl = document.getElementById("status");
    const noteForm = document.getElementById("note-form");
    const titleInput = document.getElementById("title-input");
    const bodyInput = document.getElementById("body-input");
    const notesList = document.getElementById("notes-list");

    const API_BASE = "https://jsonplaceholder.typicode.com/posts"; // Mock API endpoint for demonstration

    // Load notes
    loadBtn.addEventListener("click", async () => {
        statusEl.textContent = "Loading notes...";
        try {
            const response = await fetch(`${API_BASE}?_limit=5`);
            if (!response.ok) throw new Error("Failed to fetch notes");
            const notes = await response.json();
            
            notesList.innerHTML = "";
            notes.forEach(note => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${note.title}</strong><p>${note.body}</p>`;
                notesList.appendChild(li);
            });
            statusEl.textContent = "Notes loaded successfully.";
        } catch (error) {
            statusEl.textContent = `Error: ${error.message}`;
        }
    });

    // Create note
    noteForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        statusEl.textContent = "Creating note...";

        const newNote = {
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        };

        try {
            const response = await fetch(API_BASE, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newNote)
            });
            if (!response.ok) throw new Error("Failed to create note");
            
            const created = await response.json();
            const li = document.createElement("li");
            li.innerHTML = `<strong>${created.title}</strong><p>${created.body || bodyInput.value}</p>`;
            notesList.prepend(li);

            statusEl.textContent = "Note created successfully!";
            noteForm.reset();
        } catch (error) {
            statusEl.textContent = `Error: ${error.message}`;
        }
    });
});