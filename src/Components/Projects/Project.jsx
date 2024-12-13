import './Project.css'
import ProjectImage from '../../assets/projectImage.png'
import { useLanguage } from '../../hooks/LanguageContext';

export function ProjectSection() {
    const { language, toggleLanguage } = useLanguage();

    const indexLanguage = language === 'en' ? 0 : 1 

    let textLanguage = [ {h1 : 'Projects' } , {h1 : 'Proyectos' }]


    return(
        <section  className="project-section">
            <h2 id='project'>{textLanguage[indexLanguage].h1}</h2>

            <div className='project-section-cards'>

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