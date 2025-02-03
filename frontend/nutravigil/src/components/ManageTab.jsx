import "../App.css";

const ManageTab = () => {
    return (
        <div className="content-wrapper">
            <div className="profile-tab">
                <h2 className="title">Profile</h2>
                <div className="stat-box">
                    {[
                        { label: "Age", value: "18" },
                        { label: "Sex", value: "Male" },
                        { label: "Weight", value: "85kg" },
                        { label: "Height", value: "6'1" }
                    ].map((stat, index) => (
                        <div className="stat" key={index}>
                            <p>{stat.label}</p>
                            <p>{stat.value} -&gt;</p>
                        </div>
                    ))}
                </div>

                <div className="calorie-calc">
                    {[
                        { label: "Maintenance Calories", value: "2616kcal" },
                        { label: "Avg Deficit Calories", value: "2116kcal" },
                        { label: "Avg Surplus Calories", value: "3050kcal" }
                    ].map((stat, index) => (
                        <div className="stat" key={index}>
                            <p>{stat.label}</p>
                            <p>{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="goal-settings">
                <h2 className="title">Goal Settings</h2>
                <div className="manual-stat-setting">
                    <h3 className="subtitle">Manual Stat Setting</h3>
                    {["Calories", "Protein", "Carbs", "Fats", "Sugars"].map((item) => (
                        <div className="stat-row" key={item}>
                            <label htmlFor={item.toLowerCase()}>{item}</label>
                            <input type="number" id={item.toLowerCase()} name={item.toLowerCase()} placeholder="0" />
                            <span>{item === "Calories" ? "kcal" : "g"}</span>
                        </div>
                    ))}
                    <button className="reset-button">Reset Stats</button>
                </div>
            </div>
        </div>
    );
};

export default ManageTab;
