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

    return (
        <>
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
              There was an error with your signup!
            </Alert>
    
            <Form.Group>
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Username'
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              <Form.Control.Feedback type='invalid'>Username required!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Email address'
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
              disabled={!(userFormData.username && userFormData.email && userFormData.password)}
              type='submit'
              variant='success'>
              Submit
            </Button>
          </Form>
        </>
      );
    };
    
    export default Signup;