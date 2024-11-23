import { Link } from "react-router-dom";
import './style.css'
function Header () {
    return (
    <>
        <div className="header">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>     
        </div>
    </>
    )
}
export default Header;