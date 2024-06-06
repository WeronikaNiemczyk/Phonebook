import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

const Navigation = () => (
  <Flex justifyContent="center" width="100%" mt="10" mb="10">
    <nav>
      <NavLink to="/register">
        <Button m="6" bg="#bbd0f7">
          Register
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button m="6" bg="#bbd0f7">
          Login
        </Button>
      </NavLink>
      <NavLink to="/contacts">
        <Button m="6" bg="#bbd0f7">
          Contacts
        </Button>
      </NavLink>
    </nav>
  </Flex>
);
export default Navigation;
