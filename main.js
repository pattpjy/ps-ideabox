let ideas = [];

function saveIdeas() {
  const newIdea = new Idea(pom.newTitle.value, pom.newBody.value);
  ideas.push(newIdea);
  resetForm();
}
