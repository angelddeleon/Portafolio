import './Project.css'
import ProjectImage from '../../assets/projectImage.png'

import img1 from '../../assets/imageProjects/autowork1.png';
import img2 from '../../assets/imageProjects/autowork2.png';
import img3 from '../../assets/imageProjects/autowork3.png';
import img4 from '../../assets/imageProjects/autowork4.png';



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
            description: "Hola"
        }
    ]
    


    return(
        <section  className="project-section">
            <h2 id='project'>{textLanguage[indexLanguage].h1}</h2>

            <div className='project-section-cards'>

                {

                    projects.map((project) =>{
                        return(
                            <ProjectCard key={project.id} images={project.images} titleProject={project.nameProject} description={project.description} />
                        )
                        
                    })
                    
                }

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