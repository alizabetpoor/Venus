import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import React from 'react';
export const evilIconConstructor = (
  name: string,
  size: number,
  color: string,
): React.ReactNode => <EvilIcon name={name} size={size} color={color} />;
export const featherIconConstructor = (
  name: string,
  size: number,
  color: string,
): React.ReactNode => {
  return <FeatherIcon name={name} size={size} color={color} />;
};
export const fullNameConstructor = (
  firstName: string,
  lastName: string,
): string => {
  return firstName + ' ' + lastName;
};

export const adrressConstructor = (
  streetName: string,
  streetNumber: number,
  city: string,
  state: number,
  postcode: number,
): string => {
  const adrress =
    streetName +
    ', ' +
    streetNumber +
    ' ' +
    city +
    ',' +
    state +
    ' postcode: ' +
    postcode;
  return adrress;
};
