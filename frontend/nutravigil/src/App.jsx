import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState("addFood");

  return (
    <>
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
            <div className="food">
              (1) Chicken Breast -&gt; 456 kcal
            </div>
            <div className="food">
              (1) Chicken Breast -&gt; 456 kcal
            </div>
            <div className="food">
              (1) Chicken Breast -&gt; 456 kcal
            </div>
            <div className="food">
              (1) Chicken Breast -&gt; 456 kcal
            </div>
            <div className="food">
              (1) Chicken Breast -&gt; 456 kcal
            </div>
            <div className="food">
              (1) Chicken Breast -&gt; 456 kcal
            </div>
          </div>
        </div>

      </div>

      <div className="variable-stats">
        <div className="options">
          <h1 className={'title ${activeTab === "addFood"q ? "active" : ""}'} onClick={() => setActiveTab("addFood")}>Add Food</h1>
          <h1 className={`title ${activeTab === "manage" ? "active" : ""}`} onClick={() => setActiveTab("manage")}>Manage</h1>
        </div>
        
        <div className="content-wrapper">
          {activeTab === "addFood" && (
          <div className="add-food-section">
            <div className="add-existing-food">
              <h2 className="title">Add Existing Food</h2>
              <input type="text" placeholder="Search Food Database" className="input-field" />
              <div className="foods-container">
                <div className="food">
                  (1) Chicken Breast -&gt; 456 kcal
                </div>
                <div className="food">
                  (1) Chicken Breast -&gt; 456 kcal
                </div>
                <div className="food">
                  (1) Chicken Breast -&gt; 456 kcal
                </div>
                <div className="food">
                  (1) Chicken Breast -&gt; 456 kcal
                </div>
                <div className="food">
                  (1) Chicken Breast -&gt; 456 kcal
                </div>
                <div className="food">
                  (1) Chicken Breast -&gt; 456 kcal
                </div>
              </div>
            </div>

            <div class="custom-food-form">
              <h2>Create Custom Food</h2>
              <form>
                <div class="form-row">
                  <label for="calories">Calories -&gt;</label>
                  <input id="calories" type="text" placeholder="0kcal" />
                </div>
                <div class="form-row">
                  <label for="protein">Protein -&gt;</label>
                  <input id="protein" type="text" placeholder="0g" />
                </div>
                <div class="form-row">
                  <label for="carbs">Carbs -&gt;</label>
                  <input id="carbs" type="text" placeholder="0g" />
                </div>
                <div class="form-row">
                  <label for="fats">Fats -&gt;</label>
                  <input id="fats" type="text" placeholder="0g" />
                </div>
                <div class="form-row">
                  <label for="sugars">Sugars -&gt;</label>
                  <input id="sugars" type="text" placeholder="0g" />
                </div>
                <button type="submit" class="add-food-button">Add Food</button>
              </form>
            </div>

          </div>
          )}

          {activeTab === "manage" && (
            <div className="content-wrapper">
              <div className="profile-tab">
                <h2 className="title">Profile</h2>
                <div className="stat-box">
                  <div className="stat">
                    <p>Age</p>
                    <p>18 -&gt;</p>
                  </div>
                  <div className="stat">
                    <p>Sex</p>
                    <p>Male -&gt;</p>
                  </div>
                  <div className="stat">
                    <p>Weight</p>
                    <p>85kg -&gt;</p>
                  </div>
                  <div className="stat">
                    <p>Height</p>
                    <p>6'1 -&gt;</p>
                  </div>
                </div>

                <div className="calorie-calc">
                  <div className="stat">
                    <p>Maintanence Calories</p>
                    <p>2616kcal</p>
                  </div>
                  <div className="stat">
                    <p>Avg Deficit Calories</p>
                    <p>2116kcal</p>
                  </div>
                  <div className="stat">
                    <p>Avg Surplus Calories</p>
                    <p>3050kcal</p>
                  </div>
                </div>
                
              </div>

              <div className="goal-settings">
                <h2 className="title">Goal Settings</h2>
                <div className="manual-stat-setting">
                  <h3 className="subtitle">Manual Stat Setting</h3>
                  <div className="stat-row">
                    <label for="calories">Calories</label>
                    <input type="number" id="calories" name="calories" placeholder="2546" />
                    <span>kcal</span>
                  </div>
                  <div className="stat-row">
                    <label for="protein">Protein</label>
                    <input type="number" id="protein" name="protein" placeholder="90" />
                    <span>g</span>
                  </div>
                  <div className="stat-row">
                    <label for="carbs">Carbs</label>
                    <input type="number" id="carbs" name="carbs" placeholder="130" />
                    <span>g</span>
                  </div>
                  <div className="stat-row">
                    <label for="fats">Fats</label>
                    <input type="number" id="fats" name="fats" placeholder="35" />
                    <span>g</span>
                  </div>
                  <div className="stat-row">
                    <label for="sugars">Sugars</label>
                    <input type="number" id="sugars" name="sugars" placeholder="64" />
                    <span>g</span>
                  </div>
                  <button className="reset-button">Reset Stats</button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default App
