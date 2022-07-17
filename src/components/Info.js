import React from 'react';
import photo from './images/eth-bot-results.png';

function Info() {
  return (
    <div className="info-container">
      <div className='info-wrapper'>
        <div className='backtest-wrapper'>
          <img className="backtest-results" src={photo} alt="backtest results" /> 
        </div>
        <p className='description-paragraph'>
          <span className="name-highlight font-info-header">Ethereum</span><span className="custom-header font-info-header"> trading bot.</span>
        </p>
        <p className='description-paragraph font-paragraph'>
          This is a high-latency algorithm, safely running on the Ethereum 8hr chart.
          Executing trades on a multi-day timeframe makes it easy to enter and exit large positions, and without incurring excessive commission fees.          
        </p>
        <p className='description-paragraph font-paragraph'>
          Being a Long Bot, this script performs best in general uptrends, but nonetheless proves efficient enough to run autonomously across many cycles. It is shown here operating full-time over a <span className='highlight'>5 year period</span>, from the ETH/USDT launch on Binance in August of 2017, through June of 2022, the time of publishing this script.<br/>
          While Buying and Holding Ethereum over this time would've netted you 267%, the algorithm produced a net profit of <span className='highlight'>6,067%</span> over the same time frame.<br/>
          This outperforms the market by nearly <span className='highlight'>23x</span>, and equates to a <span className='highlight'>60x</span> return on investment over 5 years.
        </p>
        <p className='description-paragraph font-paragraph'>
          The strategy behind this algorithm is to always capitalize on significant jumps in the market. This is accomplished by using a simple combination of RSIs:<br/>
          - One RSI uses VWAP as a source, which is primarily responsible for entering growth trends whenever the begin on a micro level<br/>
          - And the other is a Stochastic RSI , which is primarily responsible for identifying exhausted periods of growth on a macro level<br/>
          To sustain the algorithm when not in bullish macro trends, a standard MFI is used to enter and exit trades off of this calculation's basic principles.
        </p>
        <p className='description-paragraph font-paragraph'>
          These indicators are calibrated so that, when price action is resetting, the bot can jump in and out of trades to improve its position, but is then able to remain in positions during uptrends that are backed by volume, in order to achieve maximum gains.<br/>
          Statistics in the Performance Summary show how this strategy plays out in the trade metrics. Specifically, winning trades are almost <span className='highlight'>2 times larger</span> than losing trades, on average, and they also last for an average of <span className='highlight'>5 days</span>, whereas losing trades usually last about 2.
        </p>
        <p className='description-paragraph font-paragraph'>
          In summary, the boom and bust cycles, both small and large, that Ethereum has produced since 2017 prove to have been enough to sustain this single algorithm. Over the 5 year period, the script could've comfortably traded in bad markets while always being poised to capitalize on the asset's sporadic, but significant, gains.
        </p>
        <p className='description-paragraph font-paragraph'>
          Except in the belly of bear markets, I let this Long Bot run with a portion of the portfolio full-time.
        </p>
      </div>
    </div>
  );
};

export default Info;
