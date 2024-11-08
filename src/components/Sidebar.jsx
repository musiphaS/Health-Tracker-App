import { FaAt, FaCalendar, FaEdit } from 'react-icons/fa'; // import react-icons
import { IconButton, VStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <VStack align="flex-start" spacing={4} color="white">
        <NavLink to="/">
          <IconButton as="a" icon={<FaCalendar />} bg="white" />
          Dashboard
        </NavLink>
        <NavLink to="/create">
          <IconButton as="a" icon={<FaEdit />} color="white" />
          Create
        </NavLink>
        <NavLink to="/profile">
          <IconButton as="a" icon={<FaAt />} color="white" />
          Profile
        </NavLink>
      </VStack>
    </div>
  );
}
