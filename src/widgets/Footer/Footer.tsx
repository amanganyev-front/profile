"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.footerNav}>
                <Link href="#main">Main</Link>
                <Link href="#aboutMe">About me</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#contacts">Contacts</Link>
            </div>
            <div className={styles.contacts}>
                <Link href="https://www.linkedin.com/in/aman-ganyev/" target="_blank">
                    <Image
                        alt="linkedin"
                        src={"/linkedin.png"}
                        width={100}
                        height={100}
                    />
                </Link>
                <Link href="https://github.com/amanganyev-front" target="_blank">
                    <Image
                        alt="github"
                        src={"/github.png"}
                        width={100}
                        height={100}
                    />
                </Link>
                <Link href="https://t.me/gnv_29" target="_blank">
                    <Image
                        alt="telegram"
                        src={"/telegram.png"}
                        width={100}
                        height={100}
                    />
                </Link>
                <Link href="mailto:ganyevaman7@gmail.com" target="_blank">
                    <Image
                        alt="gmail"
                        src={"/gmail.png"}
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
        </footer>
    );
}
