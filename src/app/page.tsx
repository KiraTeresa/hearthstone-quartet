import styles from './page.module.css';
import Link from 'next/link';
import { headers } from 'next/headers';

import CardV1Component from '@/app/components/card/card-v1/card-v1.component';
import ButtonComponent from '@/app/components/buttons/button.component';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>Start Game</p>
                <div>Hearthstone Quartet</div>
            </div>

            <div className={styles.center}>
                <p>Hearthstone the quartet card game</p>
                <img src='https://logos-world.net/wp-content/uploads/2021/02/Hearthstone-Logo.png'
                    alt='Hearthstone Logo' width="60" height="40" />
                <ButtonComponent />
            </div>
            <CardV1Component />

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
                    href="/cards"
                    className={styles.gridElement}
                >
                    <h2>
                        Cards <span>-&gt;</span>
                    </h2>
                    <p>Thinking about a page to display some cards.</p>
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
