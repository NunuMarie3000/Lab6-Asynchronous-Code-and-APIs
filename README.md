# Lab6-Asynchronous-Code-and-APIs

**Author**: Storm O'Bryant
**Version**: 1.0.6
[View deployed application](https://cityexplorer-lab06.netlify.app/)

## Overview

Lets be honest, humans are natural explorer and we're meant to travel, so why not be an informed traveler. With City Explorer by Stormy, you have everything you'll need while traveling to a new place. A map to provide geographical information, 7 day forecast, food in the area, and even movies related to the area! Travel in style with City Explorer by Stormy

## Getting Started

1.Create a new repo called city-explorer on GitHub, initialized with no files.
2.Use create-react-app to setup a new React application named city-explorer in your local projects directory.
3.Connect your GitHub repo to your local repo using the directions on GitHub.
4.Convert the README.md file to be documentation regarding your lab and its current state of development. Check the "documentation" section of the lab assignment for more details on how that should look AT MINIMUM.
5.Add a .gitignore file with React configurations, including ignoring of .env.
6.Create a package.json file with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: Axios and Bootstrap.
7.Deploy to Netlify.
8.Create a PR of your basic React app to your main branch. Thanks to the "Deploy Preview" feature of Netlify, your branch will be deployed so you can see it live, even before you merge it to main. As you work through the lab, push all your work to the same PR, verifying it's working on Netlify as you go.
9.Procure a LocationIQ free-tier account. From the Dashboard, navigate to your API Access Tokens page. View, then Update the existing token, to change the label to "City Explorer".
10.MOST IMPORTANTLY: Add your deployed Netlify app url as an HTTP Referrer to your API token settings. This step is necessary to prevent any unauthorized use of your token. Also add localhost while testing from your development environment.
11.Create an .env file: Your API key goes here for local development. Make sure this file is in your .gitignore.
12.Add your API key to your Netlify deployment. Under "Site settings" > "Build & deploy" > "Environment", you need to add "Edit variables" to add your API key, giving it the same name you used in your local .env file.
13.Build a form to collect a city name from the user. Give the submit button the text of "Explore!".
14.Use the data from the form to query LocationIQ for the latitude and longitude of the requested city.
15.Update the page with the returned display_name, latitude, and longitude, displayed nicely in an appropriate Bootstrap component.
16.Deploy your updated React app to Netlify by committing and pushing your code to your open pull request on GitHub.
17.After latitude and longitude values are retrieved, use those values to craft the URL for a map image.
18.Display the map image using appropriate Bootstrap components.
19.Add CSS styles to your app, to space out elements, add a custom color scheme, and make the form and image display look good.
20.Deploy your updated React app to Netlify by committing and pushing your code to your open pull request on GitHub.
21.Create an appropriate Bootstrap component that only renders if you hit an error with any API call.
22.When an error occurs, display the status code and an error message to the user.
23.Deploy your updated React app to Netlify by committing and pushing your code to your open pull request on GitHub.
24.Create a new repo called city-explorer-api on GitHub, initialized with a README file. Clone it locally, and do all your work on a meaningfully-named feature branch off of main.
25.Run the command npm init to create a new project. Answer the prompts with reasonable answers, or just hit enter to accept the defaults. Review the package.json file that it creates for you, and edit it if desired.
26.Use npm install to add the required dependencies to this project: express, dotenv, and cors.
27.Manually add the remaining files identified in the folder tree above. Put appropriate content into .gitignore and .eslintrc.json.
28.Copy the contents of weather.json and paste it into your (otherwise empty) local /data/weather.json.
29.Set the contents of .env to set a value for PORT. Ensure .env is in your .gitignore file.
30.Populate your README.md file with the template provided in the lab. Fill in what you can at this point, and the rest before you submit your finalized assignment.
31.Create a basic Express server. Verify it runs without errors.
32.Use a require statement to read the weather data from the weather.json file.
33.Create an API endpoint of /weather that processes a GET request that contains lat, lon and searchQuery information.
34.Use the .find() method to discover which city the lat, lon and searchQuery information belong to. If the user did not search for one of the three cities that we have information about (Seattle, Paris, or Amman), return an error.
35.Create a class for Forecast, that has properties of date and description.
36.Using each data point from the static data of the city that the user searched, create an array of Forecast objects, one for each day. Do the necessary data wrangling to ensure the objects you create contain the information as required for correct client rendering. See the sample response.
37.Send the full array back to the client who requested data from the weather endpoint.
38.Test your endpoint in the browser, to verify the raw response object is coming through as expected.
39.When a city search successfully returns lat and lon info, immediately create a new request (lat/lon included) to your server's /weather endpoint.
40.Create a new Weather.js component to render forecast data to the page.
41.When the server returns the array of forecast data, show the Weather component, populated with the server data.
42.Use appropriate Bootstrap components to nicely display the forecast data.
43.Create a function to handle errors from any API call.
44.Send a status of 500 along with an error message to the client.
45.In the event of your API sending an error code, show a well-formatted error to the users.
46.Procure an API key from the weather API provider, if you haven't already.
47.Add an environment variable named WEATHER_API_KEY to your server, and use it appropriately in your code.
48.Access the query parameters from the web client request object, to identify the exact location for which the web client is requesting weather info.
49.Update the callback for your /weather route so that, instead of returning data from the weather.json file, it makes a Axios request to the weather API with the latitude and longitude from the web client.
50.Use your class to shape the API results.
51.Respond to the web client with an array of objects corresponding to each day in the API data. See the sample response.
52.Ensure your web client still renders the weather data correctly.
53.Add an environment variable to your server named MOVIE_API_KEY, and use it appropriately in your code.
54.Create a route with a method of GET and a path of /movies. The callback should make a Axios request to The Movie Database API using the necessary location information.
55.Search should include movies that contain the name of the city that the user entered.
56.Create a corresponding class for the result.
57.Respond with an array of objects corresponding to each movie in the API data. See the sample response.
58.In the event something doesn't work, send back an appropriate error code.
59.Add a key on your application state object to hold an array of movie objects.
60.When a location search is successful, send a request with axios to your API's /movies endpoint. Include the user-provided search term.
61.Render the response in a new Movies component, using appropriate Bootstrap components.
62.Leverage your existing error handling in the event something doesn't work out.
63.Deploy your API server to Heroku.
64.Configure your web client to define your published API server URL as an environment variable.
65.Set up your environment variables on Heroku: under the settings tab, click the Reveal Config Vars. Add your API variable names and keys.
66.From your development environment (localhost), test that your web client app works with either your local OR your deployed API server. (And be sure to remember to switch it back to local when you are done testing.)
67.Set up an environment variable on your Netlify app, so your deployed web client talks to your deployed API server.
68.Configure both repos to automatically deploy to production when changes are merged into your main branch.
69.Remove the weather functionality from the server.js and place it in its own weather.js file. Bring that component into your server.js file and ensure that your server is functioning as expected before moving on.
70.Remove the movie functionality from the server.js and place it in its own movies.js file. Bring that component into your server.js file and ensure that your server is functioning as expected before moving on.
71.Deploy your changes to production.
72.Within your Weather component, create a nested component, WeatherDay, to render a single day's forecast. Map over the result to convert the raw response data into an array of these components.
73.Within your Movies component, create a nested Movie component for rendering of each individual movie object found in the raw response data.
74.Review the rest of your codebase. Further componentize any other aspects of the UI, as appropriate.
75.Deploy your changes to production.
76.Take a look at the provided starter code. Read through the code at a high level to understand what it attempting to do. Then, integrate it into your project. As you work to get it functioning, you'll find some bugs in the starter code. Fix them up, until your weather module is running smoothly with an in-memory cache.
77.Require in to your modules a global object variable, to act as a place to store values that persist beyond individual request-response cycles. This type of server "memory" is referred to as a "cache".
78.Update your Movies module to require in the cache object.
79.When a new request for movie data arrives, check the cache for a recent API result for the city specified.
80.- If a recent result is already stored in memory ("cache hit"), return that result, without querying the API again.
81.- If no recent result is found ("cache miss"), query the API for a fresh result, add it to server memory with the time of retrieval, and return the fresh result.
82.- Choose an appropriate definition of "recent", the timespan beyond which you deem the data to be stale, and in need of updating ("cache invalidation").
83.Consider: Under what circumstances does your server cache get completely reset?
84.Deploy your changes to production.
85.Add an environment variable to your server named YELP_API_KEY, and use it appropriately in your code.
86.Create an API server route with a method of GET and a path of /yelp. The callback should leverage a yelp.js module, which makes a Axios request to the Yelp API using the necessary location information. Note: review the Axios docs regarding setting authorization headers.
87.Create a corresponding class for the result.
88.For each business of the result, return an object which contains the necessary information for correct client rendering. See the sample response.
89.Leverage your existing error handler functions.
90.Deploy your changes to production.
91.Update your client web application to request data from the new endpoint, and render the results in specialized components.
92.Cache the Yelp responses on the server, so repeated requests for the same data do not trigger additional Yelp API usage.

## Architecture

Application Design: [insert app design here]
Technologies: React, LocalIQ API, React Router, Bootstrap, DotEnv, theMovieDB

## Change Log

08-18-2022 11:46pm - Application has properly working relationship with LocationIQ API
8-19-2022 11:18am - User can now see layout of area they want to explore
8-19-2022 2:56pm - Application working properly, cute colorscheme and styling applied. Deployment to Netlify emminent
8-19-2022 3:52pm -Form requires input to work
8-29-2022 4:04pm - Alerts user of error if one occurs during axios request
8-24-2022 10:41pm - Requests in place for created server, Weather component to render weather info we'll eventually get from our server. ACP changes
8-25-2022 9:25am - Change from multiple results to one
8-26-2022 9:55pm - Server deployed to Heroku, layout change, added movies pertaining to city search
8-27-2022 4:28pm -Changes to layout, color scheme, added 7 day forecast
8-31-2022 7:41pm - added yelp food places, not super cute, but functional
9-10-2022 8:48pm - improved display of yelp component

## Credit and Collaborations

[LocationIQ](https://locationiq.com/docs)
[WeatherbitIO](https://www.weatherbit.io/)
[TheMovieDB](https://www.themoviedb.org/)
[YelpFusion](https://www.yelp.com/developers/documentation/v3/get_started)

### Time Estimates

1.Name of feature:  Locations: As a user of City Explorer, I want to enter the name of a location so that I can see the exact latitude and longitude of that location.

Estimate of time needed to complete: **15min**_

Start time: **3:35**_

Finish time: **11:46**_

Actual time needed to complete: **approx. 2.5 hours**_

2.Name of feature:  Map: As a user, I want to see a map of the city so that I can see the layout of the area I want to explore.

Estimate of time needed to complete: **2 hours**_

Start time: **9:45**_

Finish time: **11:18**_

Actual time needed to complete: **approx. 1.5 hours**_

3.Name of feature:  Errors: As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.

Estimate of time needed to complete: **2 hours**_

Start time: **3:52pm**_

Finish time: **4:04pm**_

Actual time needed to complete: **12 minutes**_

4.Name of feature: Weather(placeholder)

Estimate of time needed to complete: 3 hours

Start time: 10:03am-12:02pm,5:00pm-rough breaks

Finish time: 10:36pm

Actual time needed to complete: approx. 6 hours

5.Name of feature: Weather(live)

Estimate of time needed to complete: 3 hours

Start time: 9:30am

Finish time: 11:49am

Actual time needed to complete: approx. 2.5 hours

6.Name of feature: Movies

Estimate of time needed to complete: 3 hours

Start time: 10:00am

Finish time: 5:30pm

Actual time needed to complete: approx. 4 hours

7.Name of feature: Publish

Estimate of time needed to complete: 3 hours

Start time: 6:45

Finish time: 9:50pm

Actual time needed to complete: approx. 3 hours

8.Name of feature: Refactor: Componentize the front-end codebase.

Estimate of time needed to complete: 1 hour

Start time: 9:30am

Finish time: 10:06am

Actual time needed to complete: approx. 30min

8.Name of feature: STRETCH: As a user of City Explorer, I want to see info about restaurants in the city I searched, so that I find the best places to eat.

Estimate of time needed to complete: 1 hour

Start time:

Finish time:

Actual time needed to complete:
