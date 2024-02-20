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
