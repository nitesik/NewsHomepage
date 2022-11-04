import { useState, useEffect } from "react";
import "./styles.css";
import logo from "./images/logo.svg";
import retro from "./images/image-retro-pcs.jpg"
import laptops from "./images/image-top-laptops.jpg"
import gaming from "./images/image-gaming-growth.jpg"
import menu from "./images/icon-menu.svg";
import menu_close from "./images/icon-menu-close.svg";

function Home() {

  const [width, setWidth] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const updateDimensions = () => {
    const innerWidth = window.innerWidth;
    setWidth(innerWidth);
  }
  
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  });

  return (
    <main className="container"> 
      {openMenu ? 
      <div className="menu">
        <div className="inner-menu">
          <nav className="navbar">
            <div></div>
            <img src={menu_close} alt="close" onClick={() => setOpenMenu(false)} />
          </nav>
          <div className="components">
            <a>Home</a>
            <a>New</a>
            <a>Popular</a>
            <a>Trending</a>
            <a>Categories</a>
          </div>
        </div>
      </div> : null}
      <nav className="navbar">
        <img src={logo} alt="Logo"/>
        {width > 738 ? <div className="nav-components">
          <a>Home</a>
          <a>New</a>
          <a>Popular</a>
          <a>Trending</a>
          <a>Categories</a>
        </div> : <img src={menu} alt="open" onClick={() => setOpenMenu(true)} /> }

      </nav>
      
      

      <div className="body">
        <div className="upper">
          <div className="upper-left">
            <div className="upper-left-top"></div>
            <div className="upper-left-down">
              <div className="upper-left-down-left">
                The Bright Future of Web 3.0?
              </div>
              <div className="upper-left-down-right">
                <div>
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </div>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div className="upper-right">
            <h1 className="upper-right-title">New</h1>
            <div className="upper-right-components">
              <div className="question">Hydrogen VS Electric Cars</div>
              <div className="answer">Will hydrogen-fueled cars ever catch up to EVs?</div>
            </div>
            <hr />
            <div className="upper-right-components">
              <div className="question">The Downsides of AI Artistry</div>
              <div className="answer">What are the possible adverse effects of on-demand AI image generation?</div>
            </div>
            <hr />
            <div className="upper-right-components">
              <div className="question">Is VC Funding Drying Up?</div>
              <div className="answer">Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="lower-container">
            <img src={retro} alt="retro" />
            <div className="inner-container">
              <h1>01</h1>
              <div className="question">Reviving Retro PCs</div>
              <div className="answer">What happens when old PCs are given modern upgrades?</div>
            </div>
          </div>
          <div className="lower-container">
            <img src={laptops} alt="laptops" />
            <div className="inner-container">
              <h1>02</h1>
              <div className="question">Top 10 Laptops of 2022</div>
              <div className="answer">Our best picks for various needs and budgets.</div>
            </div>
          </div>
          <div className="lower-container">
            <img src={gaming} alt="gaming" />
            <div className="inner-container">
              <h1>03</h1>
              <div className="question">The Growth of Gaming</div>
              <div className="answer">How the pandemic has sparked fresh opportunities.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 

export default Home;