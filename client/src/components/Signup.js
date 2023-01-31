import React, { useState } from 'react';

const Signup = () => {

    const [userData, setUserData] = useState({ username: '', email: '', password: ''});
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
            const { data } = await addUser({ variables: {...userData}});
            Auth.login(data.addUser.token);
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