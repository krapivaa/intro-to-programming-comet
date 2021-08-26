//SKILLS
let skills =["HTML", "CSS", "JavaScript", "Git", "Bootstrap"];

let skillsSection = document.getElementById("skills");
let skillList = skillsSection.getElementsByTagName("ul")[0];


for (let i = 0; i < skills.length; i ++) {
    skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skill.className = "itemSkills";
    skillList.appendChild(skill);
}

//PROJECTS

/*
//for each AJAXrequest new XHR object should be created
let  githubRequest = new XMLHttpRequest();
//craete callback function - asynchronous part of AJAX - to trigger the call back we use a special browser event
githubRequest.onreadystatechange= function () {

    if (githubRequest.readyState === 4) {
    let repositories = JSON.parse(this.response);
    console.log(repositories);
   
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for (let i  = 0; i < repositories.length; i++){
      let project = document.createElement("a");
      project.href = repositories[i].html_url; 
      project.target = "_blank"  

      project.innerText = repositories[i].name.toUpperCase(); 
      project.className  = "projectUl";

      let projectlan = document.createElement("li");
      projectlan.innerText = repositories[i].language;   
      projectlan.style.fontStyle = "italic"; 

      projectList.appendChild(project);
      projectList.appendChild(projectlan);
    }
  } 
}
//sending the request
githubRequest.open("GET", "https://api.github.com/users/krapivaa/repos");
githubRequest.send();
*/


//FETCH API
fetch ("https://api.github.com/users/krapivaa/repos", {
    method: "GET"
    })
    .then(response => response.json())
    .then(data => githubRequest(data))
    .catch((error) => {
        console.error("Error:", error);
    })

    function githubRequest(data) {

        let projectSection = document.getElementById("projects");
        let projectList = projectSection.querySelector("ul");
    
        for (let i  = 0; i < data.length; i++){

         let projectItem  =  document.createElement("li");

          let project = document.createElement("a");
          project.href = data[i].html_url; 
          project.target = "_blank"  
    
          project.innerText = data[i].name.toUpperCase(); 
          project.className  = "projectUl";
    
          let projectlan = document.createElement("li");
          projectlan.innerText = data[i].language;   
          projectlan.style.fontStyle = "italic"; 

          projectItem.appendChild(project);
          projectItem.appendChild(projectlan);
          projectList.appendChild(projectItem);
        
        }
      } 
  

//MESSAGES
let messageForm = document.getElementsByName("leave_message")[0];


messageForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    // console.log(name, email, message);


    let messageSection = document.getElementById("messages");
    //remove hidden attribute
    messageSection.removeAttribute("hidden");

    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href=mailto:${email}><b>${name}</b></a> wrote: <span>${message} </span>`;
    newMessage.className = "newMessage";

    //edit button
    let editButton =  document.createElement("button");
    editButton.innerText = "edit";
    editButton.type = "button";

    editButton.addEventListener("click", (e) => {

        if (editButton.textContent === "edit") {
            let span  =  newMessage.querySelector("span");
            let input = document.createElement("input");
            input.type = "text";
            input.value = span.textContent;
            newMessage.insertBefore(input, span);
            newMessage.removeChild(span);
            editButton.textContent = "save";
        } else if (editButton.textContent === "save") {
            let input  = newMessage.querySelector("input");
            let span = document.createElement("span");
            span.textContent = input.value;
            newMessage.insertBefore(span, input);
            newMessage.removeChild(input);
            editButton.textContent = "edit";
        }
    
    });

        //remove button
        let removeButton = document.createElement("button");
        removeButton.innerText = "remove";
        removeButton.type = "button";
        removeButton.className = "remove";

        removeButton.addEventListener("click", (e) => {
        let li  = e.target.parentNode;
        let ul = li.parentNode;
        li.remove();
        
        if (ul.childElementCount == 0) {
            messageSection.setAttribute("hidden", true);
        }
    
    });

    //append elements
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
    
});


//FOOTER
let today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = "Created by <b>Marina Ivanovskaya</b>&copy  " + thisYear;
footer.appendChild(copyright);