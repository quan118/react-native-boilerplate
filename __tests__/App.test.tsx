/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const sleep = (ms: number) => new Promise(resolve => setTimeout(() => resolve(true), ms));

it('renders correctly', async () => {
  renderer.create(<App />);

  await sleep(10); // work around for this issue: https://github.com/react-navigation/react-navigation/issues/10943
});
