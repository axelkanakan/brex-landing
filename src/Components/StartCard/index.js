import React from 'react';
import Outbutton from '../Outbutton';
import './StartCard.css';


const StartCard = ({title, content, image, onEnterHandler, onExitHandler, onHover}) =>

{   
    const startClass = ["StartCard", onHover ? "startHover" : null]

    
    return ( <div className={startClass.join(" ")} 
                  onMouseEnter={onEnterHandler}
                  onMouseLeave={onExitHandler}
                  >
        <div className="card-container">
            <div className="start-image">
                <img src={image} alt="sign-up"/>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{content}</p>
                <Outbutton />
            </div>
        </div>
    </div>)}
export default StartCard;