// Grab UI elements
const output = document.getElementById('output');
const runBtn = document.getElementById('runBtn');
const clearBtn = document.getElementById('clearBtn');

function appendLine(text){
  // Append to "console" on the page
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
  // Also log to real console
  console.log(text);
}

// The function that runs the bot
function runTriviaBot(){
  // Read values from inputs
  let botName = document.getElementById('botName').value || "TriviaBot";
  let botLocation = document.getElementById('botLocation').value || "the Internet";
  let favoriteLanguage = document.getElementById('favoriteLanguage').value || "JavaScript";

  // Clear previous output
  output.textContent = "";

  // Lines to print (using string concatenation + as required)
  const lines = [
    "Hello! I'm your coding fun fact guide!",
    "My name is " + botName + " and I live on " + botLocation + ".",
    "My favorite programming language is " + favoriteLanguage + ".",
    favoriteLanguage + " was created in just 10 days!",
    favoriteLanguage + " is one of the core technologies of the World Wide Web.",
    favoriteLanguage + " can be used for both frontend and backend development.",
    "It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + "."
  ];

  // Print lines with a short stagger for nicer UX
  lines.forEach((line, idx) => {
    setTimeout(() => appendLine(line), idx * 350);
  });
}

// attach events
runBtn.addEventListener('click', runTriviaBot);
clearBtn.addEventListener('click', () => output.textContent = "");

// Run once on load so page shows output immediately
runTriviaBot();
