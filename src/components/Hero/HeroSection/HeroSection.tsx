import Header from '../Header/Header'
import Container from '../../Container/Container'
import styles from './HeroSection.module.css'
import Stats from '../Stats/Stats'
import CourseTags from '../CourseTags/CourseTags'

export default function HeroSection() {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<div className={styles.container}>
					<Header />
					<Container className={styles.container}>
						<h1 className={styles.title}>
							Авторские курсы от
							<br />
							специалистов
							<span> IT & Digital</span>
						</h1>
						<Stats />
						<CourseTags />
					</Container>
				</div>
			</div>
			<video
				autoPlay
				muted
				loop
				playsInline
				poster='/images/main.webp'
				className={styles.video}
			>
				<source src='/video/home.webm' type='video/webm' />
				<source src='/video/home.mp4' type='video/mp4' />
			</video>
		</section>
	)
}
