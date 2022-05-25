import { useRef, useState } from "react";
import './Login.css';
import './Layout.css';
import { login } from "../../Firebase";

export default function Login(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        // setLoading(true)
        try {
            await login(emailRef.current.value, passwordRef.current.value);
            alert("SELAMAT DATANG DI POLINEMA")
            props.history.push('/welcome')
        } catch (e) {
            setError(e.message);
            // alert(error);
        }
        // setLoading(false);

    }
    return (
        <div>
            <div class="containerLogin">
                <div className="col-lg-2"></div>
                <form>
                    <div className="title">
                        <h3><b>LOGIN AKUN</b></h3><br></br>
                    </div>
                    <img src="https://1.bp.blogspot.com/-PpH7CcrJIvE/X5WGsZUp6LI/AAAAAAAADRE/VIw1_NyjUC4HUnijuO1r2WBG4tfjpJGbgCLcBGAsYHQ/s1920/Logo%2BPolinema%2B%2528Politeknik%2BNegeri%2BMalang%2529.png" width="40px" height="250px" class="card-img-top" alt="polinema"></img>
                    <div className="card-body"></div>
                    <div style={{ marginLeft: "20pt", color: "red" }}>
                        {error}
                    </div>
                    <div className="field">
                        <b><label>E-MAIL</label><br></br></b>
                        <input ref={emailRef} type="email" className="form-control" placeholder="Email" />
                    </div>
                    <br></br>

                    <div className="field">
                        <b><label>PASSWORD</label><br></br></b>
                        <input ref={passwordRef} type="password" className="form-control" placeholder="Password" />
                    </div>

                    <br>
                    </br>
                    <div className="view">
                        <div className="container mt-3 center-block">
                            <div className="btn1">
                                <button type="button" onClick={handleSubmit} className="btn btn-warning center-block"><b>LOGIN AKUN</b></button></div>
                            <br></br>
                            <p className="forgot-password text-right">
                                Maaf, jika data belum terdaftar, silakan <a href="/register">Register !</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}