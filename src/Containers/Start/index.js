import React, {Component} from 'react';
import './Start.css';
import StartCard from '../../Components/StartCard';
import { cardData } from '../../Data/data';

class Start extends Component{
    
    state = {
        cards:cardData
    }

    onEnterHandler = (id) => {
        const {cards} = this.state
        const newCard = cards;
        newCard[id].onHover = true;
        this.setState({cards: newCard})
    }

    onExitHandler = (id) => {
        const {cards} = this.state
        const newCard = cards;
        newCard[id].onHover = false;
        this.setState({cards: newCard})
    }


    render(){
        const {cards} = this.state;
        const cardsArray = [cards["cardOne"], cards["cardTwo"], cards["cardThree"]]
        console.log(cardsArray);
        
        return (
            <div className="Start">
                <div className='StartHeader'>
                <h1>Easy To Start</h1>
                <p>Brex understands the startups are different from traditional small businesses.
                Our application takes only minutes, so you can get back to building your business.</p>
                </div>
                <div className="cards-container">

                {
                    cardsArray.map(card =>
                    <StartCard 
                        onExitHandler={()=> this.onExitHandler(card.id)}
                        onEnterHandler={() => this.onEnterHandler(card.id)}
                        onHover={card.onHover}   
                        key={card.id} 
                        title={card.title} 
                        content={card.content} 
                        image={card.image}/>
                        
                    )
                }
                </div>
            </div>
        )
    }
}

export default Start;

// <StartCard  onHover={cardInfo.onHover} onEnterHandler={this.onEnterHandler(cardInfo.id)}  key={cardInfo.id} title={cardInfo.title} content={cardInfo.content} image={cardInfo.image}/>
