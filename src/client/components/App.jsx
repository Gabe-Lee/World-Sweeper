/* eslint-disable react-hooks/exhaustive-deps */
// @ts-check
/* eslint-env browser */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import cascade from './generic/styles/cascade';

import { setWindowSize } from '../redux/actions/system';
import { main, body, normalize } from './App.style';
import Navbar from './Navbar';
// import GameClient from './GameClient';

const useStyles = createUseStyles({
  '@global': cascade(normalize, body),
  Main: main,
});

const App = () => {
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
};
export default App;
