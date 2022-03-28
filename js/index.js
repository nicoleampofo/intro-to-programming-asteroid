let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');

copyright.innerHTML = `${'Nicole Ampofo'} ${thisYear}`

// append the copyright element to the footer
document.body.appendChild(copyright)

let skills = ['Front end', 'Back end', 'HTML', 'CSS', 'javascript']

let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul')

// Create a for loop to iterate over your skills Array, starting at index 0
// Inside the loop, create a new list item (li) element and store it in a variable named skill (createElement)
// On the next line, set the inner text of your skill variable to the value of the current Array element
//  On the next line, append the skill element to the skillsList element (appendChild)

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
        skill.innerHTML = skills[i];
        document.body.appendChild(skill);

  }