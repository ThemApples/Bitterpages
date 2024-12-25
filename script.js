// Get references to necessary DOM elements
const terminalInput = document.getElementById('terminalInput');
const outputDiv = document.getElementById('output');

// List of available commands
const commandsList = `
Available commands:
- clear: Clears the terminal screen
- help: Displays this help message
`;

// Function to display the output of commands
function processCommand(command) {
    if (command === 'clear') {
        // If the command is 'clear', we clear the output div
        outputDiv.innerHTML = '';
    } else if (command === 'help') {
        // If the command is 'help', show the list of commands
        const output = document.createElement('div');
        output.textContent = commandsList;
        outputDiv.appendChild(output);
    } else if (command === 'date') {
        // If the command is 'date', show the list of commands
        const output = document.createElement('div');
        output.textContent = new Date().toLocaleString();
        outputDiv.appendChild(output);
    } else {
        // For any other command, we display it in the terminal
        const output = document.createElement('div');
        output.textContent = `Command not found: ${command}`;
        outputDiv.appendChild(output);
    }

    // Auto-scroll the output div to the bottom
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Event listener to handle Enter key press
terminalInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default Enter action (new line)
        const command = terminalInput.value.trim();
        if (command) {
            processCommand(command); // Process the command entered by the user
        }
        terminalInput.value = ''; // Clear the input field after processing the command
    }
});
