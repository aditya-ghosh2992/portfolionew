import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h2 
              whileInView={{opacity:1, y:0}} 
                initial={{opacity:0, y: -100}} 
                transition={{duration:0.5}} 
                className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div >
                {PROJECTS.map((project, index) =>(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        whileInView={{opacity:1, x:0}} 
                        initial={{opacity:0, x: -100}} 
                        transition={{duration:1}} 
                        className="w-full lg:w-1/4">
                            <a href=""><img src={project.image} width={250} height={250} alt={project.title} className="mb-6 rounded" /></a>
                        </motion.div>   
                        <motion.div
                        whileInView={{opacity:1, x:0}} 
                        initial={{opacity:0, x: 100}} 
                        transition={{duration:1}} 
                        className=" w-full max-w-xl lg:w-3/4">
                            <h3 mb-2 text-2xl font-semibold>{project.title}</h3>
                            <p className=" mb-4 text-stone-400">{project.description}</p>
                            {project.technologies.map((tech, index) =>(
                                <span key={index} className="mr-2 bg-stone-900 p-2  text-sm text-stone-300 font-medium rounded-md">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;