import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Dish from "./Dish";
import "./Menu.css";
import { UserContext } from "./UserContext";

function Menu() {
    const [meals, setMeals] = useState([]);
    const {isLoadingIn, setIsLoadingIn} = useContext(UserContext);
    useEffect(() => {
        axios
            .get("https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals")
            .then((response) => {
                setMeals(response.data);
                setIsLoadingIn(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="list">
            {isLoadingIn && <div>Loading ...</div>}
            {!isLoadingIn && meals.map((meal)  => {
                if (String(meal.id) != "NaN" || !isNaN(meal.id)) {
                    return (
                        <Dish
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                            image={meal.image}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}

export default Menu;
