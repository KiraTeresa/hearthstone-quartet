import styles from './card-v1.module.scss';

const CardV1Component = () => {
	return (
		<div className={styles.card}>
			<p className={styles.cost}>cost</p> {/* cost */}
			<p className={styles.rarity}>rarity</p> {/* rarity */}
			<div className={styles.image}>
				<div>image</div>
			</div> {/* image */}
			<p className={styles.name}>name</p> {/* name */}
			<div className={styles.text}>
				<p>text</p>
			</div> {/* text */}
			<p className={styles.attack}>attack</p> {/* attack */}
			<p className={styles.health}>health</p> {/* health */}
		</div>
	)
}

export default CardV1Component;
