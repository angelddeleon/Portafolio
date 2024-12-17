import './Project.css'
import ProjectImage from '../../assets/projectImage.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Images

import img1 from '../../assets/imageProjects/autowork1.png';
import img2 from '../../assets/imageProjects/autowork2.png';
import img3 from '../../assets/imageProjects/autowork3.png';
import img4 from '../../assets/imageProjects/autowork4.png';


//Technologies Icon

import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { useLanguage } from '../../hooks/LanguageContext';

import { ProjectCard } from './ProjectCard/ProjectCard';

export function ProjectSection() {
    const { language } = useLanguage();

    const indexLanguage = language === 'en' ? 0 : 1 
 
    let textLanguage = [{h1 : 'Projects' } , {h1 : 'Proyectos' }]

    

    const projects = [
        [{
            id:1,
            images: [img1, img2, img3, img4],
            nameProject: "AutoWork",
            description: "Work on a web application for automotive workshops improving its Administrator, Customer and Mechanic interface. Using UX design and Responsive Design Principles. I was part of the backend using the sqlLite database, creating the API and adding functions to it",
            icons: {
                tecnologia: ['HTML', 'CSS', 'JavaScript', 'NodeJs'],
                icons: [faHtml5, faCss, faJs, faNode]
            }
        }],
        [{
            id:1,
            images: [img1, img2, img3, img4],
            nameProject: "AutoWork",
            description: "Trabaje en una aplicacion web para talleres automotrices mejorando su interfaz de Administrador, Cliente y Mecanicos. Usando Principios de UX design y Responsive Design. Fui parte del backend usando la base de datos sqlLite, creando la API y agregando funciones a esta",
            icons: {
                tecnologia: ['HTML', 'CSS', 'JavaScript', 'NodeJs'],
                icons: [faHtml5, faCss, faJs, faNode]
            }
        }]
    ]
    


    return(
        <section  className="project-section">
            <h2 id='project'>{textLanguage[indexLanguage].h1}</h2>

            <div className='project-section-cards'>

                {

                    projects[indexLanguage].map((project) =>{
                        return(
                            <ProjectCard 
                                key={project.id} 
                                images={project.images} 
                                titleProject={project.nameProject} 
                                description={project.description} 
                                icons={project.icons} 
                            />
                        )
                        
                    })
                    
                }

                <div className="project-card">
                    <div className='project-card-image'>
                        <img src={ProjectImage} alt="" />
                    </div>
                    
                    <div className="project-card-content">

                        <div className="project-card-text">
                            <h3>Google Project</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, explicabo. Labore quam odit laborum officiis! Blanditiis amet sequi ipsum, porro, molestias tempora, minus eveniet dolore exercitationem </p>
                        </div>

                        <div className="icons">
                            <FontAwesomeIcon className='iconTechnology' icon={faHtml5} />
                            <FontAwesomeIcon className='iconTechnology' icon={faCss} />
                            <FontAwesomeIcon className='iconTechnology' icon={faJs} />
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

                 <div className="project-card">
                    <img src={ProjectImage} alt="" />
                    <div className="project-card-text">
                        <h3>Google Project</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, explicabo. Labore quam odit laborum officiis! Blanditiis amet sequi ipsum, porro, molestias tempora, minus eveniet dolore exercitationem </p>
                    </div>

                    <div className="project-card-buttons">
                        <a className='card-button view' href="#">View</a>
                        <a className='card-button code' href="#">Code</a>
                    </div>
                 </div>


                 <div className="project-card">
                    <img src={ProjectImage} alt="" />
                    <div className="project-card-text">
                        <h3>Google Project</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, explicabo. Labore quam odit laborum officiis! Blanditiis amet sequi ipsum, porro, molestias tempora, minus eveniet dolore exercitationem </p>
                    </div>

                    <div className="project-card-buttons">
                        <a className='card-button view' href="#">View</a>
                        <a className='card-button code' href="#">Code</a>
                    </div>
                 </div>

            </div>

        </section>
    )
}