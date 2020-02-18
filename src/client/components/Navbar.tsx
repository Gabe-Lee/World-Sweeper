import React from 'react';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import FlexGrid from './generic/FlexGrid';
import FlexItem from './generic/FlexItem';
import Surface from './generic/Surface';
import Button from './generic/Button';
import Icon from './generic/Icon';

import './Navbar.scss';

export default function Navbar(): JSX.Element {
  return (
    // <Surface className="navbar" colors={Theme.accentLight} padding={Padding.none} id="navbar">
    //   <FlexGrid gap={2}>
    //     <FlexItem xsr={1}>
    //       <Button colors={Theme.accent} lifted>
    //         <Icon icon={faUser} />
    //       </Button>
    //     </FlexItem>
    //     <FlexItem xsr={10} className="center">
    //       HELLO WORLD
    //     </FlexItem>
    //     <FlexItem xsr={1}>
    //       <Button colors={Theme.accent} lifted>
    //         Account
    //       </Button>
    //     </FlexItem>
    //   </FlexGrid>
    // </Surface>
    <></>
  );
}
