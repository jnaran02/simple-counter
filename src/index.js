import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contador } from './Contador';


let counter = 0;


setInterval(() => {

    const one = Math.floor(counter/100000);
    const two = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const four = Math.floor(counter/100);
    const five = Math.floor(counter/10);
    const six = Math.floor(counter/1);
    
    counter++;
        ReactDOM.render(
            <Contador Num1={one} Num2={two} Num3={three} Num4={four} Num5={five} Num6={six} />, 
                document.querySelector("#root")
        );

},1000); 