const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/9?200x200'
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
      }
      ];

    const cardContainer = document.getElementById('cardContainer'); // Get the container element by its id
    const searchBox = document.getElementById('searchBox'); // Get the search box input element by its id
    
    const profileContainer = document.getElementById('profileContainer'); // Get the profile container element by its id
    const profileImage = document.getElementById('profileImage'); // Get the profile image element by its id
    const profileDetails = document.getElementById('profileDetails'); // Get the profile details element by its id
    const backBtn = document.getElementById('backBtn'); // Get the back button element by its id


    // Function to filter robots based on input value
    const filterRobots = () => {
    // Clear card container
    cardContainer.innerHTML = '';

    const inputValue = searchBox.value.toLowerCase(); // Get input value in lowercase
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(inputValue)); // Filter robots based on input value

    // Loop through the filtered robots array and create a card for each robot
    filteredRobots.forEach(robot => {
      // Create card div element
      const card = document.createElement('div');
      card.className = 'card';

      // Create robot image element
      const img = document.createElement('img');
      img.src = robot.image;
      img.alt = robot.name;
      card.appendChild(img); // Append image to card
      card.className = 'card img'

      // Create robot name element
      const name = document.createElement('h2');
      name.textContent = robot.name;
      card.appendChild(name); // Append name to card
      card.className = 'card h2'

      // Create robot username element
      const username = document.createElement('p');
      username.textContent = `Username: ${robot.username}`;
      card.appendChild(username); // Append username to card
      card.className = 'card h2'

      // Create robot email element
      const email = document.createElement('p');
      email.textContent = `Email: ${robot.email}`;
      card.appendChild(email); // Append email to card
      card.className = 'card p'

      // Append card to card container
      cardContainer.appendChild(card);

      // Add click event listener to robot image
      img.addEventListener('click', () => showProfile(robot));
     });
    };

    // Add event listener to search box for input event
    searchBox.addEventListener('input', filterRobots);

    // Initial card creation on page load
    filterRobots();


    // Function to show profile of clicked robot
    const showProfile = (robot) => {
    // Set profile image source and alt
    profileImage.src = robot.image;
    profileImage.alt = robot.name;

    // Set profile details
    profileDetails.innerHTML = `
      <h2>${robot.name}</h2>
      <p>Username: ${robot.username}</p>
      <p>Email: ${robot.email}</p>
    `;

    // Show profile container and hide card container
    cardContainer.style.display = 'none';
    profileContainer.style.display = 'flex';
    };

    // Function to go back to main robots page from profile page
    const goBack = () => {
    // Hide profile container and show card container
      profileContainer.style.display = 'none';
      cardContainer.style.display = 'flex';
    };

    // Add click event listener to back button
    backBtn.addEventListener('click', goBack);
