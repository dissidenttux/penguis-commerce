import React from 'react';
// importing variable with brackets
import { MenuList } from "../helpers/MenuList";
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">The Drip</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                return (
                    <MenuItem
                        key={key}
                        image={menuItem.image}
                        name={menuItem.name}
                        price={menuItem.price}
                    />
                    );
                })}
            </div>
        </div>
    )
}

export default Menu;
