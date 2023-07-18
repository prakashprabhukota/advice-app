import axios from 'axios';
import ShuffleIcon from './Shuffle-icon.svg'
import './App.css'
import React, { Component } from 'react'

export class App extends Component {
    API_URL = 'https://api.adviceslip.com/advice';
    state = { advice: '' };

    fetchAdvice = () => {
        axios.get(this.API_URL)
            .then((response) => {
                //console.log(response.data.slip.advice)
                const { advice } = response.data.slip;
                console.log(advice)
                this.setState({ advice: advice });
            })
            .catch((error) => console.log(error))

    }
    componentDidMount() {
        console.log("COMPONENT DID MOUNT");
        this.fetchAdvice();
    }

    render() {
        const { advice } = this.state;
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>
                        {advice}
                    </h1>
                    <button className='shuffle' 
                    onClick={this.fetchAdvice}>
                        <img src={ShuffleIcon}></img>
                    </button>
                </div>
            </div>
        )
    }
}

export default App