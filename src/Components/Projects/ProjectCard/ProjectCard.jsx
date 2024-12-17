import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


import './ProjectCard.css'


export function ProjectCard ({images, titleProject, description, icons}) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Cambiar la imagen cada segundo
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);



    return (

        <div className="project-card">
            <div className='project-card-image'>
                <img src={images[currentImageIndex]} alt={titleProject} />
            </div>

            <div className="project-card-content">

                <div className="project-card-text">
                    <h3>{titleProject}</h3>
                    <p>{description}</p>
                </div>

                <div className="icons">
                    {
                        icons.tecnologia.map((nameTechnology, index) =>{
                            return(
                                <FontAwesomeIcon key={nameTechnology} title={nameTechnology} className='iconTechnology' icon={icons.icons[index]} />
                            )
                        })
                    }


                </div>

                <div className="project-card-buttons">
                    <a className='card-links view' href="#">
                        <FontAwesomeIcon className='iconLink' icon={faLink} />
                        <p>View</p>
                    </a>
                    <a className='card-links code' href="#">
                        <FontAwesomeIcon className='iconLink' icon={faCode} />
                        <p>Code</p>
                    </a>
                </div>
            </div>
        </div>
    );

}