import React, {Component} from 'react';
import './Start.css';
import StartCard from '../../Components/StartCard';
import cardImg from '../../Assets/card-img.png';

class Start extends Component{

    state = {
        card : {
            title:'Easy online signup',
            content:"80% of founders don't realize they are liable for their corporate card- we offer the only corporate card for startups.",
            image: cardImg
        }
    }
    render(){
        const {title, content, image} = this.state.card;
        return (
            <div className="Start">
                <h1>Easy To Start</h1>
                <StartCard title={title} content={content} image={image}/>
            </div>
        )
    }
}

export default Start;