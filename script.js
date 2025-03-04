import { projectsInfo } from "./projects.js"

const next = document.getElementById("next")
const back = document.getElementById("back")
const projects = document.getElementById("projects")
const form = document.getElementById("form")

const gap = 30;
const width = projects.offsetWidth 

document.addEventListener("DOMContentLoaded", event => {
    projectsInfo.forEach(project => {
        const container = document.createElement("div") //make a new div container for the project card
        container.classList.add("project-card")

        const title = document.createElement("h3") //make a title for this card
        title.innerText = project.projectName
        title.classList.add("project-title")

        const image = document.createElement("img") //make a new image for this card
        image.src = project.projectImage
        image.classList.add("project-image")

        const desc = document.createElement("p")
        desc.innerText = project.projectDesc
        desc.classList.add("project-text")

        const githubLink = document.createElement("a")
        githubLink.href = project.projectLink
        githubLink.innerText = "Link"
        githubLink.classList.add("project-link")

        githubLink.classList.add("project-link")

        container.append(image)
        container.append(title)
        container.append(desc)
        container.append(githubLink)

        projects.append(container)
    })

})

next.addEventListener("click", event => {
    projects.scrollBy(width + gap, 0)
})

back.addEventListener("click", event => {
    projects.scrollBy(-(width + gap), 0)
})

//-----------------------------------------------------------------
const drawerItems = document.querySelectorAll(".info-wrapper")
const drawerAnswers = document.querySelectorAll(".answer")
drawerItems.forEach(item => {
    console.log("entered foreach")
    const question = item.querySelector(".question")
    const answer = item.querySelector(".answer")
    question.addEventListener("click", () => {
        console.log('entered')
        let open = answer.classList.contains("open")
        drawerAnswers.forEach(answer => (answer.classList.remove('open')))

        if(!open) {
            answer.classList.add("open")
        }
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
