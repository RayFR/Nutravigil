import { useState, useEffect } from "react";
import axios from "axios";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/items/") // fetches the data from django backend
            .then(response => setItems(response.data)) // updates items with the API response
            .catch(error => console.error("Error fetching data:", error)); // error handling
    }, []);
}

export default Items;