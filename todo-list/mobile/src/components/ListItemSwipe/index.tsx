import React from 'react';
import { IconDelete, ItemSwipe } from './styled';

export const ListItemSwipe = (props: { onDelete: any }) => {
  return (
    <ItemSwipe onPress={props.onDelete} underlayColor="#FF3333">
      <IconDelete />
    </ItemSwipe>
  );
};
