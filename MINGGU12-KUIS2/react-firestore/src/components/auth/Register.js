import { useRef, useState } from "react";
import './Register.css';
import { register } from "../../Firebase";

export default function Register(props) {
    // const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");


    async function handleSubmit(e) {
        // setLoading(true)
        try {
            await register(emailRef.current.value, passwordRef.current.value);
            props.history.push('/')
        } catch (e) {
            setError(e.message);
            // alert(error);
        }
        // setLoading(false);

    }

    // render() {
    // const {gambar, nama, nomor_telp, email, role, password, alamat} = this.state
    return (
        <div>
            <div class="containerLogin">
                <div className="col-lg-2"></div>
                <form>
                    <div className="title">
                        <h3><b>REGISTER AKUN</b></h3><br></br>
                    </div>
                    <img src="https://1.bp.blogspot.com/-PpH7CcrJIvE/X5WGsZUp6LI/AAAAAAAADRE/VIw1_NyjUC4HUnijuO1r2WBG4tfjpJGbgCLcBGAsYHQ/s1920/Logo%2BPolinema%2B%2528Politeknik%2BNegeri%2BMalang%2529.png" width="40px" height="250px" class="card-img-top" alt="polinema"></img>
                    
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

                    <div className="container mt-3 center-block">
                        <div className="btn">
                            <button type="button" className="btn btn-warning center-block" onClick={handleSubmit}> <b>REGISTER AKUN</b></button>
                        </div>
                        {/* <div style={{color:"red"}}>{error}</div> */}
                        <br></br>
                        <p className="forgot-password text-right">
                            Maaf, data sudah terdaftar, silakan <a href="/">Login !</a>
                        </p>

                    </div>
                </form>
            </div>
        </div>
    );
    // }
}
