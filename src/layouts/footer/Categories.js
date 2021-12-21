import React, { useState } from "react";

const Categpries = ({categories}) => {
    return (
        <>        
        <div className="nav-widget-1 categories-parent">
            <h3 className="f-widget-heading">Categories</h3>
            <ul className="list-unstyled f-widget-nav">
                {categories.map((category, index) => {                    
                    const order = [...Array(6).keys()].map(i => i+0);
                    return order.includes(index) ? (
                        <li key={category.id}><a href={`product?page=1&category=${category.id}`}>{category.category_name}</a></li>
                    ): null;
                })}
            </ul>
        </div>

        <div className="nav-widget-1 categories-parent">
            <h3 className="f-widget-heading">Categories</h3>
            <ul className="list-unstyled f-widget-nav">
                {categories.map((category, index) => {                    
                    const order = [...Array(6).keys()].map(i => i+6);
                    return order.includes(index) ? (
                        <li key={category.id}><a href={`product?page=1&category=${category.id}`}>{category.category_name}</a></li>
                    ): null;
                })}
            </ul>
        </div>
        </>
    )
};

export default Categpries;
