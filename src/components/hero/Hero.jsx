import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import slider from "../../assets/images/slider-inicio.png";
import { capabilities } from "../../data/capabilities";
import CapabilityCard from "./CapabilityCard";

export default function Hero() {
    const capabilityGroups = [];
    
    for (let i = 0; i < capabilities.length; i++) {
        const group = [];
        for (let j = 0; j < 4; j++) {
            group.push(
                capabilities[(i + j) % capabilities.length]
            );
        }
        capabilityGroups.push(group);
    }
    return (
        <section className="hero" id="inicio">
            <div
                className="hero-background"
                style={{
                    backgroundImage: `url(${slider})`
                }}
            />
            <div className="hero-overlay" />
            <div className="hero-content">
                <div className="hero-dashboard">
                    <h3>
                        Capacidades
                    </h3>
                    <div className="dashboard-grid">
                        {
                            <Swiper
                                direction="vertical"
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false
                                }}
                                speed={1000}
                                loop
                            >

                                {capabilityGroups.map((group, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="dashboard-grid">
                                            {group.map(capability => (
                                                <CapabilityCard
                                                    key={capability.id}
                                                    capability={capability}
                                                />
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        }
                    </div>
                </div>

                <div className="hero-info">
                    <h2>
                        CENTRO DE CONTROL
                        <br />
                        Y MONITOREO
                    </h2>
                    <p>
                        El Centro de Control y Monitoreo no es una central de alarmas; es una capacidad organizacional que integra tecnología, talento humano y gestión remota de riesgos para supervisar y operar los controles críticos que protegen las personas, los activos y la continuidad de las operaciones.
                    </p>
                    <div className="hero-buttons">
                        <a href="#operaciones">
                            <button className="btn-primary">Conocer más</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}