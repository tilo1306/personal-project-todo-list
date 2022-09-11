import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styled';

export const Input: React.FunctionComponent<TextInputProps> = ({
  ...otherProps
}) => {
  return <Container {...otherProps} />;
};
