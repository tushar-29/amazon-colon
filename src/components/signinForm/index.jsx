import React, {useEffect, useState} from "react";
import {LoginBtn, LogoLink, SigninBox, SigninBtn, SigninContainer,
    SigninH1, SigninP, InputBox} from "./SigninELements";
import AmazonLogo from "../../images/pngwing.com.png";
import { auth } from "../../firebase_setup";
import { useNavigate } from "react-router-dom";
import {useStateValue} from "../StateProvider";


export default function SigninForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{user}, dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("The auth user is ", authUser);

            if (authUser) {
            //    User just logged in / this will not effect if refresh is user is loged in
                dispatch({
                    type: 'SET_USER',
                    auth_user: authUser
                })
            }
            else {
                dispatch({
                    type: 'SET_USER',
                    auth_user: null
                })
            }
        })

    }, [dispatch]);

    const signIn = (e) => {
        e.preventDefault();
        console.log(e)
    //    Firebase login and aunth
        auth
            .signInWithEmailAndPassword(email, password)
            // auth can be passed as parameter in .then(auth => {
            .then(() => {
                navigate("/");
            })
            .catch(error => alert(error.message))


    }

    const register = (e) => {
        e.preventDefault();
    //    Do some fancy firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created new user
                if (auth) {
                    // after sucess auth redirect to "/" url page
                    navigate("/");
                }
            })
            .catch(error => alert(error.message))
    }

    const signOut = () => {
        if (user) {
            auth.signOut();
            alert("You have been Sign Out Successfully");
        }
    }

    return(
        <SigninContainer>
            <LogoLink to={"/"}>
                <img src={AmazonLogo} alt={"AmazonLogo"}/>
            </LogoLink>
            {!user ?
                <SigninBox>
                    <SigninH1>Sign in</SigninH1>
                    <form>
                        <InputBox>
                            <label>E-mail</label>
                            <input name={"email"} type={"email"} value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                            <label>Password</label>
                        </InputBox>
                        <InputBox>
                            <input name={"password"} type={"password"} value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <SigninBtn onClick={signIn} type={"submit"}>Sign In</SigninBtn>
                        </InputBox>
                    </form>
                    <SigninP>
                        By sinning in you agree to Amazon's FAKE COLON Condition Use & Sale. Please see our
                        Privacy Notice, Cookies Notice and our interest Based ads Notice.
                    </SigninP>
                    <LoginBtn onClick={register}>Create your Amazon Account</LoginBtn>
                </SigninBox>
                :
                <SigninBox>
                    <SigninH1>Log Out</SigninH1>
                    <SigninBtn onClick={signOut}>Log Out</SigninBtn>
                </SigninBox>
            }
        </SigninContainer>
    );
}
