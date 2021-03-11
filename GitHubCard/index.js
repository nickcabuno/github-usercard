import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):*/

axios.get('https://api.github.com/users/nickcabuno') 
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })


axios.get('https://api.github.com/users/nickcabuno') 
     .then(res => {
       console.log(res.data)
     })
     .catch(error => {
       console.log(error)
     });


 const peeps = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
 ]

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const cardz = document.querySelector('.cards')


function cardMaker(peep) {
  
  const cardHolder = document.createElement("div");
  cardHolder.classList.add('card')

  const image = document.createElement("img");
  image.src = `${peep.avatar_url}`;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add('card-info')

  const name = document.createElement("h3");
  name.classList.add('name')
  name.textContent = `name: ${peep.name}`;

  const username = document.createElement("p");
  username.classList.add('username')
  username.textContent = `username: ${peep.username}`;

  const location = document.createElement("p");
  location.textContent = `location: ${peep.location}`;

  const profile = document.createElement("p");
  profile.textContent = `profile: ${peep.html_url}`;

  const followers = document.createElement("p");
  followers.textContent = `followers: ${peep.followers}`;

  const following = document.createElement("p");
  following.textContent = `following: ${peep.following}`;

  const bio = document.createElement("p");
  bio.textContent = `bio: ${peep.bio}`;
  
  
  cardHolder.appendChild(image);
  cardHolder.appendChild(cardInfo);
  
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  
  return cardHolder;
}



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


peeps.forEach(user => {

axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      cardz.appendChild(cardMaker(response.data));
    })
    .catch(err => {
      console.log(err);
    })

  });
// cardz.appendChild(cardMaker(peeps))  


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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




  /*List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
