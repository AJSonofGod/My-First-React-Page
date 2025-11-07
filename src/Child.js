import React from 'react';
import AJ from './img/AJ.JPG';


function Child () {

let age = 21;
const name = "Ajayi Joshua A.";
const department = "Information Technology";
const matricNo = "24/2987";
let courses = ["BU-COS 209", "COSC 201", "BU-IFT 203", "BU-IFT 205", "BU-IFT 211"];

return ( 
        <div>
            <p>My name is <b>{name}</b></p>
            
            <p>From the department of <b>{department}</b> </p>
            
            <p>My Matric no. is <b>{matricNo}</b></p>
            
            {age >= 18 ? <p>I am an <b>adult</b></p>: <p>I am a <b>child</b></p>} 
            
            My coding courses are as follows: {
            courses.map (c => (
                <ul>
                    <li key={c}>{c}</li>
                </ul>
            )
        )
    }
            <div>
                <img src = {AJ} alt = "AJ" height = "400" width = "300" />
            </div>
        </div>
    );
}

export default Child;
