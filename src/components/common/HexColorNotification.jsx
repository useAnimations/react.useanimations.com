import React from 'react';
import { Notification } from 'react-notification';

const HexColorNotification = ({ isActive, copiedValue }) => (
  <Notification isActive={isActive} message={copiedValue} title="Copied:" />
);

export default HexColorNotification;
