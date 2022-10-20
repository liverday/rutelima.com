/* eslint-disable react/display-name */
import React, { ComponentType, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children?: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => <>{children}</>

const withResponsive = (Component: ComponentType<Props>): React.FC<Props> => {
  return (props) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true)
    }, []);

    return isClient ? <Component {...props} /> : null;
  }
}

export const GreaterThanSmallMobile: React.FC<Props> = withResponsive((props) => {
  const isGreaterThanSmallMobile = useMediaQuery({ minWidth: 400 });
  return wrap(isGreaterThanSmallMobile, props)
});

export const GreaterThanDesktop: React.FC<Props> = withResponsive((props) => {
  const isGreaterThanDesktop = useMediaQuery({ minWidth: 992 })
  return wrap(isGreaterThanDesktop, props)
});

export const IsTablet: React.FC<Props> = withResponsive((props) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return wrap(isTablet, props)
});

export const GreaterThanTablet: React.FC<Props> = withResponsive((props) => {
  const isGreaterThanTablet = useMediaQuery({ minWidth: 768 })
  return wrap(isGreaterThanTablet, props)
})

export const LessThanMobile: React.FC<Props> = withResponsive((props) => {
  const isLessThanMobile = useMediaQuery({ maxWidth: 767 })
  return wrap(isLessThanMobile, props)
})

export const LessThanSmallMobile: React.FC<Props> = withResponsive((props) => {
  const isLessThanSmallMobile = useMediaQuery({ maxWidth: 399 })
  return wrap(isLessThanSmallMobile, props)
})

const wrap = (bool: boolean, props: Props) => {
  return bool ? Wrapper(props) : null
}