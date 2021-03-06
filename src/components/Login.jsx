import axios from "axios";
import { Button } from "bootstrap";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import signin from "../api/signin";
import { login, setToken, setUseraname } from "../redux/actions";

const Login = () => {

    const { isLoggedIn, user } = useSelector(s=>s);
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [cookies, setCookie] = useCookies(['token']);

    async function formSubmit(e) {

        e.preventDefault();

        setErrorMessage('');

        const { value: email } = emailRef.current;
        const { value: password } = passwordRef.current;
        
        try{

            const { token, username } = await signin({ email, password });
            dispatch(setToken({ token }));
            dispatch(setUseraname({ username }));
            dispatch(login());
            setCookie('token', token);
            
        }
        catch(e){
            
            if(axios.isAxiosError(e) && e.response) {

                const { response: { status } } = e;

                if(status === 404) {
                    setErrorMessage("Email not found");
                }
                else if(status) {
                    setErrorMessage('Invalid password');
                }

            }else {
                console.log(e);
            }
        }
    }

    return (
        isLoggedIn?
        <Redirect to="/" />:
        <div className="text-center flex justify-center mt-16">
            <Form className="w-1/6">
                <p style={{ color: 'red' }}>{errorMessage.length?errorMessage:''}</p>
                <Form.Control ref={emailRef} className="mt-8" type="email" placeholder="Enter email" />
                <Form.Control ref={passwordRef} className="mt-8" type="password" placeholder="Password" />
                <button  
                className="mt-6"
                style={{ backgroundColor: "white", width: '100px' }}
                onClick={formSubmit} 
                >
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default Login;