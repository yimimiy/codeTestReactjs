import React from 'react';

export default function filter() {
    return (
        <div className="filter_container">
            <div className="categories">
                <p className="text medium">
                    Categories
                </p>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>All</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>French</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>contemporary</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>Italian</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>Italian</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>Maxican</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>Burgers</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>Fusion</label>
                </div>
            </div>

            <div className="neighborhood">
                <p className="text medium">
                    Neighborhood
                </p>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>1st</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>2rd</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>3nd</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>4th</label>
                </div>
                <div className="item_list">
                    <input type="checkbox" name="password" id="password" />
                    <label>5th</label>
                </div>
            </div>

        </div>

       
    )
}
