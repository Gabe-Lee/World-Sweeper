import React, { ReactElement } from 'react';

import Surface from './generic/Surface';
import Button from './generic/Button';

import Navbar from './Navbar';

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Surface flex={{ gap: 2 }}>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'standard-darker', rounded: 'pill', lift: 'shadow-depress' }}
        >
          Standard Darker
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'standard-dark', rounded: 'pill', lift: 'shadow-depress' }}
        >
          Standard Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'standard', rounded: 'pill', lift: 'shadow-depress' }}>
          Standard
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'standard-light', rounded: 'pill', lift: 'shadow-depress' }}
        >
          Standard Light
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'standard-lighter', rounded: 'pill', lift: 'shadow-depress' }}
        >
          Standard Lighter
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'prime-darker', rounded: 'pill', lift: 'shadow-depress' }}
        >
          prime Darker
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'prime-dark', rounded: 'pill', lift: 'shadow-depress' }}
        >
          prime Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'prime', rounded: 'pill', lift: 'shadow-depress' }}>
          prime
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'prime-light', rounded: 'pill', lift: 'shadow-depress' }}
        >
          prime Light
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'prime-lighter', rounded: 'pill', lift: 'shadow-depress' }}
        >
          prime Lighter
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'accent-darker', rounded: 'pill', lift: 'shadow-depress' }}
        >
          accent Darker
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'accent-dark', rounded: 'pill', lift: 'shadow-depress' }}
        >
          accent Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'accent', rounded: 'pill', lift: 'shadow-depress' }}>
          accent
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'accent-light', rounded: 'pill', lift: 'shadow-depress' }}
        >
          accent Light
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'accent-lighter', rounded: 'pill', lift: 'shadow-depress' }}
        >
          accent Lighter
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alter-darker', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alter Darker
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alter-dark', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alter Dark
        </Button>
        <Button flex={{ xs: 1, md: 3, lg: 5 }} theme={{ colors: 'alter', rounded: 'pill', lift: 'shadow-depress' }}>
          alter
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alter-light', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alter Light
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alter-lighter', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alter Lighter
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alt-accent-darker', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alt-accent Darker
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alt-accent-dark', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alt-accent Dark
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alt-accent', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alt-accent
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alt-accent-light', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alt-accent Light
        </Button>
        <Button
          flex={{ xs: 1, md: 3, lg: 5 }}
          theme={{ colors: 'alt-accent-lighter', rounded: 'pill', lift: 'shadow-depress' }}
        >
          alt-accent Lighter
        </Button>
      </Surface>
    </>
  );
};
export default App;
