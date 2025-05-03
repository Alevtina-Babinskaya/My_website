
import Menu from "./Menu";
import avatar from './avatar.jpg';

const Header = () => {
    return (
        <>
            <div className="row">
                <div style={{paddingRight: "20px"}}>
                    <img src={avatar} className="avatar" alt="photo" />
                </div>
                <div className="name">
                    Alevtina Babinskaya
                </div>
            </div>
            <Menu className="menu"/>
        </>
    );
}

export default Header;