import { useState } from 'react'
import logo from "./images/weplaylogo.png"
import action from "./images/actioncard.jpg"
import battleroyale from "./images/battleroyalecard.jpg"
import cod from "./images/cod.png"
import diamond from "./images/diamond.png"
import favicon from "./images/favicon.png"
import fortnite from "./images/fortnite.jpg"
import game from "./images/game.png"
import gold from "./images/gold.png"
import ilustrationask from "./images/ilustrationask.png"
import luxury from "./images/luxury.png"
import minecraft from "./images/minecraft.png"
import rainbow from "./images/rainbow.png"
import survival from "./images/survivalcard.png"

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
    <nav id="top">
            <img src={logo} className="logo" alt='logo wePlay'/>
            <div className="buttons">
                <button className="btn1"><span></span><p data-text="contacts" data-title="CONTACTS"></p></button>
             </div>
             <div className="buttons">
                <button className="btn1"><span></span><p data-text="games" data-title="GAMES"></p></button>
             </div>
             <div className="buttons">
                <button className="btn1"><span></span><p data-text="about us" data-title="ABOUT US"></p></button>
             </div>
             <div className="buttons">
                <button className="btn1"><span></span><p data-text="projects" data-title="PROJECTS"></p></button>
             </div>
             <div className="buttons">
                <button className="btn1"><span></span><p data-text="subscribe" data-title="SUBSCRIBE"></p></button>
             </div>
    </nav>
    <main>
        <header className="home">
                <div className="homeContainer">
                    <div className="homeContent">
                        <h1>Welcome to WePLay, where your games come true!</h1>
                        <h2>stay tuned on promotions</h2>
                    </div>
                    <div className="btnHome">
                        <button type="button" className="btn">
                            <strong>GET A GAME</strong>
                            <div id="container-stars">
                              <div id="stars"></div>
                            </div>
                        
                            <div id="glow">
                              <div className="circle"></div>
                              <div className="circle"></div>
                            </div>
                          </button>
                        
                        <button type="button" className="btn">
                            <strong>BE A WEPLAYER</strong>
                            <div id="container-stars">
                              <div id="stars"></div>
                            </div>
                        
                            <div id="glow">
                              <div className="circle"></div>
                              <div className="circle"></div>
                            </div>
                          </button>
                    </div>
                    <div className="custom-shape-divider-bottom-1678738159">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <img src={game} className="fistImage" alt='playing a game'/>
        </header>
        <section className="cardTypeGame">
                <div className="cardsType1" style={{ backgroundImage: `url(${survival})` }}><p>Survivor</p></div>
                <div className="cardsType2" style={{ backgroundImage: `url(${battleroyale})` }}><p>battleroyale</p></div>
                <div className="cardsType3" style={{ backgroundImage: `url(${action})` }}><p>action</p></div>
        </section>
        <article className="aboutUs">
            <div className="aboutUsContainer">
              <div className="animation">
              <img src={ilustrationask} alt='who we are?'/>
              </div>
                <div className="textAbout">
                    <h1>Who we are?</h1>
                    <p>We are a team of developers who have a bunch of games of all tecnologies you can imagine! We have games of action, battleroyal, cooking, dress Up and survive. We have on our plans a lot of sucessfull games too as minecraft, fortnite and CounterStrike.</p>
                </div>
                    </div>
                    <button type="button" className="btn">
                  <strong>BE A WEPLAYER</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>
                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
        </article>
        <aside className="games">
                <h1>Games we provide</h1>
                <div className="cardsGames">
                  <div className="container noselect">
                    <div className="canvas">
                      <div className="tracker tr-1"></div>
                      <div className="tracker tr-2"></div>
                      <div className="tracker tr-3"></div>
                      <div className="tracker tr-4"></div>
                      <div className="tracker tr-5"></div>
                      <div className="tracker tr-6"></div>
                      <div className="tracker tr-7"></div>
                      <div className="tracker tr-8"></div>
                      <div className="tracker tr-9"></div>
                      <div className="tracker tr-10"></div>
                      <div className="tracker tr-11"></div>
                      <div className="tracker tr-12"></div>
                      <div className="tracker tr-13"></div>
                      <div className="tracker tr-14"></div>
                      <div className="tracker tr-15"></div>
                      <div className="tracker tr-16"></div>
                      <div className="tracker tr-17"></div>
                      <div className="tracker tr-18"></div>
                      <div className="tracker tr-19"></div>
                      <div className="tracker tr-20"></div>
                      <div className="tracker tr-21"></div>
                      <div className="tracker tr-22"></div>
                      <div className="tracker tr-23"></div>
                      <div className="tracker tr-24"></div>
                      <div className="tracker tr-25"></div>
                      <div id="card1" style={{ backgroundImage: `url(${fortnite})` }}>
                      <p id="prompt">fortnite</p>
                      </div>
                    </div>
                  </div>
                  <div className="container noselect">
                    <div className="canvas">
                      <div className="tracker tr-1"></div>
                      <div className="tracker tr-2"></div>
                      <div className="tracker tr-3"></div>
                      <div className="tracker tr-4"></div>
                      <div className="tracker tr-5"></div>
                      <div className="tracker tr-6"></div>
                      <div className="tracker tr-7"></div>
                      <div className="tracker tr-8"></div>
                      <div className="tracker tr-9"></div>
                      <div className="tracker tr-10"></div>
                      <div className="tracker tr-11"></div>
                      <div className="tracker tr-12"></div>
                      <div className="tracker tr-13"></div>
                      <div className="tracker tr-14"></div>
                      <div className="tracker tr-15"></div>
                      <div className="tracker tr-16"></div>
                      <div className="tracker tr-17"></div>
                      <div className="tracker tr-18"></div>
                      <div className="tracker tr-19"></div>
                      <div className="tracker tr-20"></div>
                      <div className="tracker tr-21"></div>
                      <div className="tracker tr-22"></div>
                      <div className="tracker tr-23"></div>
                      <div className="tracker tr-24"></div>
                      <div className="tracker tr-25"></div>
                      <div id="card2" style={{ backgroundImage: `url(${minecraft})` }}>
                      <p id="prompt">minecraft</p>
                      </div>
                    </div>
                  </div>
                  <div className="container noselect">
                    <div className="canvas">
                      <div className="tracker tr-1"></div>
                      <div className="tracker tr-2"></div>
                      <div className="tracker tr-3"></div>
                      <div className="tracker tr-4"></div>
                      <div className="tracker tr-5"></div>
                      <div className="tracker tr-6"></div>
                      <div className="tracker tr-7"></div>
                      <div className="tracker tr-8"></div>
                      <div className="tracker tr-9"></div>
                      <div className="tracker tr-10"></div>
                      <div className="tracker tr-11"></div>
                      <div className="tracker tr-12"></div>
                      <div className="tracker tr-13"></div>
                      <div className="tracker tr-14"></div>
                      <div className="tracker tr-15"></div>
                      <div className="tracker tr-16"></div>
                      <div className="tracker tr-17"></div>
                      <div className="tracker tr-18"></div>
                      <div className="tracker tr-19"></div>
                      <div className="tracker tr-20"></div>
                      <div className="tracker tr-21"></div>
                      <div className="tracker tr-22"></div>
                      <div className="tracker tr-23"></div>
                      <div className="tracker tr-24"></div>
                      <div className="tracker tr-25"></div>
                      <div id="card3" style={{ backgroundImage: `url(${rainbow})` }}>
                      <p id="prompt">rainbow six</p>
                      </div>
                    </div>
                  </div>
                  <div className="container noselect">
                    <div className="canvas">
                      <div className="tracker tr-1"></div>
                      <div className="tracker tr-2"></div>
                      <div className="tracker tr-3"></div>
                      <div className="tracker tr-4"></div>
                      <div className="tracker tr-5"></div>
                      <div className="tracker tr-6"></div>
                      <div className="tracker tr-7"></div>
                      <div className="tracker tr-8"></div>
                      <div className="tracker tr-9"></div>
                      <div className="tracker tr-10"></div>
                      <div className="tracker tr-11"></div>
                      <div className="tracker tr-12"></div>
                      <div className="tracker tr-13"></div>
                      <div className="tracker tr-14"></div>
                      <div className="tracker tr-15"></div>
                      <div className="tracker tr-16"></div>
                      <div className="tracker tr-17"></div>
                      <div className="tracker tr-18"></div>
                      <div className="tracker tr-19"></div>
                      <div className="tracker tr-20"></div>
                      <div className="tracker tr-21"></div>
                      <div className="tracker tr-22"></div>
                      <div className="tracker tr-23"></div>
                      <div className="tracker tr-24"></div>
                      <div className="tracker tr-25"></div>
                      <div id="card4" style={{ backgroundImage: `url(${cod})` }}>
                      <p id="prompt">call of duty</p>
                      </div>
                    </div>
                  </div>
                </div>
        </aside>
        <article className="plan">
            <h1>Sign Up as</h1>
            <div className="plansUser">
                <div className="plans1" style={{ backgroundImage: `url(${gold})` }}>
                    <div className="textBox">
                      <p className="text head">gamer gold</p>
                      <span> acess to golden games</span>
                      <p className="text price">750.99$</p>
                    </div>
                  </div>
                  <div className="plans2" style={{ backgroundImage: `url(${luxury})` }}>
                    <div className="textBox">
                      <p className="text head">gamer platinium</p>
                      <span>golden + platinium games</span>
                      <p className="text price">989.99$</p>
                    </div>
                  </div>
                  <div className="plans3" style={{ backgroundImage: `url(${diamond})` }}>
                    <div className="textBox">
                      <p className="text head">gamer diamond</p>
                      <span>acess to all games</span>
                      <p className="text price">1,159.99$</p>
                    </div>
                  </div>
            </div>
        </article>
    </main>
    <footer>
        <img src={logo} alt='logo wePlay'/>   
        <p>Created by WePlay</p>
          <button className='footer'>
              <p>↑</p>
            </button>
    </footer>
    </div>
  )
}

export default App
