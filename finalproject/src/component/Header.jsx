import { useContext, useState } from 'react';
import './Header.css'
import { UserContext } from './UserContext';
const Header = () =>{
    const {cartCount} = useContext(UserContext);
    const {billShown, setBillShown} = useContext(UserContext);
    const handleChange = () => {
        if(!billShown){
            setBillShown(true);
        }
    }
    return(
        <div className='header'>
            <div style={{
                marginLeft: '50px',
            }}>ReactMeals</div>
            <div style = {{
                marginRight: '50px',
            }} className='shoppingCard' onClick={handleChange}>
                <img src = "https://www.iconpacks.net/icons/3/free-icon-red-shopping-cart-10906.png"></img>
                <div>Your Cart</div>
                <div style={{
                    backgroundColor: 'orange',
                    borderRadius: '20px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div>{String(cartCount)}</div>
                </div>
            </div>
        </div>
    );
}
export default Header;