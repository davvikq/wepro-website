import styles from './PerksSection.module.css'
import Container from '../Container/Container'

const PerksSection = () => {
	const features = [
		{
			icon: 'https://wepro3.uz/public/images/Group%2061.svg',
			title: 'Мощные компьютеры',
			description:
				'Оборудованные классы для комфортного образовательного процесса.',
		},
		{
			icon: 'https://wepro3.uz/public/images/Group%20158.svg',
			title: 'Лучшие специалисты',
			description:
				'Мы гордимся тем, что работаем с профессионалами, которые делают процесс обучения увлекательным и эффективным.',
		},
		{
			icon: 'https://wepro3.uz/public/images/Group%20161.svg',
			title: 'Мобильное приложение',
			description:
				'Войдите в личный кабинет через веб-приложение для студентов.',
		},

		{
			icon: 'https://wepro3.uz/public/images/Group%2058.svg',
			title: 'Бесплатный коворкинг',
			description:
				'Приходите в свободное время и выполняйте задания в нашем центре. Доступно бесплатно для всех учащихся.',
		},
		{
			icon: 'https://wepro3.uz/public/images/Group%20167.svg',
			title: 'Призы за обучение',
			description:
				'Получайте такие призы как Яндекс Станция, Apple AirPods или Mi Band за высокие оценки.',
		},
	]

	return (
		<Container className={styles.container}>
			<h1 className={styles.title}>
				Идеальные условия для твоего
				<br />
				<span>успешного образования</span>
			</h1>

			<div className={styles.featuresGrid}>
				{features.map((feature, index) => (
					<div key={index} className={styles.featureCard}>
						<div className={styles.featureIcon}>
							{feature.icon.startsWith('http') ? (
								<img
									src={feature.icon}
									alt={feature.title}
									className={styles.iconImage}
								/>
							) : (
								<span>{feature.icon}</span>
							)}
						</div>

						<dd>
							<h3 className={styles.featureTitle}>{feature.title}</h3>
							<p className={styles.featureDescription}>{feature.description}</p>
						</dd>
					</div>
				))}
			</div>
		</Container>
	)
}

export default PerksSection
