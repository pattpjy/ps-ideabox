//querySelector variables
var newTitle = document.querySelector("#titleInput")
var newBody = document.querySelector("#bodyInput")
var saveIdeaButton = document.querySelector("#saveButton")
var showStarredIdeasButton = document.querySelector("#showStarredIdeasButton")
// var cardBox = document.querySelector() //what is this for?


//eventListeners
newTitle.addEventListener("input", showSaveButton)
newBody.addEventListener("input", showSaveButton)
saveIdeaButton.addEventListener("click", function(event) {
    saveIdeas() //save to array data model
    showSaveButton()
    hideSaveButton() // why is this affecting the function hide and save?
    //another function to display to DOM like function displayUserIdeaCard
    event.preventDefault()
})
// cardBox.addEventListener("click", somefunction)
// *cardBoxSave.addEventListener("click", somefunctionSave) //might need to change name for star button
// *cardBoxDelete.addEventListener("click", somefunctionDelete) //might need to change name for X button
// // showStarredIdeasButton.addEventListener("click", somefunction)
var ideas = []
// // userIdeaBox.classList.toggle('hidden') this will un-hidden

function saveIdeas(){
    console.log("hello")
    var newIdea = new Idea(newTitle.value, newBody.value)
    ideas.push(newIdea)
    resetForm()
    saveIdeaButton.style.opacity = "0.1"
}

function resetForm(){
    newTitle.value = ""
    newBody.value = ""
}

function showSaveButton() {
    if(newTitle.value != "" && newBody.value != ""){
    saveIdeaButton.style.opacity = "1"
    saveIdeaButton.style.cursor = "pointer"
    }
}

function hideSaveButton() {
    if(newTitle.value === "" || newBody.value === ""){
    saveIdeaButton.style.opacity = "0.1"
    }
    //function is not fully working when you fill out value for either body or title then delete one the button does not hide but it should. 
}

function makeUserIdeaCard() {
    cardBox.innerHTML += 
    //start of add UserCard to DOM