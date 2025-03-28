import styles from "../styles/LoginPage.module.css"
import { Link } from "react-router-dom";
import SignUpPage from "./SignUpPage";

const LoginPage = () => {

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Log In</h1>

                <form action="">
                    <div className={styles.inputs}>
                        <input placeholder="Email" type="text" className={styles.email} />
                        <input placeholder="Password" type="text" className={styles.password} />
                    </div>
                    <div className={styles.clicks}>
                        <button className={styles.button}>Log In</button>
                        <p className="login">Don't have an account?<Link to="/signup" target="_blank" className={styles.anchor}> Sign up.</Link></p>
                    </div>
                </form>

            </div>
        </>
    );
}

export default LoginPage;