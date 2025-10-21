import Container from '../../Container/Container'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.container}>
				<a href='#'>
					<div className={styles.logo}></div>
				</a>
				<nav className={styles.nav}>
					<a href='#' className={styles.link}>
						Главная
					</a>
					<a href='#' className={styles.link}>
						Курсы и цены
					</a>
					<a href='#' className={styles.link}>
						Запись в группу
					</a>
					<a href='#' className={styles.link}>
						Партнерам
					</a>
				</nav>

				<div className={styles.actions}>
					<span className={styles.lang}>RU</span>
					<a href='tel:+998781137005' className={styles.phone}>
						+998 78 113-70-05
					</a>
					<button className={styles.button}>Личный кабинет</button>
				</div>
			</Container>
		</header>
	)
}

export default Header
