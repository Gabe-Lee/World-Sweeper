/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { cascade } from './generic/styles/utils';
import { setWindowSize } from '../redux/system/actions';
import { main, body, normalize } from './App.style';
import Navbar from './Navbar';
// import GameClient from './GameClient';

const useStyles = createUseStyles({
  '@global': cascade(normalize, body),
  Main: main,
});

export default function App(): JSX.Element {
  const dispatch = useDispatch();
  const style = useStyles();
  useEffect(() => {
    window.addEventListener('resize', () => dispatch(setWindowSize(window.innerWidth, window.innerHeight)));
  }, []);
  return (
    <main className={style.Main}>
      <Navbar />
    </main>
  );
}
