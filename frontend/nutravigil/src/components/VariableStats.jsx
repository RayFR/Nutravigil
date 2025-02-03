import "../App.css";
import { useState } from "react";
import AddFoodTab from "./AddFoodTab";
import ManageTab from "./ManageTab";

const VariableStats = () => {
    const [activeTab, setActiveTab] = useState("addFood");

    return (
        <div className="variable-stats">
            <div className="options">
                <h1 className={`title ${activeTab === "addFood" ? "active" : ""}`} onClick={() => setActiveTab("addFood")}>
                    Add Food
                </h1>
                <h1 className={`title ${activeTab === "manage" ? "active" : ""}`} onClick={() => setActiveTab("manage")}>
                    Manage
                </h1>
            </div>
            
            <div className="content-wrapper">
                {activeTab === "addFood" ? <AddFoodTab /> : <ManageTab />}
            </div>
        </div>
    );
};

export default VariableStats;
