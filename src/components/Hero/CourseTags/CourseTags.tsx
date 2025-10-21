import styles from './CourseTags.module.css'

export default function CourseTags() {
	const tags = [
		{ label: 'Бесплатная консультация', circle: false },
		{ label: 'Motion-дизайнер', circle: true },
		{ label: 'Дизайнер соцсетей', circle: false },
		{ label: 'Frontend-разработчик', circle: false },
		{ label: 'iOS/Android-разработчик', circle: false },
		{ label: 'React-разработчик', circle: false },
		{ label: 'Мобилограф PRO', circle: false },
		{ label: 'Интерьер-дизайнер', circle: false },
		{ label: 'Графический дизайнер', circle: false },
		{ label: 'SMM-специалист', circle: false },
		{ label: 'Компьютерная грамотность', circle: false },
	]

	return (
		<div className={styles.tags}>
			{tags.map((tag, i) => (
				<button
					key={i}
					className={`${styles.tag} ${i === 0 ? styles.active : ''}`}
				>
					{tag.circle && <span className={styles.circle}></span>}
					{tag.label}
				</button>
			))}
		</div>
	)
}
