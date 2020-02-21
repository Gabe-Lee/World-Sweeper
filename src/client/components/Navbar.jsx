// @ts-check
import React, { useState } from 'react';

import { faUser, faBars, faBook, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Surface from './generic/Surface';
import Button from './generic/Button';
import Icon from './generic/Icon';
import Text from './generic/Text';
import { theme, border, shadow } from './generic/styles/theme';
import { absolute, relative, flexDefault } from './generic/styles/flex';

const flexFill = { size: 'xs', styles: { ...absolute(1) } };

/**
 * Render the hamburger menu button with different flex breakpoints
 * @param {import('./generic/styles/flex.js').FlexModes} flex
 * @param {() => void} toggleDrawer
 */
const openMenuButton = (flex, toggleDrawer) => (
  <Button gap="0.25rem" flex={flex} css={{ ...border.pill }} onClick={toggleDrawer}>
    <Icon icon={faBars} flex={[{ size: 'xs', styles: { ...relative(1) } }]} />
  </Button>
);

/**
 * Render the array of nav buttons with different flex breakpoints
 * @param {import('./generic/styles/flex.js').FlexModes} buttonFlex
 * @param {import('./generic/styles/flex.js').FlexModes} textFlex
 */
const navButtons = (buttonFlex, textFlex) => (
  <>
    <Button gap="0.25rem" flex={buttonFlex} css={{ ...border.pill }}>
      <Icon icon={faQuestionCircle} flex={flexFill} />
      <Text flex={textFlex}>About</Text>
    </Button>
    <Button gap="0.25rem" flex={buttonFlex} css={{ ...border.pill }}>
      <Icon icon={faBook} flex={flexFill} />
      <Text flex={textFlex}>Tutorial</Text>
    </Button>
    <Button gap="0.25rem" flex={buttonFlex} css={{ ...border.pill }}>
      <Icon icon={faUser} flex={flexFill} />
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
        className="NavbarDrawer"
        addClass={drawer}
        gap="0.25rem"
        css={{
          ...theme.standardLight,
          fontSize: '1.5rem',
          position: 'fixed',
          zIndex: 95,
          width: '100vw',
          height: '7.5rem',
          transition: 'bottom ease-in-out 0.2s, top ease-in-out 0.2s',
          bottom: '-7.5rem',
          paddingBottom: '3.75rem',
          // @ts-ignore
          '&.open': { bottom: '0rem' },
        }}
      >
        {navButtons({ size: 'xs', styles: { flex: '0 0 auto' } }, [
          { size: 'xs', styles: { display: 'none' } },
          { size: 'sm', styles: { flex: '0 0 auto' } },
        ])}
      </Surface>
      {drawer === 'closed' ? (
        ''
      ) : (
        <Button
          css={{
            position: 'fixed',
            backgroundColor: 'rgba(0,0,0,0)',
            cursor: 'default',
            zIndex: 90,
            width: '100vw',
            height: '100vh',
            left: 0,
            top: 0,
          }}
          className="NavbarModal"
          onClick={toggleDrawer}
        />
      )}
      {/* <Surface className="navbar-spacer" flex={{ xs: 0, lg: 1 }} /> */}
      <Surface
        className="Navbar"
        gap="0.25rem"
        css={{
          ...theme.standardLight,
          fontSize: '1.5rem',
          ...shadow.med,
          position: 'fixed',
          zIndex: 100,
          width: '100vw',
          height: '3.75rem',
          bottom: '0',
        }}
        flex={{ size: 'lg', styles: { top: '0' } }}
      >
        <Text css={{ ...theme.standardLight }} flex={{ size: 'xs', styles: { ...relative(10) } }}>
          HELLO WORLDER
        </Text>
        {openMenuButton({ size: 'sm', styles: { display: 'none' } }, toggleDrawer)}
        {navButtons(
          [
            { size: 'xs', styles: { display: 'none' } },
            { size: 'sm', styles: { ...flexDefault } },
          ],
          [
            { size: 'xs', styles: { display: 'none' } },
            { size: 'md', styles: { ...flexDefault } },
          ],
        )}
      </Surface>
      {/* <Surface className="navbar-spacer" flex={{ xs: 1, lg: 0 }} /> */}
    </>
  );
}
