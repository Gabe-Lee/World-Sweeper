import React from 'react';

import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Surface from './generic/Surface';
import Button from './generic/Button';
import Icon from './generic/Icon';
import Text from './generic/Text';

import './Navbar.scss';

export default function Navbar(): JSX.Element {
  return (
    <Surface flex={{ gap: 2 }} theme={{ colors: 'standard-light' }}>
      <Button flex={{ xsr: 1 }} theme={{ colors: 'standard' }}>
        <Icon icon={faBars} />
      </Button>
      <Text flex={{ xsr: 10 }}>HELLO WORLD</Text>
      <Button flex={{ xsr: 1 }} theme={{ colors: 'standard' }}>
        <Icon icon={faUser} />
      </Button>
    </Surface>
  );
}
