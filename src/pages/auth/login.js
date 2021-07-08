import React,{useState} from "react";
import moment from "moment";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {get} from 'lodash';
import {toast} from "react-toastify";

import "./style.css";
import {createPostAction} from "../../redux/actions";
import {LOGIN} from "../../redux/actions/constants";

const Login = ({user, login, history}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const token = localStorage.getItem('token');

    const submitLogin = ()=>{
        setIsSubmitting(true);
        login(null, {email, password},(res)=>{
            localStorage.setItem("token",get(res, "token"));
            setIsSubmitting(false);
            history.push("/");
        }, (err)=>{
            if (get(err, "message").includes("nvalid credentia")){
                console.log("err", err);
                toast("Les informations d'identification invalides",{type:"error"});
            }
            else toast(get(err, "message"),{type:"error"});
            setIsSubmitting(false);
        })
    };

    if(token || get(user, "data.token"))return <Redirect to="/"/>;

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0 ">
                <div className="row d-flex align-items-center h-85">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row"/>
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line align-middle">
                                <img src={require("../../assets/images/logo-xlg.jpg")} className="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row px-3"><label className="mb-1">
                                <h6 className="mb-0 text-sm">Email</h6>
                            </label> <input className="mb-4" type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/></div>
                            <div className="row px-3"><label className="mb-1">
                                <h6 className="mb-0 text-sm">Mot de passe</h6>
                            </label> <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/></div>
                            <div className="row px-3 mb-4">
                                <a href="#" className="ml-auto mb-0 text-sm">Mot de passe oublié?</a>
                            </div>
                            <div className="row mb-3 px-3"> <button
                                onClick={submitLogin}
                                className="btn btn-blue text-center"
                                disabled={isSubmitting || !password || !email }
                            >
                            Connexion</button></div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue py-4">
                    <div className="row px-3 justify-content-end">
                        <small className="mr-4 mr-sm-5 mb-2">Copyright &copy; {moment().format("YYYY")}. Tous les droits
                            sont réservés.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default connect(({user})=>({user}), {login:createPostAction(LOGIN)})(Login);
