import React, {useState} from "react";

const Categpries = ({categories}) => {
    return (
        <div className="nav-widget-1 categories-parent">
            <h3 className="f-widget-heading">Categories</h3>
            <ul className="list-unstyled f-widget-nav">
                {categories.map(category => {
                    return (
                        <li key={category.id}><a href="#">{category.category_name}</a></li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Categpries;