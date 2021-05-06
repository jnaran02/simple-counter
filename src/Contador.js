import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import './counter.css';
import PropTypes from 'prop-types';


export const Contador = (props) => {
    return(
       
       <div className="container">
        <div className="row">
                <div className="col display-4 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon = {faClock} />

                </div>
                <div className="col display-4 one d-flex align-items-center justify-content-center font-weight-bold">
                    {props.Num1 % 10}
                </div>
                <div className="col display-4 two d-flex align-items-center justify-content-center font-weight-bold">
                    {props.Num2 % 10}
                </div>
                <div className="col display-4 three d-flex align-items-center justify-content-center font-weight-bold">
                    {props.Num3 % 10}
                </div>
                <div className="col display-4 four d-flex align-items-center justify-content-center font-weight-bold">
                    {props.Num4 % 10}
                </div>
                <div className="col display-4 five d-flex align-items-center justify-content-center font-weight-bold">
                    {props.Num5 % 10}
                </div>
                <div className="col display-4 six d-flex align-items-center justify-content-center font-weight-bold">
                    {props.Num6 % 10} 
                </div>
            </div>
           </div>   
    )
};

Contador.propTypes = {
    Num6: PropTypes.number,
    Num5: PropTypes.number,
    Num4: PropTypes.number,
    Num3: PropTypes.number,
    Num2: PropTypes.number,
    Num1: PropTypes.number
};