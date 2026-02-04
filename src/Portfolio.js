import { useLocation } from "react-router-dom";

function Portfolio() {
  const location = useLocation();
  return (
    <div >
      <h1>Portfolio</h1>
      
      <div className="portfolio_section" id="case1">
          <p className='header3Link'><img className="logo"/><a href='https://mediaboost.com/'>MediaBoost</a></p> 
          <div>
            <img className="cover" src='/img/mediaboost/dashboard.png' alt="Media Boost Personal Information" />
            <img className="cover" src='/img/mediaboost/Campaigns@2x.png'  alt="Media Boost Campaigns" />
            <img className="cover" src='/img/mediaboost/start_campaign.png'  alt="Media Boost Start Campaign" /></div>
          <p className="description">Media Boost is an advertising service that allows small businesses create and run ads in social media. My task here was to design profile pages for MediaBoost customers.</p>
          {location.hash === "#case1" ? 
          <div>
          <p>I started with business interviews to define the main functionality and approximate user scenarios.</p>
          <p>Running ad campaigns on social media seems a hard task for most individual businesses that don't have expertise in digital marketing. The whole idea of Media Boost is to offer one-click solutions for digital advertising, that would not involve much of the customer's attention.</p>
          <p>This is the reason why the Media Boost profile doesn't contain any diagrams and statistics about social media advertising.</p>
          <p>So after a few business interviews, I defined the main scenarios and page structure.</p>
          <a className="link" href="">Less</a>
          </div> :
          <a className="link" href="#case1">More</a>}
      </div>
      <div className="portfolio_section" id="case2">
          <p className='header3Link'><img className="logo" alt="logo" /><a href='https://mediaboost.com/'>Time Timer</a></p> 
          <img className="cover" src='/img/mediaboost/dashboard.png' width='100%' alt=""/>
          <p className="description">Media Boost is an advertising service that allows small businesses create and run ads in social media. My task here was to design profile pages for MediaBoost customers.</p>
          <p>Media Boost is an advertising service that allows small businesses create and run ads in social media. My task here was to design profile pages for MediaBoost customers.</p>
          <p>I started with business interviews to define the main functionality and approximate user scenarios.</p>
          <p>Running ad campaigns on social media seems a hard task for most individual businesses that don't have expertise in digital marketing. The whole idea of Media Boost is to offer one-click solutions for digital advertising, that would not involve much of the customer's attention.</p>
          <p>This is the reason why the Media Boost profile doesn't contain any diagrams and statistics about social media advertising.</p>
          <p>So after a few business interviews, I defined the main scenarios and page structure.</p>
          <a className="link" href="#case2">More</a>
      </div>
    </div>
  );
}
export default Portfolio;