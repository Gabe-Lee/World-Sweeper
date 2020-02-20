/* eslint-disable react-hooks/rules-of-hooks */
// @ts-check
import { useSelector, useDispatch } from 'react-redux';

/** @typedef {import('./redux/store.js').TStore} TStore */

/**
 * Wrapper for React's useSelector() function
 *
 * Infers store type based on the return value of the root reducer
 * @param {(store: TStore) => TStore[keyof TStore]} storeSelector
 */
export function select(storeSelector) {
  return useSelector(storeSelector);
}

export const dispatch = useDispatch();
