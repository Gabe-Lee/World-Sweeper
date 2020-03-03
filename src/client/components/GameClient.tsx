import React, { useState } from 'react';
import { faBroom, faFlag } from '@fortawesome/free-solid-svg-icons';

import Surface from './generic/Surface';
import IconButton from './generic/IconButton';
import Button from './generic/Button';
import Icon from './generic/Icon';
import Text from './generic/Text';

import { gameButtonCss, gameClientCss, flagButtonCss, sweepButtonCss } from './GameClient.style';

export default function GameClient(): JSX.Element {
  return (
    <Surface name="GameClient" css={gameClientCss}>
      LOADING...
      <IconButton name="SweepButton" left buttonSize="4.5rem" iconSize="2.5rem" css={sweepButtonCss} icon={faBroom} />
      <IconButton name="FlagButton" left buttonSize="4.5rem" iconSize="2.5rem" css={flagButtonCss} icon={faFlag} />
    </Surface>
  );
}
