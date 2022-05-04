let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');

copyright.innerHTML = `Nicole Ampofo ${thisYear}`

// append the copyright element to the footer
footer.appendChild(copyright)

let skills = ['Front end', 'Back end', 'HTML', 'CSS', 'JavaScript']

let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul')

// Create a for loop to iterate over your skills Array, starting at index 0
// Inside the loop, create a new list item (li) element and store it in a variable named skill (createElement)
// On the next line, set the inner text of your skill variable to the value of the current Array element
//  On the next line, append the skill element to the skillsList element (appendChild)

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
        skill.classList.add('skill-block')
        skill.innerHTML = skills[i];
        skillsList.appendChild(skill);

  }

let messageForm = document.querySelector('[name="leave_message"]')

messageForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const name = e.target.name.value;
  const email = e.target.email.value
  const message = e.target.message.value

  let messageSection = document.querySelector('#messages')
  let messageList = messageSection.querySelector("ul")
  let newMessage = document.createElement('li')

  newMessage.innerHTML = `<a href="mailto:${email}" target="_blank">${name}</a><span> wrote: ${message} </span>`;
  messageList.appendChild(newMessage)

  const removeButton = document.createElement("button")
  removeButton.innerText = 'Remove'
  removeButton.type = "button"

  removeButton.addEventListener("click", (e) => {
    const entry = e.target.parentNode;
    entry.remove()
  })

  newMessage.appendChild(removeButton)
  messageList.appendChild(newMessage)
  messageForm.reset()

  // console.log(email)
  // console.log(message)
  // console.log(email)

});
