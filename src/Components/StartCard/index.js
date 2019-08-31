import React from 'react';
import CardButton from '../CardButton';
import './StartCard.css';

const cardHover = {
    boxShadow: '0px 6px 26px 0px rgba(142,140,219,0.25)'
}

const cardNoHover = {
    boxShadow:'none'
}

const StartCard = ({title, content, image, onEnterHandler, onExitHandler, onHover}) =>

{   
    // const startClass = ["StartCard", onHover ? "startHover" : null]

    
    return ( <div className={'StartCard'} 
                  onMouseEnter={onEnterHandler}
                  onMouseLeave={onExitHandler}

                  style={onHover? cardHover : cardNoHover}
                  >
        <div className="card-container">
            <div className="start-image">
                <img src={image} alt="sign-up"/>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{content}</p>
                <CardButton title={'Learn More'} onHover={onHover}/>
            </div>
        </div>
    </div>)}
export default StartCard;