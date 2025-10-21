import Container from '../../Container/Container'
import styles from './FirstRewardsSection.module.css'

const FirstRewardsSection = () => {
	const steps = [
		{
			icon: 'https://wepro3.uz/public/images/new-login.svg',
			text: 'Войдите в аккаунт по номеру телефона',
		},
		{
			icon: 'https://wepro3.uz/public/images/new-attendance.svg',
			text: 'Просматривайте свои оценки и посещаемость',
		},
		{
			icon: 'https://wepro3.uz/public/images/new-top.svg',
			text: 'Зарабатывайте монеты и продвигайтесь в ТОП',
		},
		{
			icon: 'https://wepro3.uz/public/images/new-shop.svg',
			text: 'Обменивайте монеты на призы',
		},
		{
			icon: 'https://wepro3.uz/public/images/new-heart.svg',
			text: 'Участвуйте в раздаче ценных призов',
		},
	]

	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<h1 className={styles.title}>
					Теперь мы
					<br />
					<span>школа нового поколения</span>
				</h1>

				<div className={styles.content}>
					<div className={styles.right__content}>
						{steps.map((step, index) => (
							<div key={index} className={styles.stepWrapper}>
								<div className={styles.step}>
									<div className={styles.stepIcon}>
										{step.icon.startsWith('http') ? (
											<img
												src={step.icon}
												alt={step.text}
												className={styles.iconImage}
											/>
										) : (
											<span>Картинки нет</span>
										)}
									</div>
									<p className={styles.stepText}>{step.text}</p>
								</div>

								{index !== steps.length - 1 && (
									<hr className={styles.divider} />
								)}
							</div>
						))}
					</div>

					<div className={styles.left__content}>
						<img
							src='https://wepro3.uz/public/images/new-1.webp'
							alt='Phone image'
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default FirstRewardsSection
