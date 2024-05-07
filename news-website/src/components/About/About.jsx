import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="../../../news1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="../../../news2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="../../../news3.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
