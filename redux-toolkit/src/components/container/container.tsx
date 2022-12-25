import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

import classes from './container.module.css';

const Card: FC<Props> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
