"use client";

import Image from "next/image";
import styles from "./Main.module.scss";

export default function Main() {
    return (
        <div className={styles.Main}>
            <div className={styles.mainInner}>
                <div>
                    <h1>Aman Ganyev</h1>
                    <p>
                        Interfaces that don&apos;t just work, but impress. I work at the intersection of creativity and
                        technology.
                    </p>
                </div>
                <button>Telegram</button>
                <Image
                    className={styles.cuteCat}
                    alt="cute-cat"
                    src="/cute-cat.svg"
                    width={1100}
                    height={1100}
                />
            </div>
        </div>
    );
}
