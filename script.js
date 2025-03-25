import { projectsInfo } from "./projects.js"

const next = document.getElementById("next") //select the next button
const back = document.getElementById("back") //select the back button
const projects = document.getElementById("projects") //select the projects section
//const form = document.getElementById("form")

const gap = 30; //gap constant for the gaps between the project cards
let width = projects.offsetWidth //set width initially

document.addEventListener("DOMContentLoaded", event => { //on page load, we'll want to load in all our project cards
    projectsInfo.forEach(project => { //for each object in the array,
        const container = document.createElement("div") //make a new div container for the project card
        container.classList.add("project-card")

        const title = document.createElement("h3") //make a title for this card
        title.innerText = project.projectName
        title.classList.add("project-title")

        const image = document.createElement("img") //make a new image for this card
        image.src = project.projectImage
        image.classList.add("project-image")

        const desc = document.createElement("p") //make a description paragraph
        desc.innerText = project.projectDesc
        desc.classList.add("project-text")

        const githubLink = document.createElement("a") //make a link to the repo
        githubLink.href = project.projectLink
        //githubLink.setAttribute("target", "_blank")
        githubLink.innerText = "Link"
        githubLink.classList.add("project-link")

        //githubLink.classList.add("project-link")

        //
        container.append(image)
        container.append(title)
        container.append(desc)
        container.append(githubLink)

        projects.append(container)
    })
})

next.addEventListener("click", event => { //go to next card
    width = projects.offsetWidth //recalculate for resizing
    projects.scrollBy(width + gap, 0)
    console.log(width)
})

back.addEventListener("click", event => { //prev card
    width = projects.offsetWidth //recalculate for resizing
    projects.scrollBy(-(width + gap), 0)
})



//-----------------------------------------------------------------
const drawerItems = document.querySelectorAll(".info-wrapper") //the outer drawer wrappers
const drawerAnswers = document.querySelectorAll(".answer") //the answers

drawerItems.forEach(item => {
    const question = item.querySelector(".question")
    const answer = item.querySelector(".answer")

    question.addEventListener("click", () => {

        //first, close all the drawers
        let open = answer.classList.contains("open") //whether this drawer you've clicked is currently open
        drawerAnswers.forEach(answer => (answer.classList.remove('open')))

        if(!open) { //for this clicked drawer, if it wasn't already open, then open it
            answer.classList.add("open")
        } //if it's already open, then it'll close due to line 70 

        //we'll keep the others closed

    })
})


//-----------------------------------------------------------------

// form.addEventListener("submit", event => { //form validation?
//     event.preventDefault()

//     //take the form contents and send them somewhere
//     const emailInput = document.getElementById("email")
//     const commentInput = document.getElementById("comment")

//     const email = emailInput.value
//     const comment = commentInput.value

//     console.log(email, comment)

//     //generate a success message
//     const container = document.createElement("div")

//     const text = document.createElement("p")
//     text.innerText = "Thank you for your interest!"

//     container.append(text)
//     container.style.backgroundColor = "lightgreen"
//     container.style.padding = "10px"
//     container.style.width = "fit-content"
//     container.style.borderRadius = "1rem"

//     form.appendChild(container)
// })
