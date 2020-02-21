// // @ts-check
// import React, { useState, useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
// import { select, dispatch } from '../utils';

// import Surface from './generic/Surface';
// // import Button from './generic/Button';
// import Icon from './generic/Icon';
// import Text from './generic/Text';
// import canvas from './GameCanvas';

// import './GameClient.scss';

// /** @typedef {import('../redux/store').TStore} TStore */
// /**
//  * Renders loading splash elements before client has fully loaded
//  * @returns {JSX.Element} JSX.Element
//  */
// const loadingSplash = () => (
//   <Surface flex={{ gap: 2, xs: 'min' }}>
//     <Text flex={{ xs: 1 }} theme={{ fontSize: '2x' }}>
//       LOADING
//     </Text>
//     <Icon flex={{ xs: 'min' }} theme={{ fontSize: '2x' }} icon={faCompactDisc} spin />
//     <Icon flex={{ xs: 'min' }} theme={{ fontSize: '2x' }} icon={faCompactDisc} spin />
//     <Icon flex={{ xs: 'min' }} theme={{ fontSize: '2x' }} icon={faCompactDisc} spin />
//     <Icon flex={{ xs: 'min' }} theme={{ fontSize: '2x' }} icon={faCompactDisc} spin />
//   </Surface>
// );

// /**
//  * Renders Game Client
//  *
//  * Holds all react ui components
//  * as well as PixiJS viewport
//  * @returns {JSX.Element} JSX.Element
//  */
// const GameClient = () => {
//   const { clientLoaded } = select(store => store.system);
//   return (
//     <Surface id="game-client" theme={{ colors: 'standard-darker' }}>
//       {clientLoaded ? '' : loadingSplash()}
//       {canvas.view}
//     </Surface>
//   );
// };
// export default GameClient;
