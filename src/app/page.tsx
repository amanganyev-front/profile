"use client";

import { Header, Footer } from "@/widgets";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <main className={styles.Home}>
            <Header />
            {/* <Main /> */}
            {/* <AboutMe /> */}
            {/* <Projects /> */}
            {/* <Skills /> */}
            <Footer/>
        </main>
    );
}
