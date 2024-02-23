/**
 * Boilerplate for making a simple, minimalisic p5.js project
 * @arg {string} Name of the project to be created
 */
const fs = require("fs");
const projectName = process.argv[2] || "default-p5js-project";

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.js"></script>
    <script src="${projectName}.js"></script>
</head>
<body>
    <main></main>
</body>
</html>
`;
const jsContent = `
function preload() {
    // Code in this function runs before setup().
}
function setup() {
    // Code in this function runs once before draw().
}
function draw() {
    // Code in this function runs every frame.
}
`;

// Actual boiler plate execution
try {
  fs.mkdir(projectName, (err) => {
    if (err) console.error("Error creating project folder", err);
    else console.log("Project folder created successfully");
  });
  fs.mkdir("assets", (err) => {
    if (err) console.error("Error creating assets folder", err);
    else console.log("Assets folder created successfully");
  });
  fs.writeFile(`./${projectName}/${projectName}.js`, jsContent, (err) => {
    if (err) console.error("Error creating JavaScript file", err);
    else console.log("JavaScript file created successfully");
  });
  fs.writeFile(`./${projectName}/index.html`, htmlContent, (err) => {
    if (err) console.error("Error creating JavaScript file", err);
    else console.log("JavaScript file created successfully");
  });
} catch (e) {
  console.error("Creation Error:", e);
}
