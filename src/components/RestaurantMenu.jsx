import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constant';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        getMenu();
    }, [resId]);

    const getMenu = async () => {
        try {
            const response = await fetch(MENU_URL + resId);
            const json = await response.json();
            setResMenu(json.data);
        } catch (error) {
            console.error('Error fetching menu:', error);
        }
    };

    if (!resMenu) {
        return <h2>Loading...</h2>; // Prevent accessing null state
    }

    // Extract Restaurant Details
    const restaurantName = resMenu?.cards?.[0]?.card?.card?.info?.name || 'Unknown Restaurant';

    // Extract Menu Items
    const menuCategories =
        resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (category) => category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || [];

    return (
        <div>
            <h1>{restaurantName}</h1>
            <h2>Menu</h2>

            {menuCategories.length === 0 ? (
                <p>No menu available</p>
            ) : (
                menuCategories.map((category, index) => (
                    <div key={index}>
                        <h3>{category.card.card.title}</h3>
                        <ul>
                            {category.card.card.itemCards.map((item) => (
                                <li key={item.card.info.id}>
                                    <strong>{item.card.info.name}</strong> - ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
};

export default RestaurantMenu;
