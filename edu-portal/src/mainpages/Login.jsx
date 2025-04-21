import React from "react";

import LogNav from "../template/LogNav";
import LogForm from "./subpages/Login/LogForm";

import '../css/maincss/login/Login.css';

function Login(){
    return(
        <>
                <div className="LogNav">

                        <LogNav />

                </div>

                <div className="LogBody">

                        <div className="LogBody1">

                        </div>
                        <div className="LogBody2">

                            <LogForm />

                        </div>

                </div>

        </>
    )
}

export default Login;