import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutForms } from "../components/layoutFoms";
import { LayoutComponents } from "../components/layoutPages";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <LayoutComponents>
            <LayoutForms>
                <span className="title">Bem Vindo</span>
                <span className="subtitle">Rocket Lab</span>
                <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>
                <div className="wrap-input">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>
                <div className="text-center">
                    <span className="txt1" >Esqueceu sua senha</span>
                    <Link className="txt2" to={''}>clique aqui</Link>
                </div>
            </LayoutForms>
        </LayoutComponents>
    );
}
