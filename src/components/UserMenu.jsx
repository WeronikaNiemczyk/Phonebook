import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './API';
import { Button, Box } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.user.email);

  return (
    <div>
      <Box m={5} fontSize={20} fontWeight="600">
        User email: {email}
      </Box>
      <Button bg="#bbd0f7" onClick={() => dispatch(logoutUser())}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
