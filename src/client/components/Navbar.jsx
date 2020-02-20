// @ts-check
import React, { useState } from 'react';

import { faUser, faBars, faBook, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Surface from './generic/Surface';
import Button from './generic/Button';
import Icon from './generic/Icon';
import Text from './generic/Text';

import './Navbar.scss';

/**
 * Render the hamburger menu button with different flex breakpoints
 * @param {import('./generic/types/Flex').TFlex} flex
 * @param {() => void} toggleDrawer
 */
const openMenuButton = (flex, toggleDrawer) => (
  <Button flex={flex} theme={{ colors: 'standard', rounded: 'pill', lift: 'shadow-depress' }} onClick={toggleDrawer}>
    <Icon icon={faBars} flex={{ xsr: 1 }} />
  </Button>
);

/**
 * Render the array of nav buttons with different flex breakpoints
 * @param {import('./generic/types/Flex').TFlex} buttonFlex
 * @param {import('./generic/types/Flex').TFlex} textFlex
 */
const navButtons = (buttonFlex, textFlex) => (
  <>
    <Button flex={buttonFlex} theme={{ colors: 'standard', rounded: 'pill', lift: 'shadow-depress' }}>
      <Icon icon={faQuestionCircle} flex={{ xsr: 1 }} />
      <Text flex={textFlex}>About</Text>
    </Button>
    <Button flex={buttonFlex} theme={{ colors: 'standard', rounded: 'pill', lift: 'shadow-depress' }}>
      <Icon icon={faBook} flex={{ xsr: 1 }} />
      <Text flex={textFlex}>Tutorial</Text>
    </Button>
    <Button flex={buttonFlex} theme={{ colors: 'standard', rounded: 'pill', lift: 'shadow-depress' }}>
      <Icon icon={faUser} flex={{ xsr: 1 }} />
      <Text flex={textFlex}>Account</Text>
    </Button>
  </>
);

/**
 * Navbar component
 * @returns {JSX.Element} JSX.Element
 */
export default function Navbar() {
  const [drawer, setDrawer] = useState('closed');
  const toggleDrawer = () => {
    setDrawer(drawer === 'closed' ? 'open' : 'closed');
  };
  return (
    <>
      <Surface
        id="navbar-drawer"
        className={drawer}
        flex={{ gap: 2, align: ['middle', 'right'] }}
        theme={{ colors: 'standard-light', fontSize: 'lg' }}
      >
        {navButtons({ gap: 3, xs: 'min' }, { xs: 0, sm: 'min' })}
      </Surface>
      {drawer === 'closed' ? '' : <Button id="navbar-modal" onClick={toggleDrawer} />}
      {/* <Surface className="navbar-spacer" flex={{ xs: 0, lg: 1 }} /> */}
      <Surface id="navbar" flex={{ gap: 2 }} theme={{ colors: 'standard-light', lift: 'shadow', fontSize: 'lg' }}>
        <Text flex={{ xsr: 10 }}>HELLO WORLDER</Text>
        {openMenuButton({ gap: 3, xs: 'min', sm: 0 }, toggleDrawer)}
        {navButtons({ gap: 3, xs: 0, sm: 'min' }, { xs: 0, md: 'min' })}
      </Surface>
      {/* <Surface className="navbar-spacer" flex={{ xs: 1, lg: 0 }} /> */}
    </>
  );
}