import React from 'react';

import {Container} from './styles';

interface Props {
  children: any;
}

export default function Badge(props: Props) {
  return <Container>{props.children}</Container>;
}
