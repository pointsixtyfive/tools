import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from '@chakra-ui/react';

import { UserProvider, useUserData } from './context/UserContext';

function Login({ setIsAuthenticated }) {
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });
  const { userData, setUserData } = useUserData();

  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.body.addEventListener('keydown', handleEnterKeyPress);
    return () => {
      document.body.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, []);

  const handleEnterKeyPress = (e) => {
    if (e.key == 'Enter') {
      if (isLoading) return;
      const loginButton = document.getElementById('login');
      loginButton.click();
    }
  };

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.username || !values.password) {
      console.error('login information not provided');
      setErrorMessage('Please provide your login credientials.');
      setOpenAlert(true);
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
      setErrorMessage(userData != undefined ? userData.error : 'Error fetching user: userData is undefined.');
      setOpenAlert(true);
    }

    setIsLoading(false);

    if (userData && !userData.error) {
      setUserData(userData);
      setIsAuthenticated(true);
    }
  };

  // Handlers for the MUI alerts for failed login
  const handleCloseAlert = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <UserProvider userData={userData}>
      <Container maxWidth='sm' sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          component='form'
        >
          <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input id='username' label='User Name' value={values.username} onChange={handleChange('username')} />
          </FormControl>

          <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              id='password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              label='Password'
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '100%' }}>
            <Button id='login' onClick={handleSubmit} loading={isLoading} loadingPosition='end' variant='contained'>
              Login
            </Button>
          </FormControl>
        </Box>
      </Container>
    </UserProvider>
  );
}

export default Login;

Login.propTypes = { setIsAuthenticated: PropTypes.func.isRequired };
