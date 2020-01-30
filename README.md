
## Notes
 FUN PROJECT - TEMPESTATIBUS (Stands for weather in latin :) )
### Date

* Thursday, January 30th, 2020

### Location of deployed application

* Heroku
* Link: https://tempestatibus.herokuapp.com/

### Time spent

* 3 Hours

### Assumptions made

- None 

### Shortcuts/Compromises made

- Just added coverage for Canada, because to create a consistent UI with consistency to fetch the right city and country would be preferable with an autocomplete approach such as google weather. The OpenWeatherMap team provides a 25mb JSON with all the countries and its respective `id's`, but I just thought it would stretch to far to create a service to provide this autocomplete feature. 

### Stretch goals attempted

- Design Fully Responsive ( All devices )
- Add Features to Explore Other Cities
- Deploy (Heroku)
- Collapsable Sidebar for better experience
- Top Cities List 
- Delay Feature (for a better user Experience when fetching)
- Basic Data Manipulation / Normalization 
- Git Commit History with support for auto-changelog powered by Commitzen
- Utilized the `Icons` provided by the API.
- API_KEY provided through Enviroment Variables

### Instructions to run assignment locally

Make sure you have node.js and git installed on your machine.

Clone this into your local machine using the terminal (mac) or Gitbash (PC) > git clone [https://github.com/codedavinci/tempestatibus]

CD to the folder

Run > yarn 

Sign up to (OpenWeatherMap)[https://home.openweathermap.org/users/sign_up] to get an `API_KEY`

Add `.env` file to the root of project

add to `.env` your `REACT_APP_WEATHER_API_KEY={YOUR_API_KEY}`

yarn start

### What did you not include in your solution that you want us to know about?

- I'd love to have fully tested all my components and functions, but as I was using a component library, 
I made a decision to just safeGuard the application with `PropTypes`.
- I would have wanted to add coverage for Farenheight as well :).

### Other information about your submission that you feel it's important that we know if applicable.

- No.

### Your feedback on this technical challenge

- This assignment was fun but personally I found this API is pourly designed and not very well documented.

