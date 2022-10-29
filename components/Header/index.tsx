import React, { useMemo } from 'react';
import styles from './Header.module.css';
import Layout from '../Layout';
import Logo from '../Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

type MenuItem = {
	title: string
	href: string
}

const Header: React.FC = () => {
	const router = useRouter();

	const menuItems: MenuItem[] = useMemo(() => {
		return [
			{
				title: 'Home',
				href: '/'
			},
			// {
			// 	title: 'Serviços',
			// 	href: '/servicos'
			// },
			// {
			// 	title: 'Contato',
			// 	href: '/contato'
			// }
		]
	}, []);

	return (
		<header className={styles.container}>
			<Layout>
				<nav className={styles.navigation}>
					<Logo />

					<ul className={styles.menu}>
						{menuItems.map((item, id) => (
							<li key={id}
								className={classnames(styles.menuItem, router.asPath === item.href ? styles.menuItemActive : '')}>
									<Link href={item.href}>{item.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</Layout>
		</header>
	);
}

export default Header;
