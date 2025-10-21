import styles from './Stats.module.css'

export default function Stats() {
	const stats = [
		{ value: '3500+', label: 'выпускников за 4 года работы' },
		{ value: '76.8%', label: 'студентов находят работу после обучения' },
		{ value: '46.8%', label: 'начинают зарабатывать во время обучения' },
	]

	return (
		<div className={styles.stats}>
			{stats.map((item, i) => (
				<div key={i} className={styles.statItem}>
					<p className={styles.value}>{item.value}</p>
					<p className={styles.label}>{item.label}</p>
				</div>
			))}
		</div>
	)
}
