import avatar from './avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <div className="row">
          <div className="row">
            <div style={{paddingRight: "20px"}}>
              <img src={avatar} className="avatar" alt="photo" />
            </div>
            <div className="name">
            Alevtina Babinskaya
            </div>
          </div>
          <ul className="menu">
            <li><a href="#" className="chosen">Projects</a></li>
            <li><a href="#" className="active">About me</a></li>
            <li><a href="#" className="active">Contacts</a></li>
            <li><a href="#" className="active">Notes</a></li>
          </ul> 
        </div>
        <div >
        <h1>Projects</h1>
          <div className="portfolio_section">
            <p><img className="logo"/><a href='https://mediaboost.com/' className='header3Link'>MediaBoost</a></p> 
            <img className="cover"/>
            <p className="description">Media Boost is an advertising service that allows small businesses create and run ads in social media. My task here was to design profile pages for MediaBoost customers.</p>
            <a className="link">More</a>
          </div>

        </div>
    </div>
  );
}

export default App;
