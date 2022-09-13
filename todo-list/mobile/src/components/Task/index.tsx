import React, { useState } from 'react';
import { Text } from './styled';

interface Props {
  task: string;
}

export const Task = ({ task }: Props) => {
  const [text, setText] = useState(task);
  return (
    <Text
      autoCapitalize="none"
      autoCorrect={false}
      value={text}
      onChangeText={setText}
    />
  );
};
