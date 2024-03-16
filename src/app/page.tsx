import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>Start Game</p>
				<div>Hearthstone Quartet</div>
			</div>

			<div className={styles.center}>
				<p>Hearthstone the quartet card game</p>
			</div>

			<div className={styles.grid}>
				<Link
					href="/rules"
					className={styles.gridElement}
				>
					<h2>
						Rules <span>-&gt;</span>
					</h2>
					<p>Clicking here might show you the rules of the game in the future.</p>
				</Link>

				<Link
					href="/highscore"
					className={styles.gridElement}
				>
					<h2>
						Highscore <span>-&gt;</span>
					</h2>
					<p>Maybe there will be a leaderboard someday.</p>
				</Link>

				<Link
					href="/"
					className={styles.gridElement}
				>
					<h2>
						ABC <span>-&gt;</span>
					</h2>
					<p>A placeholder to a possible future implementation.</p>
				</Link>

				<Link
					href="/"
					className={styles.gridElement}
				>
					<h2>
						XYZ <span>-&gt;</span>
					</h2>
					<p>Another placeholder for another may or may not feature.</p>
				</Link>
			</div>
		</main>
	);
}
