import React from "react";

const About = () => {
    return (
        <div className="container">
            &nbsp;
            <div className = "center">
            <h3>About This Application...</h3>
            &nbsp;
            &nbsp;
            <p>This Module List Application was created by <a href = "https://github.com/seanlowcy77">Sean Low</a></p>
            <p>With regards to the modules and the information regarding them, they were retrieved from NUSMods: 
            <a href = "https://api.nusmods.com/v2/"> Link here</a></p>
            <p> The application was coded using React as well as Node and Express for the backend. Hope you have enjoyed it ! </p>
            <p> <a href = "https://github.com/seanlowcy77/My-Module-List/tree/master/client"> Click here </a> to find out more about how it was made!</p>
            </div>
        </div>
    );
};

export default About;
