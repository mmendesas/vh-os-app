import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">User</Link>
          </li>
          <li>
            <Link to="/users/1">UserId</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
