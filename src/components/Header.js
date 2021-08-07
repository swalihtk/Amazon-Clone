import react from 'react';
import './Header.css';
import amazon_logo from './images/amazon-logo.png';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../StateProvider';

function Header(){

    const [{basket}, dispatch]=useStateValue();
    return (
        <nav className={"header"}>
            {/* Logo on Left with Image */}
            <Link to={"/"}>
                <img className={"header-logo"} src={amazon_logo}
                     alt={"logo"}/>
            </Link>

            {/* Search Box */}
            <div className="header_search"> 
                <input type={"text"} className={"header__searchInput"}/>
                <SearchIcon className="header_searchIcon" />
            </div>
            
            {/* 3 links */}
            <div className="header__nav">
                {/* First Link */}
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLineOne">Hello Man</span>
                        <span className="header__optionLineTwo">Login</span>
                    </div>
                </Link>
                {/* Second Link */}
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLineOne">Returns&</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>
                {/* Third Link */}
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* Fourth Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__optionBasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/* Basket Icon for showing the cart no. */}
        </nav>
    )
}

export default Header;

