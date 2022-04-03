import React, {useState} from "react";
import {LoginBtn, LogoLink, SigninBox, SigninBtn, SigninContainer,
    SigninH1, SigninLogo, SigninP} from "./SigninELements";
import AmazonLogo from "../../images/pngwing.com.png";
import { auth } from "../../firebase_setup";


export default function SigninForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
    //    Firebase login and aunth
    }

    const register = (e) => {
        e.preventDefault();
    //    Do some fancy firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created new user
                console.log(auth);
            })
            .catch(error => alert(error.message))
    }

    return(
        <SigninContainer>
            <LogoLink to={"/"}>
                <img src={AmazonLogo} alt={"AmazonLogo"}/>
            </LogoLink>
            <SigninBox>
                <SigninH1>Sign in</SigninH1>
                <label>E-mail</label>
                <input name={"email"} type={"email"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input name={"password"} type={"password"} value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <SigninBtn onClick={signIn} type={"submit"}>Sign In</SigninBtn>
                <SigninP>
                    By sinning in you agree to Amazon's FAKE COLON Condition Use & Sale. Please see our
                    Privacy Notice, Cookies Notice and our interest Based ads Notice.
                </SigninP>
                <LoginBtn onClick={register}>Create your Amazon Account</LoginBtn>
            </SigninBox>
        </SigninContainer>
    );
}
