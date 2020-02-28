// @ts-check
import React, { useState } from 'react';
import { faUser, faBars, faBook, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import { useSelect } from '../utils';

import Surface from './generic/Surface';
import Button from './generic/Button';
import Icon from './generic/Icon';
import Text from './generic/Text';

import { navbarCss, navButtonCss, navMenuBtnCss, navModalCss, navBtnTextCss, navTitleCss } from './Navbar.style';

/**
 * Navbar component
 * @returns {JSX.Element} JSX.Element
 */
export default function Navbar(): JSX.Element {
  // const { window } = useSelect(store => store.system);
  const [drawer, setDrawer] = useState('closed');
  function toggleDrawer(): void {
    setDrawer(drawer === 'closed' ? 'open' : 'closed');
  }
  return (
    <>
      {drawer === 'closed' ? '' : <Button css={navModalCss} onClick={toggleDrawer} />}
      <Surface name="Navbar" addClass={drawer} css={navbarCss}>
        <Button name="MenuButton" addClass={drawer} css={navMenuBtnCss} onClick={toggleDrawer}>
          <Icon icon={faBars} />
          <Text css={navBtnTextCss}>Menu</Text>
        </Button>
        <Button name="AboutButton" css={navButtonCss}>
          <Icon icon={faQuestionCircle} />
          <Text css={navBtnTextCss}>About</Text>
        </Button>
        <Button name="TutorialButton" css={navButtonCss}>
          <Icon icon={faBook} />
          <Text css={navBtnTextCss}>Tutorial</Text>
        </Button>
        <Button name="AccountButton" css={navButtonCss}>
          <Icon icon={faUser} />
          <Text css={navBtnTextCss}>Account</Text>
        </Button>
        <Text name="Title" css={navTitleCss}>
          HELLO WORLDER TEST
        </Text>
      </Surface>
    </>
  );
}
