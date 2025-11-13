import React from 'react';
//import Banner from './Components/Banner';
//import About from './Components/About';
//import Products from './Components/Products';
//import Contact from './Components/Contact';
//import ChildComponent from './ChildComponent';
//import StudentWelcome from './StudentWelcome';
//import OrderGreeting from './OrderGreeting';
//import UserCard from './UserCard';
//import BookList from './BookList';
//import TeamList from './TeamList';
//import CourseList from './CourseList';
//import ReviewList from './ReviewList';
import { Power } from './Power.mjs';
import { Modulo } from './Modulo.mjs';
import { Average } from './Average.mjs';
import { MaxValue } from './MaxValue.mjs';

const App = () => {
            //Displays on the Console
            console.log("2 to the power of 5:", Power(2, 5));   // Output: 32
            console.log("10 modulo 3:", Modulo(10, 3)); // Output: 1
            console.log("Average of [4, 8, 15, 16]:", Average([4,8,15,16]));    // Output: 10.75
            console.log("Max of [4, 8, 15, 16]:", MaxValue([4,8,15,16]));   // Output: 16
            
            //Displays on the Browser
            const powerResult = Power(2, 5);
            const moduloResult = Modulo(10, 3);
            const averageResult = Average([4, 8, 15, 16]);
            const maxResult = MaxValue([4, 8, 15, 16]);
    return (
        <div>
            <p>2 to the power of 5 = {powerResult}</p>
            <p>10 modulo 3 = {moduloResult}</p>
            <p>Average of [4, 8, 15, 16]= {averageResult}</p>
            <p>Max of [4, 8, 15, 16] = {maxResult}</p>
        </div>

        /*
        <div>
            <StudentWelcome name = "AJ" course = "IT" /> <br />
            
            <OrderGreeting customerName = "AJ"/> <br />
            
            <UserCard name = "AJ" email = "joshajayi01@gmail.com" age = "21" />
            <UserCard name = "Asa" email = "asanwa144@gmail.com" age = "19" />
            <UserCard name = "Job" email = "jobwinbymeekness@gmail.com" age = "900" /> <br />
            
            <BookList /> <br />

            <TeamList /> <br />

            <CourseList /> <br />

            <ReviewList />
        </div>
        */
    );
}

export default App;