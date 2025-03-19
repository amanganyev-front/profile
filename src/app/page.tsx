"use client";

import { AboutMe, Header, Main, Projects, Skills, Footer } from "@/widgets";
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
