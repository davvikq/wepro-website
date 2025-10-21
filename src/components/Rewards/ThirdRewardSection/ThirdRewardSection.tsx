import Container from '../../Container/Container'
import styles from './ThirdRewardSection.module.css'

const ThirdRewardSection = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<div className={styles.left__content}>
						<h3 className={styles.title}>Обменивай монеты в центре призов</h3>
						<img src='https://wepro3.uz/public/images/new-3.webp' alt='Image' />
					</div>

					<div className={styles.right__content}>
						<img
							src='https://wepro3.uz/public/images/new-prizes-center.webp'
							alt='Phone image'
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default ThirdRewardSection
