import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import Poster from "../../../assets/img/poster_video.png";
import styles from "./SectionFive.module.css";

import { useAudio } from "../../../hooks/useAudio";
import ReactPlayer from "react-player/lazy";
import Gallery from "../../Gallery/Gallery";

import { img_gallery_data } from "../../../data/image";

function SectionFive() {
  const [playing, toggle] = useAudio();

  return (
    <section className={styles.Section_Five}>
      <img src={Logo} alt="Logo" width={150} height={150} loading="lazy" />

      <h3 className={styles.Section_Five__title} data-text="Our Gallery">
        Our Gallery
      </h3>
      <div className={styles.Section_Five__mainContent}>
        <div className={styles.Section_Five__video}>
          <ReactPlayer
            url="https://youtu.be/XjCxkMKhEig"
            onPlay={() => toggle(false)}
            onPause={() => toggle(true)}
            onEnded={() => toggle(true)}
            controls={true}
            light={Poster}
            width="100%"
          />
        </div>

        <Gallery galleryImages={img_gallery_data} />
      </div>
    </section>
  );
}
export default SectionFive;
