// @ts-check
import React, { useState } from 'react';
import { faUser, faBars, faBook, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import cascade from './generic/styles/cascade';

import Surface from './generic/Surface';
import Button from './generic/Button';
import Icon from './generic/Icon';
import Text from './generic/Text';
import { theme, border, shadow } from './generic/styles/theme';
import { absolute, relative, flexDefault } from './generic/styles/flex';

const flexFill = { size: 'xs', styles: absolute(1) };
const flexMin = { display: 'flex', flex: '0 0 auto' };
const flexHide = { display: 'none', flex: '0 0 0px' };

/**
 * Render the hamburger menu button with different flex breakpoints
 * @param {import('./generic/styles/flex.js').FlexModes} flex
 * @param {() => void} toggleDrawer
 */
const openMenuButton = (flex, toggleDrawer) => (
  <Button gap="0.25rem" flex={flex} css={border.pill} onClick={toggleDrawer}>
    <Icon icon={faBars} flex={[{ size: 'xs', styles: relative(1) }]} />
  </Button>
);

/**
 * Render the array of nav buttons with different flex breakpoints
 * @param {import('./generic/styles/flex.js').FlexModes} buttonFlex
 * @param {import('./generic/styles/flex.js').FlexModes} textFlex
 */
const navButtons = (buttonFlex, textFlex) => (
  <>
    <Button gap="0.25rem" flex={buttonFlex} css={border.pill}>
      <Icon icon={faQuestionCircle} flex={flexFill} />
      <Text flex={textFlex}>About</Text>
    </Button>
    <Button gap="0.25rem" flex={buttonFlex} css={border.pill}>
      <Icon icon={faBook} flex={flexFill} />
      <Text flex={textFlex}>Tutorial</Text>
    </Button>
    <Button gap="0.25rem" flex={buttonFlex} css={border.pill}>
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
        css={cascade(theme.standardLight, shadow.medUp, {
          justifyContent: 'flex-end',
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
        })}
        flex={{ size: 'sm', styles: flexHide }}
      >
        {navButtons({ size: 'xs', styles: flexMin }, [
          { size: 'xs', styles: flexHide },
          { size: 'sm', styles: flexMin },
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
          flex={{ size: 'sm', styles: flexHide }}
          className="NavbarModal"
          onClick={toggleDrawer}
        />
      )}
      {/* <Surface className="navbar-spacer" flex={{ xs: 0, lg: 1 }} /> */}
      <Surface
        className="Navbar"
        gap="0.25rem"
        css={cascade(theme.standardLighter, shadow.medUp, {
          fontSize: '1.5rem',
          position: 'fixed',
          zIndex: 100,
          width: '100vw',
          height: '3.75rem',
          bottom: '0',
        })}
        flex={{ size: 'lg', styles: cascade(shadow.med, { top: '0' }) }}
      >
        <Text css={theme.standardLighter} flex={{ size: 'xs', styles: relative(10) }}>
          HELLO WORLDER
        </Text>
        {openMenuButton({ size: 'sm', styles: flexHide }, toggleDrawer)}
        {navButtons(
          [
            { size: 'xs', styles: flexHide },
            { size: 'sm', styles: flexMin },
          ],
          [
            { size: 'xs', styles: flexHide },
            { size: 'md', styles: flexMin },
          ],
        )}
      </Surface>
      {/* <Surface className="navbar-spacer" flex={{ xs: 1, lg: 0 }} /> */}
    </>
  );
}
