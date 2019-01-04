import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import mtg from 'mtgsdk';
import './_sass/index.scss';
import * as serviceWorker from './serviceWorker';
import svgTwitter from './res/twitter.svg';
import svgSearch from './res/search.svg';

class Mtg extends Component{

    state = { card: [] };

    componentWillMount(){
        mtg.card.where({
            pageSize: 1,
            flavor: true,
            random: true
        }).then(
            api_card => this.setState({card : api_card[0]})
        );
    }
    
    render(){
        let { card } = this.state;

        return(
            <section id="home">
    
                <div className="search">
                    <form method="get" action="https://www.google.com/search">
                        <img src={svgSearch} alt="Search" />
                        <input type="text" name="q" placeholder="Google search" />
                    </form>
                </div>
                
                <p className="name">{card.name}</p>
                <p className="flavor">{card.flavor}</p>
                
                <div className="preview">
                    <p>{card.setName}</p>
                    <p>{card.artist}</p>
                    <img className="card" src={card.imageUrl} alt={`${card.name}, a Magic the Gathering's card`} />
                </div>
                
                <a 
                className="share" 
                href={`https://twitter.com/intent/tweet?text=${card.flavor}%20👉%20flavortexts.com`}
                target="_blank" rel="noopener noreferrer">
                    <img src={svgTwitter} alt="twitter icon"/>
                    Share
                </a>
                
            </section>
        )
    }
}

ReactDOM.render(<Mtg />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
