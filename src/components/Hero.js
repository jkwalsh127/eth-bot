import video from './videos/eth-bot.mp4';
import photo from './images/eth-bot.png';
import useWindowDimensions from './utils/windowDimensions';

function Hero({setPoster, poster}) {

  return (

    <div className='hero-container'>
      <div className={`${poster ? "hero-wrapper-hide" : "hero-wrapper-show"}`}>
        <div className='subheader-wrapper'>
          <h3 className='welcome-subheader font-subheader'>
            This high frequency algorithm catches every climb.
          </h3>
        </div>
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
