import React, {useState} from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <LoginForm />
        </div>

    )
};

export default LoginPage;