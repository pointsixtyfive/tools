import { useState } from 'react';
import axios from 'axios';

import {
  Box,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  useToast,
} from '@chakra-ui/react';

import { UserProvider, useUserData } from './context/UserContext';

function Login() {
  const [values, setValues] = useState({
    username: '',
    usernameTouched: false,
    password: '',
    passwordTouched: false,
    showPassword: false,
  });
  const { userData, setUserData } = useUserData();

  const [isLoading, setIsLoading] = useState(false);
  const toastNotification = useToast();

  const isUsernameError = values.username === '' && values.usernameTouched;
  const isPasswordError = values.password === '' && values.passwordTouched;

  function handleBlur(e) {
    const id = e.target.id;
    const field = `${id}Touched`;
    console.log(field);

    setValues((prev) => {
      return { ...prev, [field]: true };
    });
  }

  function handleEnterKeyPress(e) {
    if (values.passwordTouched === false && values.usernameTouched === false) return;
    if (isLoading) return;

    if (e.key == 'Enter') {
      const loginButton = document.getElementById('login');
      loginButton.click();
    }
  }

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.username || !values.password) {
      console.error('login information not provided');
      toastNotification({
        title: 'Login Error',
        description: 'Please provide your login credientials.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    setIsLoading(true);

    const login = {
      login: values.username,
      password: values.password,
    };

    const userData = await axios
      .post(`http://${window.location.host}/api/login`, login, { mode: 'cors' })
      .then((response) => response.data)
      .catch((e) => console.error('%%%%%%%%%%%%%%', e));

    if (!userData || userData.error) {
      toastNotification({
        title: 'Login Error',
        description: 'Error fetching user: userData is undefined.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    setIsLoading(false);

    if (userData && !userData.error) {
      setUserData(userData);
    }
  };

  return (
    <UserProvider userData={userData}>
      <Container maxWidth='sm' sx={{ display: 'flex' }} onKeyDown={(e) => handleEnterKeyPress(e)}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          component='form'
        >
          <FormControl isInvalid={isUsernameError} onBlur={(e) => handleBlur(e)} variant='outlined'>
            <FormLabel>Username</FormLabel>
            <Input id='username' label='User Name' value={values.username} onChange={handleChange('username')} />
            {!isUsernameError ? (
              <FormHelperText> </FormHelperText>
            ) : (
              <FormErrorMessage>Username is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={isPasswordError} onBlur={(e) => handleBlur(e)} variant='outlined'>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                id='password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                label='Password'
              />
              <InputRightElement width='4.5rem'>
                <Button
                  size='sm'
                  onClick={() =>
                    setValues((prev) => {
                      return { ...prev, showPassword: !prev.showPassword };
                    })
                  }
                  variant='ghost'
                  style={{ boxShadow: 'none' }}
                >
                  {values.showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {!isPasswordError ? (
              <FormHelperText> </FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <Button
              id='login'
              onClick={handleSubmit}
              isLoading={isLoading}
              loadingText='Logging in...'
              spinnerPlacement='start'
              variant='outline'
            >
              Login
            </Button>
          </FormControl>
        </Box>
      </Container>
    </UserProvider>
  );
}

export default Login;
