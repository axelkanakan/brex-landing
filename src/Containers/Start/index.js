import React, {Component} from 'react';
import './Start.css';
import StartCard from '../../Components/StartCard';
import { cardData } from '../../Data/data';

class Start extends Component{

    state = {cardData};

    render(){
        const {cardData} = this.state;
        return (
            <div className="Start">
                <h1>Easy To Start</h1>
                <div className="cards-container">
                {
                    cardData.map(card => {
                        const {cardInfo} = card;
                        
                        return (
                            <StartCard key={cardInfo.id} title={cardInfo.title} content={cardInfo.content} image={cardInfo.image}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Start;