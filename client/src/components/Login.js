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

    return (
        <>
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
              There was an error with your login!
            </Alert>
            <Form.Group>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Email'
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <Form.Control.Feedback type='invalid'>Email required!</Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              <Form.Control.Feedback type='invalid'>Password required!</Form.Control.Feedback>
            </Form.Group>
            <Button
              disabled={!(userFormData.email && userFormData.password)}
              type='submit'
              variant='success'>
              Submit
            </Button>
          </Form>
        </>
      );
    };
    
    export default LoginForm;