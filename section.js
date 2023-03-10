


let projectBtn =  document.querySelectorAll(".project-btn");


// #77DD7
let btnIndicator = projectBtn;


function projectClicks(){
    projectBtn[0].addEventListener("click", () =>{
        document.getElementById("project-name-holder").innerHTML = 'Project 1';
        console.log("Project 1 clicked");
        
    })
    
    projectBtn[1].addEventListener("click", () =>{
        document.getElementById("project-name-holder").innerHTML = 'Project 2';
        console.log("Project 2 clicked");

    })
    
    projectBtn[2].addEventListener("click", () =>{
        document.getElementById("project-name-holder").innerHTML = 'Project 3';
        console.log("Project 3 clicked");

    })
    
    projectBtn[3].addEventListener("click", () =>{
        document.getElementById("project-name-holder").innerHTML = 'Project 4';
        console.log("Project 4 clicked");
        
    })
    
    projectBtn[4].addEventListener("click", () =>{
        document.getElementById("project-name-holder").innerHTML = 'Project 5';
        console.log("Project 5 clicked");

    })

    projectBtn[5].addEventListener("click", () =>{
        document.getElementById("project-name-holder").innerHTML = 'Project 6';
        console.log("Project 6 clicked");

    })
    
}

projectClicks()
