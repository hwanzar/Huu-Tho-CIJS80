import "./Bill.css"
import { UserContext } from "./UserContext";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import Order from "./Order";

function BillItem(props) {
    return (
        <div className="Item">
            <div>
                <div style={{
                    fontWeight: 'bold',
                }}>{props.name}</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                }}>
                    <div style={{
                        color: 'red',
                    }}>{props.price}</div>
                    <div style={{
                        border: '1px solid',
                        borderRadius: '5px',
                        padding: '1px',
                    }}>x {props.amount}</div>
                </div>
            </div>
            <div className="buttonItem">
                <button onClick={props.onDecrement}> - </button>
                <button onClick={props.onIncrement}> + </button>
            </div>
        </div>
    );
}

function Bill({ FINAL, handleClose, handleOrder, handleCancel, handleOrderSent }) {
    const { orderSented, cart, totalMoney, setCart, setTotalMoney, cartCount, setCartCount, OrderSent } = useContext(UserContext);
    const { formShown } = useContext(UserContext);
    const handleIncrement = (index) => {
        const newCart = [...cart];
        newCart[index].amount++;
        setCart(newCart);
        setTotalMoney(Number(Number(totalMoney) + Number(newCart[index].price)).toFixed(2));
        setCartCount(cartCount + 1);
    };

    const handleDecrement = (index) => {
        let newCart = [...cart];
        const itemAmount = newCart[index].amount;
        setTotalMoney(Number(Number(totalMoney) - Number(newCart[index].price)).toFixed(2));
        { console.log(newCart[index]) }
        if (itemAmount === 1) {
            newCart[index].amount--;
            newCart = newCart.filter(item => item.amount > 0);
        } else {
            newCart[index].amount--;
        }
        setCart(newCart);
        setCartCount(cartCount - 1);
    };

    return (
        <div className="bill">
            <div>
                {!OrderSent && cart.map((item, index) => {
                    return (
                        <BillItem
                            key={index}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                            onIncrement={() => handleIncrement(index)}
                            onDecrement={() => handleDecrement(index)}
                        />
                    )
                })}
                <div className="footerBill">
                    {!OrderSent && <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                    }}>
                        <div>Total Amount</div>
                        <div>$ {totalMoney}</div>
                    </div>}
                    {!formShown && !OrderSent && !orderSented && <div className="billButton">
                        <button onClick={handleClose}>Close</button>
                        <button onClick={handleOrder}>Order</button>
                    </div>}
                    {formShown && !orderSented && <Order handleCancel={handleCancel} handleOrderSent={handleOrderSent} />}
                </div>
            </div>
            {OrderSent && !orderSented && <div>Sending order data ... </div>}
            {orderSented && <div className="confirmSent">
                <div>Succesfully sent the order!</div>
                <div style = {{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <button className="finalCloseButton" onClick={FINAL}>Close</button>
                </div>
            </div>}
        </div>

    );
}
export default Bill;
