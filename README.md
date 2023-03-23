# Psychotherapie website
- This is a fullstack project. It is a Psychotherapist website.
- Client can book an appointment on this website. Clients can log-in with their name, email and password if it is a first time for clinet to visit, they have to register first and then book an appointment.  

- After confirming the date, client has an email as confirmation. 

- Client will have a reminder the day before of visit date by SMS and email. 


## The problem
- The calendar was the most difficult part of this project. Booking a date confirmation and the reminder was not easy either. 

- To solve that problem I embed react-Calendly into my app. I set up all reminders and confirmations by email and SMS on the Calendly setting.  
Aafer that I used the URL which I created in the Calendly event and render it on the booking page. 



## View it live

Netlify:
https://nicolas-verdeille-gestalt-therapy.netlify.app/


## Installation
For the backend I used 
-Node.js,
-Mongoose, 
-Express. 

For Frontend: 
- React
- React-router-dom,
- React-Redux, 
-Calendly-react


## How to run the project
- For backend
1. cd backend
2. npm run dev

- For Frontend
1. cd Frontend
2. npm start

