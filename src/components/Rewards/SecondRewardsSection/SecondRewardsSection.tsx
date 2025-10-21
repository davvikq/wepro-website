import Container from '../../Container/Container'
import styles from './SecondRewardsSection.module.css'

const SecondRewardsSection = () => {
	return (
		<div className={styles.section}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<div className={styles.left__content}>
						<img
							src='https://wepro3.uz/public/images/new-2.webp'
							alt='Phone image'
						/>
					</div>

					<div className={styles.right__content}>
						<h3 className={styles.title}>
							Попади в топ и забирай крутые призы
						</h3>
						<img
							src='https://wepro3.uz/public/images/new-prizes.webp'
							alt='Image'
						/>
						<button className={styles.button}>Оставить заявку</button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default SecondRewardsSection
