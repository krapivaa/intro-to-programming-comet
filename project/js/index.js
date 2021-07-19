//SKILLS
let skills =["HTML", "CSS", "JavaScript", "..."];

let skillsSection = document.getElementById("skills");
let skillList = skillsSection.getElementsByTagName("ul")[0];


for (let i = 0; i < skills.length; i ++) {

    skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillList.appendChild(skill);

}




//FOOTER
let today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = "Marina Ivanovskaya  " + thisYear;
footer.appendChild(copyright);