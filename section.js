let projectBtn =  document.querySelectorAll("project-btn");

projectBtn.forEach((button) => {
    projectBtn.addEventListener("click", () => {
        document.getElementById("project-name-holder").innerHTML = 'hi';
        console.log("Hello, " + projectBtn.innerHTML);
    })
})

console.log("Hello, " + projectBtn.innerHTML);
