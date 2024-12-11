import './Project.css'
import ProjectImage from '../../assets/projectImage.png'

export function ProjectSection() {
    return(
        <section className="project-section">
            <h2>Project Section</h2>

            <div className='project-section-cards'>

                <div className="project-card">
                    <img src={ProjectImage} alt="" />
                    <h3>Google Project</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, explicabo. Labore quam odit laborum officiis! Blanditiis amet sequi ipsum, porro, molestias tempora, minus eveniet dolore exercitationem </p>
                </div>


                <div className="project-card">
                    <img src={ProjectImage} alt="" />
                    <h3>Google Project</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, explicabo. Labore quam odit laborum officiis! Blanditiis amet sequi ipsum, porro, molestias tempora, minus eveniet dolore exercitationem </p>
                </div>



            </div>

        </section>
    )
}