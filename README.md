# COSC360 Assignment - Blog - React

Marc Betbeder - SID: 220263237
https://github.com/MarcBM/mbetbede_cosc360_blog_react

## Run Instructions

- Ensure that the Laravel app is up and running (refer to the laravel repo README.md file for instructions)
- Ensure you are in the root directory of this project, where this README.md is located.
- run `npm install` to ensure any dependencies are present and up to date.
- run `npm start` to start the react app.
- visit `localhost:3000` or replace the port number with whichever port it has run on to see the home page.

I am currently unsure as to whether or not the authorisation api key will work, which may result in incorrect returns for both the posts and post details pages.

## Report

### Approach

This part of the assignment was the most interesting to me as I had always heard about React, but had never spent the time to learn it myself before this course. I began by following Ibrahim in the lectures, which helped me set up the basic structure of the app, and allowed me to play around with dummy data to ensure that I had the app looking at least somewhat appealing.\
I then had to experiment quite a bit to implement fetching my own data from my laravel api, many of the challenges I encountered are outlined below.\
I did not spend too much time making the website look good, as this is not an aspect of web development that I enjoy, so having the website look passable was good enough for me.\
Once I had implemented both pages, I made sure to test them rigorously by inputting incorrect URLs, and by changing my authentication token to ensure it would not work without the correct token.\
While I did ensure that the site does respond with a holding screen, I did not do any more sophisticated error handling or re-routing, and did not have time to implement a login screen to make use of my login api route.\

### Challenges

By far the most challenging part of this assignment was ensuring that fetch would provide me with usable data.\
Most of the challenge came with fetching all my posts, as the data type I was fetching was a bit more complicated than a single JSON object, being multiple JSON objects in an array. This was confusing initially as I did not know how to prototype the result, since I needed to both reflect that it was an array, and also that it contained usable data.\
I eventually found that my error was not in the type declaration in the useState() call, but instead in my data assignment in setPosts(). I first was setting the posts to simply the data of the response, but that included both the data and the message, and so data.data was the appropriate assignment.\
This allowed my code that was originally used on the dummy data I had made in posts.json to work on the fetched data as expected.\
Making the fetch data work in the post details was much simpler, with the only challenge to overcome being to make sure I was calling the correct URL. Changing the url to a variable and appending the ID made this simple, and since the response object was much simpler, assigning this data and then using it in the rendered page was not difficult.\
Finally, the last challenge was ensuring that my api calls were being authenticated by Laravel Sanctum. I wasn't sure if I found the right solution to this, but eventually I just decided to store my authentication token as a variable for the fetch call to attach as a bearer token header, similar to how Postman achieves this. I decided to do this over removing the authentication requirements on the backend.\
