/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/cladams0203')
    .then(response => {
        const cards = document.querySelector('.cards')
        cards.appendChild(
        gitCard(response.data.avatar_url, response.data.name, response.data.login, response.data.location, response.data.html_url, response.data.followers, response.data.following, response.data.bio)
        )
    })
    .catch(err => console.log(err))

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];
function gitCard(image, name, username, location, github, followers, following, bio) {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card')
    const userImage = document.createElement('img')
    userImage.src = image
    const infoContainer = document.createElement('div')
    infoContainer.classList.add('card-info')
    const heading = document.createElement('h3')
    heading.classList.add('name')
    heading.textContent = name
    const uName = document.createElement('p')
    uName.classList.add('username')
    uName.textContent = username
    const userLocation = document.createElement('p')
    userLocation.textContent = `Location: ${location}`
    const profile = document.createElement('p')
    profile.textContent = `Profile: `
    const link = document.createElement('a')
    link.setAttribute('href', github)
    link.textContent = github
    const follower = document.createElement('p')
    follower.textContent = `Followers: ${followers}`
    const follow = document.createElement('p')
    follow.textContent = `Following: ${following}`
    const userBio = document.createElement('p')
    userBio.textContent = `Bio: ${bio}`
    cardContainer.appendChild(userImage)
    cardContainer.appendChild(infoContainer)
    infoContainer.appendChild(heading)
    infoContainer.appendChild(uName)
    infoContainer.appendChild(userLocation)
    infoContainer.appendChild(profile)
    profile.appendChild(link)
    infoContainer.appendChild(follower)
    infoContainer.appendChild(follow)
    infoContainer.appendChild(userBio)

    return cardContainer

}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
