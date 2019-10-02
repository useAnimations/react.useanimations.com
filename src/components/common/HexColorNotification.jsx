import React from 'react';
import { Notification } from 'react-notification';

const HexColorNotification = ({ isActive, coppiedValue }) => (
  <Notification isActive={isActive} message={coppiedValue} title="Coppied:" />
);

export default HexColorNotification;
