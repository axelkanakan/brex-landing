import React, {Component} from 'react';
import './Start.css';
import StartCard from '../../Components/StartCard';
import { cardData } from '../../Data/data';

class Start extends Component{

    state = {cardData};

    render(){
        console.log(this.state.cardData.map(card => card.card));
        const {cardData} = this.state;
        return (
            <div className="Start">
                <h1>Easy To Start</h1>
                {
                    cardData.map(card => {
                        const {cardInfo} = card;
                        
                        return (
                            <StartCard title={cardInfo.title} content={cardInfo.content} image={cardInfo.image}/>
                        )
                    })
                }
                {/* <StartCard title={title} content={content} image={image}/> */}
            </div>
        )
    }
}

export default Start;