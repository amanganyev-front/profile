"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Projects.module.scss";
import Project from "./ui/Project";
import { PROJECTSLIST } from "./varibales";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

export default function Projects() {
    return (
        <div className={styles.Projects}>
            <h2>Projects</h2>
            <Swiper
                className={styles.swiper}
                spaceBetween={-156}
                centeredSlides
                effect={"coverflow"}
                slidesPerView={"auto"}
                grabCursor
                loop
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow]}
            >
                {PROJECTSLIST.map((src, i) => (
                    <SwiperSlide
                        key={i}
                        className={styles.slide}
                    >
                        <Project {...src} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
