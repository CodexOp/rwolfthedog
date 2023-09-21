import React, { useEffect } from "react";
// import chart from "../assests/images/icon-chart.svg";
import bnbIcon from "../assests/images/icon-bnb.svg";
import pinksaleIcon from "../assests/images/icon-pinksale.svg";
import coinmarketcapIcon from "../assests/images/icon-coinmarketcap.svg";
import coingeckoIcon from "../assests/images/icon-coingecko.svg";
import pancakeswapIcon from "../assests/images/icon-pancakeswap.svg";
import coinsultIcon from "../assests/images/icon-coinsult.svg";
import matrixlabsIcon from "../assests/images/icon-matrixlabs.svg";
import aiImg1 from "../assests/images/icon-ai-img1.png";
import aiImg2 from "../assests/images/about_us.png";
import aiImg4 from "../assests/images/icon-ai-img4.svg";
// import sparkleIcon1 from "../assests/images/icon-sparkle1.svg";
import sparkleIcon2 from "../assests/images/icon-sparkle2.svg";
import sparkleIcon3 from "../assests/images/icon-sparkle3.svg";
import sparkleIcon4 from "../assests/images/icon-sparkle4.svg";
import sparkleIcon5 from "../assests/images/icon-sparkle5.svg";
import AOS from "aos";
import "aos/dist/aos.css";

import "./style.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CircularProgressBar from "../CircularProgressBar";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleDragStart = (e) => e.preventDefault();
  // const options = {
  //   threshold: 0,
  //   rootMargin: "0px 0px -200px 0px",
  // };
  // useEffect(() => {
  //   const faders = document.querySelectorAll(".faders");
  //   const observers = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("fade-in");
  //       }
  //     });
  //   }, options);
  //   faders.forEach((fader) => {
  //     observers.observe(fader);
  //   });
  //   return () => {
  //     faders.forEach((fader) => {
  //       observers.unobserve(fader);
  //     });
  //   };
  // });

  const items = [
    <img
      src={bnbIcon}
      className="bnbIcon"
      alt="binance-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={pinksaleIcon}
      alt="pinksale-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={coinmarketcapIcon}
      className="coinmarketcapIcon"
      alt="coinmarketcap-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={coingeckoIcon}
      alt="coingecko-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={matrixlabsIcon}
      className="matrixlabsIcon"
      alt="matrixlabs-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={pancakeswapIcon}
      className="pancakeswapIcon"
      alt="pancakeswap-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={coinsultIcon}
      className="coinsultIcon"
      alt="coinsult-icon"
      onDragStart={handleDragStart}
    />,
  ];

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1200: { items: 3 },
    1500: { items: 5 },
  };

  return (
    <>
      <div className="backdropDiv1">
        <div className="eclipseDiv"></div>
        <div id="home" className="mainWrapper1 faders" data-aos="fade-up">
          <div className="titleContent">
            <div>
              <div className="titleName">$Rowlf</div>
              <div className="mainHeadingTxt">
              Rowlf The&nbsp;
                <br />
                <div className="gradientTxt">BASED</div>Dog
              </div>
            </div>
            <div className="titleInfo">

            Welcome to the official page of the Rowlf the Dog Token ($Rowlf)! <br></br>Inspired by everyone's favorite piano-playing Muppet, <br></br> RDT is not only an homage to this iconic character but is also a fun and <br></br> innovative way to participate in the crypto community             
            </div>
            <a href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0x0e902e72618d5b7fdd2ff57d3a27c25ff2d92969"><div className="btn1">Buy&nbsp;Token</div></a>
          </div>
          <img src={aiImg1} alt="ai-img" className="float-img" />
          <img className="aiImg4" src={aiImg4} alt="ai-img" />
        </div>
      </div>

      <div className="backdropDiv2">
        <div className="mainWrapper2 faders">
          <div className="binanceDiv">
           
          </div>
          <div id="about" className="aboutWrapper faders" data-aos="fade-up">
            <img src={aiImg2} alt="ai-img" />
            <div className="aboutDiv">
              <div>
                <div className="aboutTitle">About us</div>
                <div className="aboutMainTxtheading">
                Join the journey with Rowlf the Dog Token
                </div>
              </div>
              <div className="aboutMainTxt1">
              Welcome to the official page of the Rowlf the Dog Token (RDT)! Inspired by everyone's favorite piano-playing Muppet, RDT is not only an homage to this iconic character but is also a fun and innovative way to participate in the crypto community. Just like Rowlf bridges the gap between canine and human, RDT aims to bridge the crypto world with that of entertainment and nostalgia.
              </div>
             
              <img className="sparkleIcon4" src={sparkleIcon4} alt="sparkle" />
            </div>
          </div>
          <div className="goalWrapper faders" data-aos="fade-up">
            {/* <div className='eclipseDiv'></div> */}
            <div>
              <img className="sparkleIcon5" src={sparkleIcon5} alt="sparkle" />
              <img className="sparkleIcon3" src={sparkleIcon3} alt="sparkle" />
              <div className="aboutTitle">Mooning SOOON</div>
              <div className="aboutMainTxtheading">
              Rowlf the Dog Token - This is your token!
              </div>
            </div>
            <div className="aboutMainTxt1">
            Forget the moon; we're heading to the Muppet Show! RDT, or Rowlf the Dog Meme Token, combines the whimsy of everyone's favorite canine Muppet with the wild roller-coaster of the meme token world. Who said finance can't be fun?

            </div>
            <div className="aboutMainTxt2 aaaaaa">
              CA - <br></br>0x0E902E72618D5b7FDD2FF57D3A27C25FF2D92969
            </div>
            <img className="sparkleIcon2" src={sparkleIcon2} alt="sparkle" />
          </div>
          <div
            id="tokenomics"
            className="tokenomicsWrapper faders"
            data-aos="fade-up"
          >
  
           
            </div>
            </div>
            </div>

    </>
  );
}
