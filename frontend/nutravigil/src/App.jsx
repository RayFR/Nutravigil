import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage  from "./pages/HomePage.jsx";
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
        </Router>
    );
}

export default App;
