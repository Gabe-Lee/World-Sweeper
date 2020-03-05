import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { faBroom, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { Store } from '../../redux/store';
import Surface from '../generic/Surface';
import IconButton from '../generic/IconButton';
import GameView, { TILE_SIZE } from './GameView';

import { gameButtonCss, gameClientCss, flagButtonCss, sweepButtonCss } from './GameClient.style';

const gameView = new GameView();

export default function GameClient(): JSX.Element {
  const [canvasElement, setCanvasElement] = useState(null);
  const { window } = useSelector((store: Store) => store.system);

  useEffect(() => {
    gameView.app.renderer.resize(window.width, window.height);
  }, [window]);
  useEffect(() => {
    document.getElementById('GameClient')?.appendChild(gameView.view);
  }, []);

  return (
    <Surface name="GameClient" id="GameClient" css={gameClientCss}>
      LOADING...
      <IconButton name="SweepButton" left buttonSize="4.5rem" iconSize="2.5rem" css={sweepButtonCss} icon={faBroom} />
      <IconButton name="FlagButton" left buttonSize="4.5rem" iconSize="2.5rem" css={flagButtonCss} icon={faFlag} />
    </Surface>
  );
}
