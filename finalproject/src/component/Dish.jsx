import { useContext, useState } from "react";
import './Dish.css'
import { UserContext } from "./UserContext";



function Dish(props) {
    const { cartCount, setCartCount } = useContext(UserContext);
    const [value, setValue] = useState(1);
    const handleChange = ((e) => {
        setValue(e.target.value);
    })
    const handleAdd = ((e) => {
        setCartCount(cartCount + Number(value));
    })
    return (
        <div className="Dish">
            <div className="mainInfo">
                <div className="mainInfoLeft">
                    <img style={{
                        maxWidth: '20%',
                        height: '100%',
                    }} src={props.image} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        padding: '10px',
                    }} >
                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '25px',
                        }}>{props.name}</div>
                        <div style={{
                            fontStyle: 'italic',
                        }}>{props.description}</div>
                        <div style={{
                            color: 'red',
                            fontSize: '25px',
                        }}>${props.price}</div>
                    </div>
                </div>
                <div className="mainInfoRight">
                    <div className="amount">
                        <div style={{
                            fontWeight: 'bold',
                        }}>Amount</div>
                        <input type="number" min="0" defaultValue="1" value={value} onChange={handleChange} />
                    </div>
                    <button className="addButton" onClick={handleAdd}>
                        +Add
                    </button>
                </div>
            </div>
            <div className="line" style={{
                borderBottom: "1px solid black",
                margin: "10px 0",
                width: '100%',
            }}>
            </div>
        </div>
    );
}
export default Dish