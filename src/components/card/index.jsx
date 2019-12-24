import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import style from './style.module.scss'

import cardback from '../../res/cardback.jpg'
import tap from '../../res/tap.svg'

const Card = ({card, fetching, error, onRequestCard}) => {

    //load the card data after component is mounted
    useEffect(() => {onRequestCard()}, [])

    return(
        <div>
          { card &&
            <div className={style.cardContainer}>

                <div className={style.image}>

                    <img 
                      className={style.card} 
                      src={card.image_uris && !fetching ? card.image_uris.normal : cardback} 
                      alt={`MTG Card by ${card.artist}`}/>

                      <button className={style.refresh} onClick={onRequestCard}>
                        <img src={tap} alt="Tap to refresh"/>
                      </button>

                </div>
                
                <div className={style.info}>

                  <div className={style.name}>{card.name}</div>
                  <div className={style.flavor}>{card.flavor_text}</div>

                  <div className={style.details}>
                    <p className={style.common}> <span>Artist:</span> {card.artist} </p>
                    <p className={style.common}> <span>Set:</span> {card.set_name}</p>
                  </div>

                  <div className={style.stores}>

                    <p className={style.common}>Buy it:</p>

                    <a href={`https://www.ligamagic.com.br/?view=cards%2Fsearch&card=${card.name}`} target="_blank" rel="noopener noreferrer">Brazil</a>

                    <a href={`https://www.hareruyamtg.com/en/products/search?product=${card.name}`} target="_blank" rel="noopener noreferrer">Japan</a>

                    <a href={`https://starcitygames.com/search.php?search_query=${card.name}`} target="_blank" rel="noopener noreferrer">USA</a>

                    <a href={`https://www.cardmarket.com/en/Magic/Products/Search?searchString=${card.name}&mode=gallery`} target="_blank" rel="noopener noreferrer">UK</a>

                  </div>

                </div>

            </div>
          }
          { error && <p>Error</p> }
        </div>
    )
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    card: state.card,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestCard: () => dispatch({ type: "API_CALL_REQUEST" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
