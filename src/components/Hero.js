import video from './videos/eth-bot.mp4';
import photo from './images/eth-bot.png';

function Hero({setPoster, poster}) {
    

  return (
    <div className='hero-container'>
      <div className={`${poster ? "hero-wrapper-hide" : "hero-wrapper-show"}`}>
        <h2>
          <h2 className='welcome-header'>
            ETH <span className="highlight-text">Long Bot</span>.
          </h2>
          <h3 className='welcome-subheader'>
            This high frequency algorithm catches every climb.
          </h3>
        </h2>
      </div>
      <video className={`${poster ? "video-hide" : "video-show"}`} autoPlay muted onEnded={() => setPoster(true)}>
          <source
              src={video}
              type="video/mp4"
          />
      </video>  
      <img className={`${poster ? "image-show" : "image-hide"}`} src={photo} alt="hero" />     
    </div>
  );
};

export default Hero;
