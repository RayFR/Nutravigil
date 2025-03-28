import styles from "../styles/SignUpPage.module.css"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

const SignUpPage = () => {

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Sign Up</h1>

                <form action="">
                    <div className={styles.inputs}>
                        <input placeholder="Username" type="text" className={styles.username} />
                        <input placeholder="Email" type="text" className={styles.email} />
                        <input placeholder="Password" type="text" className={styles.password} />
                    </div>
                    <div className={styles.clicks}>
                        <button className={styles.button}>Sign Up</button>
                        <p className="login">Already have an account?<Link to="/login" target="_blank" className={styles.anchor}> Log in.</Link></p>
                    </div>
                </form>

            </div>
        </>
    );
}

export default SignUpPage;