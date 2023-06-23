Mini-Project - RSS Facts Feed - EJS
What You Will Learn:
Node.js
Express
Node.js modules
Rss feeds


What You Will Create
We are going to build an RSS reader about facts.

What is an RSS Feed ?

This tool will be build in Node.js:

get all posts from the the RSS Feed
get only the posts depending on their title
get only the posts depending on their category
RSS project



Instructions
Setup
Create a new directory, and use npm init

Create a new file named server.js,
install and import express,
install and import body-parser,
install and import cors,
install axios,
install ejs,
install and import rss-parser - a node.js module. See the documentation here

We will use this RSS Fact Feed https://thefactfile.org/feed/

Add the code below from the rss-parser documentation.
replace the ‘your-rss-feed’ to the url given above. Make some tests to understand how it works and run the application.
let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('your-rss-feed');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();


Static Files
Create a public directory, with tow subfolder : partials and pages.


In the partials folder, create four ejs files:

footer.ejs : contains a simple footer with the paragram “Copyright 2021 …”
head.ejs : contains the CDN of Bootstrap, and some style in a <style> tag
header.ejs : contains a Boostrap navbar with the links

    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/search">Search</a>
posts.ejs : contains a div, where the posts are displayed. Each posts is composed of:

a link that redirects the user to the specific post in the website https://www.thefactsite.com/
the publication date, creator, category and content of the post

In the pages folder, create two ejs files:

search.ejs :
It should include the files head.ejs, header.ejs, posts.ejs and footer.ejs.
It should contain two forms, to search a post by title and by category (with options).
index.ejs is the home page displaying all the posts.
It should include the files head.ejs, header.ejs, posts.ejs and footer.ejs.


The Server
Create a few routes in the file server.js:
/ route : will retrieve all the facts from the RSS feed and render the posts in the index.ejs file. It’s a GET request.
/search route: renders the search.ejs file. At first, no posts should be displayed. It’s a GET request.
/search/title route: will retrieve the input (ie. chosen title) of the user, and render the correct post in the search.ejs file. It’s a POST request.
/search/category route: will retrieve the input (ie. chosen category) of the user, and render the correct post in thesearch.ejs file. It’s a POST request.



SOLUTION:

<!-- Implementation of the mini-project using Node.js, Express, EJS, and the rss-parser module:

Set up the project:
Create a new directory and navigate to it: -->

mkdir rss-facts-feed
cd rss-facts-feed


<!-- Initialize the project with npm: -->

npm init


<!-- Install the required packages: -->

npm install express body-parser cors axios ejs rss-parser



<!-- Create a new file named server.js and open it in your preferred text editor.

Import the required modules and set up the Express server: -->




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();
const PORT = 3000; // Change this port number if needed

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


<!-- Define the routes and implement the functionality: -->

// Root route: Retrieve all facts from the RSS feed and render the posts in index.ejs
app.get('/', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');

    res.render('pages/index', { feed });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Search route: Render the search page with no posts displayed
app.get('/search', (req, res) => {
  res.render('pages/search');
});

// Search by title route: Render the search page with the post matching the given title
app.post('/search/title', async (req, res) => {
  const { title } = req.body;

  try {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    const filteredPosts = feed.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));

    res.render('pages/search', { posts: filteredPosts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Search by category route: Render the search page with the posts matching the given category
app.post('/search/category', async (req, res) => {
  const { category } = req.body;

  try {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    const filteredPosts = feed.items.filter(item => item.categories.includes(category));

    res.render('pages/search', { posts: filteredPosts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



<!-- Set up the directory structure and create the EJS files:
Create a public directory in the root of the project.

Inside the public directory, create two subdirectories: partials and pages.

Create the following EJS files inside the respective directories: -->

<!-- partials/footer.ejs: -->

<footer>
  <p>&copy; 2023 Your Name</p>
</footer>


<!-- partials/head.ejs: -->

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <style>
    /* Add your custom styles here */
  </style>
</head>


<!-- partials/header.ejs: -->

<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">RSS Facts Feed</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search</a>
        </li>
      </ul>
    </div>
  </nav>
</header>


<!-- partials/posts.ejs: -->

<div class="posts">
  <% if (typeof posts !== 'undefined' && posts.length > 0) { %>
    <% posts.forEach((post) => { %>
      <div class="post">
        <a href="<%= post.link %>">
          <h2><%= post.title %></h2>
        </a>
        <p>Publication Date: <%= post.pubDate %></p>
        <p>Creator: <%= post.creator %></p>
        <p>Category: <%= post.categories.join(', ') %></p>
        <p><%= post.contentSnippet %></p>
      </div>
    <% }) %>
  <% } else { %>
    <p>No posts found.</p>
  <% } %>
</div>


<!-- pages/index.ejs: -->

<!DOCTYPE html>
<html>
<head>
  <title>RSS Facts Feed - Home</title>
  <% include partials/head %>
</head>
<body>
  <% include partials/header %>
  <div class="container">
    <h1>All Posts</h1>
    <% include partials/posts %>
  </div>
  <% include partials/footer %>
</body>
</html>


<!-- pages/search.ejs: -->

<!DOCTYPE html>
<html>
<head>
  <title>RSS Facts Feed - Search</title>
  <% include partials/head %>
</head>
<body>
  <% include partials/header %>
  <div class="container">
    <h1>Search Posts</h1>
    <form action="/search/title" method="POST">
      <input type="text" name="title" placeholder="Search by title">
      <button type="submit">Search</button>
    </form>
    <form action="/search/category" method="POST">
      <select name="category">
        <option value="animals">Animals</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="technology">Technology</option>
      </select>
      <button type="submit">Search</button>
    </form>
    <% include partials/posts %>
  </div>
  <% include partials/footer %>
</body>
</html>


<!-- Save all the files, and you can now run the server using node server.js. Visit http://localhost:3000 in your browser to see the RSS Facts Feed application in action. -->
