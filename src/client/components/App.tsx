import React, { ReactElement } from 'react';

import FlexGrid from './generic/FlexGrid';
import FlexItem from './generic/FlexItem';
import Surface from './generic/Surface';
import Button from './generic/Button';

import Navbar from './Navbar';

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Surface flex={{ gap: 2 }}>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'standard-darker', rounded: 'pill', lift: true }}>
          Standard Darker
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'standard-dark', rounded: 'pill', lift: true }}>
          Standard Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'standard', rounded: 'pill', lift: true }}>
          Standard
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'standard-light', rounded: 'pill', lift: true }}>
          Standard Light
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'standard-lighter', rounded: 'pill', lift: true }}>
          Standard Lighter
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'prime-darker', rounded: 'pill', lift: true }}>
          prime Darker
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'prime-dark', rounded: 'pill', lift: true }}>
          prime Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'prime', rounded: 'pill', lift: true }}>
          prime
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'prime-light', rounded: 'pill', lift: true }}>
          prime Light
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'prime-lighter', rounded: 'pill', lift: true }}>
          prime Lighter
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'accent-darker', rounded: 'pill', lift: true }}>
          accent Darker
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'accent-dark', rounded: 'pill', lift: true }}>
          accent Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'accent', rounded: 'pill', lift: true }}>
          accent
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'accent-light', rounded: 'pill', lift: true }}>
          accent Light
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'accent-lighter', rounded: 'pill', lift: true }}>
          accent Lighter
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alter-darker', rounded: 'pill', lift: true }}>
          alter Darker
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alter-dark', rounded: 'pill', lift: true }}>
          alter Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alter', rounded: 'pill', lift: true }}>
          alter
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alter-light', rounded: 'pill', lift: true }}>
          alter Light
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alter-lighter', rounded: 'pill', lift: true }}>
          alter Lighter
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alt-accent-darker', rounded: 'pill', lift: true }}>
          alt-accent Darker
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alt-accent-dark', rounded: 'pill', lift: true }}>
          alt-accent Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alt-accent', rounded: 'pill', lift: true }}>
          alt-accent
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alt-accent-light', rounded: 'pill', lift: true }}>
          alt-accent Light
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alt-accent-lighter', rounded: 'pill', lift: true }}>
          alt-accent Lighter
        </Button>
      </Surface>
      {/* <FlexGrid gap={4}>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.standard} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.standard
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.standardLight} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.standardLight
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.standardLighter} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.standardLighter
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.prime} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.prime
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.prime} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.prime
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.accentDark} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.accentDark
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.accent} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.accent
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.accentLight} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.accentLight
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.aAccent} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.aAccent
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.aAccent} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.aAccent
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.dPrime} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.dPrime
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.dPrime} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.dPrime
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.dAlter} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.dAlter
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.dAlter} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.dAlter
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.clash} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.clash
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.clash} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.clash
          </Button>
        </FlexItem>
        <FlexItem xs={1} lg={2}>
          <Surface colors={Theme.dPrime} lifted fill>
            I am a surface, not a button, I dont have any interaction stuff on me and I am just nice.
          </Surface>
        </FlexItem>
        <FlexItem xs={1} lg={2}>
          <Surface colors={Theme.standardLight} lifted fill>
            I am a surface, not a button, I dont have any interaction stuff on me and I am just nice.
          </Surface>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button
            colors={Theme.standardLight}
            border={Border.md}
            padding={Padding.lg}
            rounded={Rounded.pill}
            lifted
            fill
          >
            Theme.lStandard
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.standardLighter} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.lStandard
          </Button>
        </FlexItem>
      </FlexGrid> */}
      <div>Next Div</div>
    </>
  );
};
export default App;
