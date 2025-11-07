import React from 'react';
//import Banner from './Components/Banner';
//import About from './Components/About';
//import Products from './Components/Products';
//import Contact from './Components/Contact';
//import ChildComponent from './ChildComponent';
import StudentWelcome from './StudentWelcome';
import OrderGreeting from './OrderGreeting';
import UserCard from './UserCard';
import BookList from './BookList';
import TeamList from './TeamList';
import CourseList from './CourseList';
import ReviewList from './ReviewList';

const App = () => {
    return (
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
    );
}

export default App;