paypal-nodeJS
===========

USAGE
==========
This is a node/express.js/jQuery application which consumes the Weather Underground API.
To run the application use commands:
   0) replace your own api key in a file app.js.
   1) change to paypalNoderestExcerise directory and execute npm install.
   2) npm start
   3) navigate to url http://localhost:3000/

== There are three input fields city and state, type of information you want to fetch.
      like current condition and forecast.

Assumptions
=============
- Single page application, no page refresh on form submit.
- We need to see basic information like Humidity, Temperature and Visibility.
- Log request parameters.
- Debugging is enabled and disabled.
- use Jade/ markdown html template similar to Haml.

Improvements
===============
Have multiple fragments of html and compile it and add the response data into the compiled template.
rather than having to mange html elements via javascript.


Add other API'S for example:- 10days forecast, history.
============================================================
