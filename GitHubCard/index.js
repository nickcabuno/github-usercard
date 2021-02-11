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

function getCards(login) {
  axios.get(`https://api.github.com/users/${login}`)
    .then(response => {
      const card = response.data;

      card.forEach((login) => {
        const cardDiv = cardMaker({login: login});
        cardz.append(cardDiv);
      });
    })
    .catch(err => {
      console.log(err);
    })
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


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

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


  function cardMaker({login}){
    
    axios.get(`https://api.github.com/users/${login}`)

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardImg = document.createElement('img');

    const cardInfoDiv = document.createElement('div');
    cardInfoDiv.classList.add('card-info');

    const h3 = document.createElement('h3');
    h3.classList.add('name');

    const p1 = document.createElement('p');
    p1.classList.add('username')

    const p2 = document.createElement('p');

    const p3 = document.createElement('p');
    

    const p4 = document.createElement('p')
    

    const p5 = document.createElement('p')
    

    const p6 = document.createElement('p')

    cardImg.src = res.data.avatar_url;
    h3.textContent = res.data.name;
    p1.textContent = res.data.login;
    p2.textContent = `Location: ${res.data.location}`;
    p3.textContent = `Profile: ${res.data.url}`;
    p4.textContent = `Followers: ${res.data.followers}`
    p5.textContent = `Following: ${res.data.following}`
    p6.textContent = `Bio: ${res.data.bio}`
    

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(h3);
    cardDiv.appendChild(p1);
    cardDiv.appendChild(p2);
    cardDiv.appendChild(p3);
    cardDiv.appendChild(p4);
    cardDiv.appendChild(p5);
    cardDiv.appendChild(p6);



    return cardDiv

  }







