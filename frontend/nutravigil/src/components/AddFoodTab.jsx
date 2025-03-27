import { useEffect, useState } from "react";
import "../App.css";

const AddFoodTab = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_foods")
    })

    return (
        <div className="add-food-section">
            <div className="add-existing-food">
                <h2 className="title">Add Existing Food</h2>
                <input type="text" placeholder="Search Food Database" className="input-field" />
                <div className="foods-container">
                    {[...Array(6)].map((_, index) => (
                        <div className="food" key={index}>
                            (1) Chicken Breast -&gt; 456 kcal
                        </div>
                    ))}
                </div>
            </div>

            <div className="custom-food-form">
                <h2>Create Custom Food</h2>
                <form>
                    {["Calories", "Protein", "Carbs", "Fats", "Sugars"].map((item) => (
                        <div className="form-row" key={item}>
                            <label htmlFor={item.toLowerCase()}>{item} -&gt;</label>
                            <input id={item.toLowerCase()} type="text" placeholder={`0${item === "Calories" ? "kcal" : "g"}`} />
                        </div>
                    ))}
                    <button type="submit" className="add-food-button">Add Food</button>
                </form>
            </div>
        </div>
    );
};

export default AddFoodTab;
