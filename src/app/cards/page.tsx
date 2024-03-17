import CardV1Component from "@/app/components/card/card-v1/card-v1.component";
import styles from './cards-page.module.scss';

const CardsPage = () => {
	return (
		<>
			<h2 className={styles.headline}>Cards</h2>
			<div className={styles.mainWrapper}>
				<CardV1Component/>
				<CardV1Component/>
				<CardV1Component/>
				<CardV1Component/>
				<CardV1Component/>
				<CardV1Component/>
			</div>
		</>
	)
}

export default CardsPage;
