import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

export default function app() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Routes />
    </>
  );
}
