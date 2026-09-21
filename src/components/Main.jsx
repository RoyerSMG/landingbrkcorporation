import { useState } from "react";
import Modal from "./common/Modal";
import mision from '../assets/images/mision.webp';
import vision from '../assets/images/vision.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import OperationCard from './OperationCard';
import { operations } from '../data/operations';

import OperationModal from "./OperationModal";
import CoverageSection from "./maps/CoverageSection";
import Hero from "./hero/Hero";

import { staffData } from "../data/staffData";

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

    const [selectedStaff, setSelectedStaff] = useState(null);

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
                        <div
                            className="operational-staff-header"
                            data-aos="fade-up"
                        >
                            <h3>
                                Personal Operativo
                            </h3>
                            <p>
                                Nuestro talento humano especializado para la operación
                                y gestión de la seguridad.
                            </p>
                        </div>

                        {/* KPI */}
                        <div
                            className="kpi-grid"
                            data-aos="fade-up"
                        >
                            {staffData.map((staff) => (
                                <div
                                    key={staff.id}
                                    className="staff-kpi"
                                    data-tooltip={staff.description}
                                    onClick={() => setSelectedStaff(staff)}
                                >
                                    <div className="kpi-icon">
                                        {staff.icon}
                                    </div>
                                    <div className="kpi-info">
                                        <span className="kpi-label">
                                            {staff.title}
                                        </span>
                                        <strong className="kpi-value">
                                            {staff.value}
                                        </strong>
                                    </div>
                                    <span className="kpi-tooltip">
                                        {staff.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MODAL PERSONAL */}
                    <Modal
                        isOpen={!!selectedStaff}
                        onClose={() => setSelectedStaff(null)}
                        width="900px"
                    >
                        {selectedStaff && (
                            <>
                                <div 
                                    className="modal-body"
                                    style={{ 
                                        padding: '10px', 
                                        background: 'var(--background-primary)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <h2 style={{ color: 'white' }}>
                                        {selectedStaff.title}
                                    </h2>
                                    {/* <p>
                                        {selectedStaff.description}
                                        </p> */}
                                </div>
                                <img
                                    src={selectedStaff.image}
                                    alt={selectedStaff.title}
                                    className="modal-image"
                                    style={{ height: '550px' }}
                                />
                            </>
                        )}
                    </Modal>
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