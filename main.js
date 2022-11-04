//querySelector variables
var newTitle = document.querySelector("#titleInput")
var newBody = document.querySelector("#bodyInput")
var saveIdeaButton = document.querySelector("#saveButton")
var showStarredIdeasButton = document.querySelector("#showStarredIdeasButton")
// var cardBox = document.querySelector() //what is this for?


//eventListeners
// newTitle.addEventListener("input", somefunction)
// newBody.addEventListener("input", somefunction)
saveIdeaButton.addEventListener("click", function(event) {
    saveIdeas() //save to array data model
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
}

function resetForm(){
    newTitle.value = ""
    newBody.value = ""
}