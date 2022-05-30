# Hopper

## About

A react based application designed to simplify the decision making process when out with friends during a pub crawl. 

Any user can use the application, select where they would like to begin their trip, and have pubs be randomly given to them that are within a 1km radius of where they choose to begin their trip. Google Autocomplete, Geolocation, and Places APIs are used to provide this information to the user.

Hopper was created as a Lighthouse Labs finals project whose contributors are:

- Matt Lawson [github](https://github.com/MattLawson98)
- Lucus Riccioni [github](https://github.com/LucusR)
- Dave McKinnon [github](https://github.com/mckinnondave)

## Stack

- React
- Express
- PostgreSQL
- Axios
- Sass
- Material UI

!["Homepage"](https://github.com/mckinnondave/Hopper/blob/master/images/screencapture-localhost-3000-2022-05-30-11_16_49.png?raw=true)
![](Hopper.gif)

## Setup 

1. Clone the repo
2. Open /client
3. Install all dependencies using `npm i`
4. Run on local machine using `npm start`
5. Localhost should open automatically, or can be opened manually through http://localhost:3000

## ENV

Copy paste the following into your .env file:

- DB_HOST=localhost
- DB_USER=development
- DB_PASS=development
- DB_NAME=hopper

## Acknowledgement

App was started using a boilerplate created by:

- Garrett B [github](https://github.com/garrettgsb)