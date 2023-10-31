import employeeAppPic from '../../assets/projectPics/employeeApp.png';
import groceryListPic from '../../assets/projectPics/groceryList.png';
import javascriptQuizPic from '../../assets/projectPics/javascriptQuiz.png';
import passwordGeneratorPic from '../../assets/projectPics/passwordGenerator.png';
import plantProtectorPic from '../../assets/projectPics/plantProtector.png';
import socialMediaApiPic from '../../assets/projectPics/socialMediaApi.png';

export const projects = [
    {
        image: javascriptQuizPic,
        title: "Javascript Quiz",
        description: "A quiz that was made to help study Javascript, using Javascript",
        link: "https://bertisjoey.github.io/Javascript-Quiz/"
    },
    {
        image: passwordGeneratorPic,
        title: "Password Generator",
        description: "This was created to help generate random passwords, using Javascript",
        link: "https://bertisjoey.github.io/Password-Creator/"
    },
    {
        image: plantProtectorPic,
        title: "Plant Protector",
        description: "This project was worked on as a group using javascript and a third party web api that generates plants and plant info to help you care for any household or outdoor plants you might have. My role in this project was working with javascript on the event handlers for the clicks and generating the cards",
        link: "https://bertisjoey.github.io/Plant-Protector/"
    },
    {
        image: socialMediaApiPic,
        title: "Social Media API",
        description: "This project was created to act as an API for a social media site. It is able to create users, thoughts (or status), and generate responses to those thoughts from any user. This project demonstrates my abilities with MongoDB and the necessary API routes for MongoDB to function. This link will bring you to the Github page for this app, with instructions on how to start it in the ReadMe",
        link: "https://github.com/BertisJoey/Social-Media-API"
    },
    {
        image: employeeAppPic,
        title: "Employee App",
        description: "This was created as a method of adding and editing employees within an employee database. This project demonstrates my ability to work with SQL, MySQL, and the Inquirer package as well as Node.js. The link again will bring you to the Github page which includes instructions on how to install the app and a video of the app running.",
        link: "https://github.com/BertisJoey/Employee-App"
    },
    {
        image: groceryListPic,
        title: "Grocery List",
        description: "This website was created as a way to create a grocery list and add items to it. We have ideas for future development to have it so that you can share your list with family members or roommates so everyone in the house can know what is needed while you're at the store. My duties in this project were on the backend primarily, I set up most of the routes that were used to grab information from the database we created, and I assisted with setting up the buttons that made those API calls as well.",
        link: "https://github.com/l-lavelle/Grocery-List"
    }
]