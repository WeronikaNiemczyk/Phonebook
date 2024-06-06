import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../components/API';
import { Button, Flex } from '@chakra-ui/react';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Flex justifyContent="center" width="100%" mt="10" mb="10">
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <Button type="submit" bg="#bbd0f7">
          Register
        </Button>
      </form>
    </Flex>
  );
};
