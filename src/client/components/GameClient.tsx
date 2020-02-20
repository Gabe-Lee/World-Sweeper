import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { Store } from '../redux/store';

import Surface from './generic/Surface';
import Button from './generic/Button';
import Icon from './generic/Icon';
import Text from './generic/Text';

import './GameClient.scss';

const loadingSplash: () => JSX.Element = () => (
  <Surface flex={{ gap: 2, xs: 'min' }}>
    <Text flex={{ xs: 1 }} theme={{ fontSize: '2x' }}>
      LOADING
    </Text>
    <Icon flex={{ xs: 'min' }} theme={{ fontSize: '2x' }} icon={faCompactDisc} spin />
    <Icon flex={{ xs: 'min' }} theme={{ fontSize: '2x' }} icon={faCompactDisc} spin />
    <Icon flex={{ xs: 'min' }} theme={{ fontSize: '2x' }} icon={faCompactDisc} spin />
    <Icon flex={{ xs: 'min' }} theme={{ fontSize: '2x' }} icon={faCompactDisc} spin />
  </Surface>
);

const GameClient: () => JSX.Element = () => {
  const { clientLoaded } = useSelector((store: Store) => store.system);
  return (
    <Surface id="game-client" theme={{ colors: 'standard-darker' }}>
      {clientLoaded ? '' : loadingSplash()}
    </Surface>
  );
};
export default GameClient;
