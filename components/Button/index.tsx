import React, { ButtonHTMLAttributes } from "react";
import classnames from "classnames";

import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant: 'primary' | 'accent';
}

const colorsMap: {
  [key in 'primary' | 'accent']: {
    background: string,
    text: string
  }
} = {
  primary: {
    background: 'var(--primary)',
    text: 'var(--primary-text-color)',
  },
  accent: {
    background: 'var(--accent)',
    text: 'var(--accent-text-color)'
  }
}

export const Button: React.FC<ButtonProps> = ({ children, variant, className, ...rest }) => {
  const { background, text } = colorsMap[variant];
  const classes = classnames(styles.button, className);

  return (
    <button className={classes} {...rest} style={{ backgroundColor: background, color: text}}>
      {children}
    </button>
  )
}