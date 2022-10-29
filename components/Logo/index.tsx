import Image from 'next/image';
import React from 'react';

import styles from './Logo.module.css';
import logo from '../../public/images/logo.jpeg';
import classNames from 'classnames';

type LogoProps = {
	variant?: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ variant = 'small' }) => {
	const variantClass = variant === 'small' ? styles.logoSmall : styles.logoLarge;

	return (
		<Image src={logo} className={classNames(styles.logo, variantClass)} alt="A blonde with closed eyes and profile pose" />
	)
}

export default Logo;