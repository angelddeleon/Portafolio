import { useState, useEffect } from 'react';

//import './ProjectCard.css'


export function ProjectCard ({images, titleProject, description}) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Cambiar la imagen cada segundo
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, [images.length]);

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="project-card">
            <img src={images[currentImageIndex]} alt={titleProject} onClick={openModal} />
            <div className="project-card-text">
                <h3>{titleProject}</h3>
                <p>{description}</p>
            </div>
            <div className="project-card-buttons">
                <a className='card-button view' href="#">View</a>
                <a className='card-button code' href="#">Code</a>
            </div>

            {/* Modal para mostrar la imagen completa */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <img src={images[currentImageIndex]} alt={titleProject} className="modal-image" />
                </div>
            )}
        </div>
    );

}