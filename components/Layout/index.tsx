import React from 'react';
import classnames from 'classnames';
import styles from './Layout.module.css';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className }) => {
  const classes = classnames(styles.layout, className);
  return (
    <div className={classes}>
      {children}
    </div>
  )
};

export default Layout