import React, { useState } from 'react';

const Login = () => {
    const [userData, setUserData] = useState({ email: '', password: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const inputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const submitForm = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        try {
            const { data } = await loginUser({ variables: {...userData}});
            Auth.login(data.login.token);
        }catch(err){
            console.error(err);
            setShowAlert(true);
        }

        setUserData({
            username: '',
            email: '',
            password: '',
        });
    };
    
}