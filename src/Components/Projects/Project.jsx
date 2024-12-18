import './Project.css'
import ProjectImage from '../../assets/projectImage.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Images

import img1 from '../../assets/imageProjects/autowork1.webp';
import img2 from '../../assets/imageProjects/autowork2.webp';
import img3 from '../../assets/imageProjects/autowork3.webp';
import img4 from '../../assets/imageProjects/autowork4.webp';


//Technologies Icon

import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'


import { useLanguage } from '../../hooks/LanguageContext';

import { ProjectCard } from './ProjectCard/ProjectCard';

export function ProjectSection() {
    const { language } = useLanguage();

    const indexLanguage = language === 'en' ? 0 : 1 
 
    let textLanguage = [{h1 : 'Projects' } , {h1 : 'Proyectos' }]

    const projects = [
        {
            id:1,
            images: [img1, img2, img3, img4],
            nameProject: "AutoWork",
            descriptions: [
                'I worked on a web application for automotive workshops, improving the interfaces for Administrators, Customers, and Mechanics. Utilized UX design and responsive design principles. I was part of the backend team, using the SQLite database. I created the API and added functions to it.',
                'Trabajé en una aplicación web para talleres automotrices, mejorando las interfaces de Administrador, Cliente y Mecánicos. Utilicé principios de diseño UX y diseño responsivo. Fui parte del equipo de backend, utilizando la base de datos SQLite, creando la API y agregando funciones a esta.'
            ],
            icons: {
                tecnologia: ['HTML', 'CSS', 'JavaScript', 'NodeJs'],
                icons: [faHtml5, faCss, faJs, faNode]
            },
            links: ['#', 'https://github.com/angelddeleon/Gestion_Talleres']
        }
    ]
    


    return(
        <section  className="project-section">
            <h2 id='project'>{textLanguage[indexLanguage].h1}</h2>

            <div className='project-section-cards'>

                {

                    projects.map((project) =>{
                        return(
                            <ProjectCard 
                                key={project.id} 
                                images={project.images} 
                                titleProject={project.nameProject} 
                                descriptions={project.descriptions} 
                                icons={project.icons} 
                                links={project.links}
                            />
                        )
                        
                    })
                    
                }

                

            </div>

        </section>
    )
}