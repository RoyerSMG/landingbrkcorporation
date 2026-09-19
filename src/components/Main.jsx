import { useState } from "react";

import slider from '../assets/images/slider-inicio.png';
import mision from '../assets/images/mision.webp';
import vision from '../assets/images/vision.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import OperationCard from './OperationCard';
import { operations } from '../data/operations';

import OperationModal from "./OperationModal";
import CoverageMap from "./maps/CoverageMap";
import CoverageSection from "./maps/CoverageSection";
import Hero from "./hero/Hero";

export const Main = () => {
    const [selectedOperation, setSelectedOperation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDetail = (operation) => {
        setSelectedOperation(operation);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className="pt-16">
            <Hero/>

            <section 
                id="operaciones"
                data-aos="fade-up"
            >
                <div className="w-4/5 max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold">Nuestras Operaciones</h2>
                    <div className="container-operations flex flex-wrap justify-center mt-4">
                        {
                            operations.map(operation => (
                                <OperationCard
                                    key={operation.id}
                                    operation={operation}
                                    onDetail={handleDetail}
                                />
                            ))
                        }

                        {/* <div className="operation-card">
                            <div className="operation-card-img">
                                <img src={ejemplo} alt="ejemplo" />
                            </div>
                            <div className="operation-card-content">
                                <h3>Alarma Principal</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing, elit ornare vel imperdiet vehicula magna bibendum, habitasse suscipit phasellus felis semper. Viverra faucibus aenean nostra elementum lacus molestie fermentum massa pulvinar, scelerisque non vulputate et in justo vestibulum nam.
                                </p>
                                <button className="btn-detalle">Ver más</button>
                            </div>
                        </div>
                        <div className="operation-card">
                            <div className="operation-card-img">
                                <img src={ejemplo} alt="ejemplo" />
                            </div>
                            <div className="operation-card-content">
                                <h3>Alarma Soporte</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing, elit ornare vel imperdiet vehicula magna bibendum, habitasse suscipit phasellus felis semper. Viverra faucibus aenean nostra elementum lacus molestie fermentum massa pulvinar, scelerisque non vulputate et in justo vestibulum nam.
                                </p>
                                <button className="btn-detalle">Ver más</button>
                            </div>
                        </div>
                        <div className="operation-card">
                            <div className="operation-card-img">
                                <img src={ejemplo} alt="ejemplo" />
                            </div>
                            <div className="operation-card-content">
                                <h3>Videoverificación</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing, elit ornare vel imperdiet vehicula magna bibendum, habitasse suscipit phasellus felis semper. Viverra faucibus aenean nostra elementum lacus molestie fermentum massa pulvinar, scelerisque non vulputate et in justo vestibulum nam.
                                </p>
                                <button className="btn-detalle">Ver más</button>
                            </div>
                        </div>
                        <div className="operation-card">
                            <div className="operation-card-img">
                                <img src={ejemplo} alt="ejemplo" />
                            </div>
                            <div className="operation-card-content">
                                <h3>Operaciones Especiales</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing, elit ornare vel imperdiet vehicula magna bibendum, habitasse suscipit phasellus felis semper. Viverra faucibus aenean nostra elementum lacus molestie fermentum massa pulvinar, scelerisque non vulputate et in justo vestibulum nam.
                                </p>
                                <button className="btn-detalle">Ver más</button>
                            </div>
                        </div>
                        <div className="operation-card">
                            <div className="operation-card-img">
                                <img src={ejemplo} alt="ejemplo" />
                            </div>
                            <div className="operation-card-content">
                                <h3>Puerta 5</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing, elit ornare vel imperdiet vehicula magna bibendum, habitasse suscipit phasellus felis semper. Viverra faucibus aenean nostra elementum lacus molestie fermentum massa pulvinar, scelerisque non vulputate et in justo vestibulum nam.
                                </p>
                                <button className="btn-detalle">Ver más</button>
                            </div>
                        </div>
                        <div className="operation-card">
                            <div className="operation-card-img">
                                <img src={ejemplo} alt="ejemplo" />
                            </div>
                            <div className="operation-card-content">
                                <h3>ATM</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing, elit ornare vel imperdiet vehicula magna bibendum, habitasse suscipit phasellus felis semper. Viverra faucibus aenean nostra elementum lacus molestie fermentum massa pulvinar, scelerisque non vulputate et in justo vestibulum nam.
                                </p>
                                <button className="btn-detalle">Ver más</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section 
                id="empresa"
            >
                <div className="w-4/5 max-w-7xl mx-auto">
                    <h2 style={{ marginBottom: '10px' }} data-aos="fade-up">Nuestra Empresa</h2>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 15000, disableOnInteraction: false }}
                        loop={true}
                        className="mt-4 w-full h-full"
                        data-aos="fade-up"
                    >
                        <SwiperSlide>
                            <div className="empresa-card flex flex-row items-center">
                                <div className="empresa-card-img w-1/2">
                                    <img src={mision} alt="Misión" className="w-full h-full rounded-lg" />
                                </div>
                                <div className="empresa-card-content w-1/2">
                                    <h3 className="text-xl font-bold mb-2">Misión</h3>
                                    <p>
                                        Transformar datos en información para la toma de decisiones estratégicas, integrando tecnología, análisis de riesgos, estadísticas de comportamiento y el talento humano especializado. Contribuyendo asi a la seguridad, continuidad y crecimiento sostenible de la organización.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="empresa-card flex flex-row items-center">
                                <div className="empresa-card-img w-1/2">
                                    <img src={vision} alt="Visión" className="w-full h-full rounded-lg" />
                                </div>
                                <div className="empresa-card-content w-1/2">
                                    <h3 className="text-xl font-bold mb-2">Visión</h3>
                                    <p>
                                        Consolidarnos como la principal Central de Inteligencia y Gestión de Riesgos de la industria, referente en innovación, anticipación de amenazas y fortalecimiento de la resiliencia organizacional.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="operational-staff">
                        <div className="operational-staff-header" data-aos="fade-up">
                            <h3>Personal Operativo</h3>
                            <p>
                                Nuestro talento humano especializado para la operación
                                y gestión de la seguridad.
                            </p>
                        </div>

                        <div className="kpi-grid" data-aos="fade-up">
                            {/* OPERADORES */}
                            <div
                                className="staff-kpi"
                                data-tooltip="Profesionales encargados del monitoreo y gestión de eventos en tiempo real."
                            >
                                <div className="kpi-icon">
                                    👤
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">
                                        Operadores
                                    </span>
                                    <strong className="kpi-value">
                                        28
                                    </strong>
                                </div>
                                <span className="kpi-tooltip">
                                    Personal encargado del monitoreo continuo,
                                    gestión de alarmas y atención de eventos críticos.
                                </span>
                            </div>

                            {/* TECNICOS */}
                            <div className="staff-kpi">
                                <div className="kpi-icon">
                                    🔧
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">
                                        Técnicos
                                    </span>
                                    <strong className="kpi-value">
                                        4
                                    </strong>
                                </div>
                                <span className="kpi-tooltip">
                                    Personal técnico especializado en soporte,
                                    mantenimiento y operación de sistemas tecnológicos.
                                </span>
                            </div>

                            {/* COORDINADORES */}
                            <div className="staff-kpi">
                                <div className="kpi-icon">
                                    👔
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">
                                        Coordinadores
                                    </span>
                                    <strong className="kpi-value">
                                        4
                                    </strong>
                                </div>
                                <span className="kpi-tooltip">
                                    Responsables de coordinar equipos operativos,
                                    supervisar procesos y garantizar la continuidad
                                    de la operación.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cobertura" data-aos="fade-up">
                <div className="w-4/5 max-w-7xl mx-auto">
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Cobertura Nacional</h2>

                    <CoverageSection />

                </div>
            </section>
            <OperationModal
                operation={selectedOperation}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </main>
    )
}