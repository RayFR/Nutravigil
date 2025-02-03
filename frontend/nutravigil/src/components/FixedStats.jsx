import "../App.css";

const FixedStats = () => {
    return (
        <div className="fixed-stats">
            <div className="macros">
                <div className="date-select">
                    <h1 className="title">
                        <span className="arrow">&lt;-</span> Today <span className="arrow">-&gt;</span>
                    </h1>
                </div>

                <div className="kcal-section">
                    <div className="kcal-information">
                        <p className="kcal-fraction">1500.0 /2100.0 kcal</p>
                        <p className="kcal-remaining">600 kcal remaining</p>
                    </div>
                    <img src="kcalbar.png" alt="kcalbar" className="kcalbar" />
                </div>

                <div className="nutrients">
                    <p className="protein">Protein - 78g</p>
                    <p className="carbs">Carbs - 102g</p>
                    <p className="fats">Fats - 35g</p>
                    <p className="sugars">Sugars - 76g</p>
                </div>
            </div>

            <div className="foods">
                <h1 className="title">Foods</h1>
                <div className="foods-container">
                    {[...Array(6)].map((_, index) => (
                        <div className="food" key={index}>
                            (1) Chicken Breast -&gt; 456 kcal
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FixedStats;
