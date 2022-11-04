//querySelector variables
var newTitle = document.querySelector("#titleInput")
var newBody = document.querySelector("#bodyInput")
var saveIdeaButton = document.querySelector("#saveButton")
var showStarredIdeasButton = document.querySelector("#showStarredIdeasButton")
var cardBox = document.querySelector(".user-idea-box")



//eventListeners
newTitle.addEventListener("input", showSaveButton)
newBody.addEventListener("input", showSaveButton)
saveIdeaButton.addEventListener("click", function(event) {
    event.preventDefault()
    showSaveButton()
    hideSaveButton() // why is this affecting the function hide and save?
    //another function to display to DOM like function displayUserIdeaCard
    makeUserIdeaCard()
})
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
    saveIdeaButton.removeEventListener('click')
    }
    //function is not fully working when you fill out value for either body or title then delete one the button does not hide but it should. 
}


function makeUserIdeaCard() {
    saveIdeas()
    cardBox.classList.remove('hidden');
    console.log('help')
    cardBox.innerHTML = "";
    for (var i = 0; i < ideas.length; i++) {
        cardBox.innerHTML += 
    `<div class="userIdeaBox" id="userIdeaBox">
                <div id="miniboxTop">
                    <button class="button" id="starButton"></button>
                    <button class="button" id="xButton"></button>
                </div>
                <div id="miniboxInner">
                    <h2 class="idea-title" id="ideaTitle">${ideas[i].title}</h2>
                    <p class="idea-body" id="ideaBody">${ideas[i].body}</p>
                </div>
                <div id="miniboxFooter">
                    <button class="button" id="commentButton">Comment</button>
                </div>
            </div>`
    }
}