import underwatch from "../../images/underwatch.png"
import masterComponent from "../../images/masterComponent.png"
import animatedDots from "../../images/animatedDots.png"
import giggle from "../../images/giggle.png"
import novaSpere from "../../images/novaSphere.png"


export default function Projects() {


const projects_library = [
    {
        num: "01",
        name: "NovaSphere",
        describtion: `This project is a summary of my previous works. 
        I designed it myself and made the website fully responsive for different devices. 
        I connected Supabase and created SQL tables for user data storage. 
        I added internationalization in 4 languages, light/dark theme switching, and authentication. 
        I built complex components, forms, pagination, and search with language-aware results. 
        The idea of the site: a platform where users can share amazing facts and phenomena in three categories — Space, Nature, and Human Inventions. 
        Before publication, submitted content is reviewed by the author and then approved.`,

        technologies: ["Next.js", "HTML", "SCSS", "Figma", "Supabase", "SQL", "JavaScript", "TypeScript", "API"],
        link_gitHub: "https://github.com/Ilkarion/NovaSphere",
        link_see_project: "https://nova-sphere-iota.vercel.app/en",
        img: novaSpere
    },
    {
        num: "02",
        name: "Underwatch",
        describtion: `Focused on advanced Tailwind CSS techniques, explored custom CSS tricks, and improved responsive design skills.`,
        technologies: ["Next.js", "CSS", "TypeScript", "HTML", "Tailwind.css"],
        link_gitHub: "https://github.com/Ilkarion/underwatch",
        link_see_project: "https://underwatch.vercel.app/uk",
        img: underwatch
    },
    {
        num: "03",
        name: "masterComponent",
        describtion: `Worked in a team with designer, backend developer, PM, and QA using SCRUM methodology.
        Gained collaboration experience and learned how to use Redux effectively.`,
        technologies: ["SCSS", "Next.js", "Tailwind.css", "HTML", "Redux"],
        link_gitHub: "https://github.com/Ilkarion/masterComponent",
        link_see_project: "https://master-component.vercel.app/",
        img: masterComponent
    },
    {
        num: "04",
        name: "animatedDots",
        describtion: `Built an animated background using pure JavaScript and Canvas.
        Goal: practice OOP in JavaScript and apply it in a practical project.`,
        technologies: ["HTML", "JavaScript", "Canvas", "OOP"],
        link_gitHub: "https://github.com/Ilkarion/animated-fon-dots-lines/tree/main",
        link_see_project: "https://ilkarion.github.io/animated-fon-dots-lines/",
        img: animatedDots
    },
    {
        num: "05",
        name: "Giggle",
        describtion: "Explored implementation of light/dark themes and website internationalization (i18n). Improved skills in responsive design and TypeScript.",
        technologies: ["Next.js", "JavaScript", "HTML", "Tailwind.css", "i18n", "TypeScript"],
        link_gitHub: "https://github.com/Ilkarion/giggle",
        link_see_project: "https://giggle-three.vercel.app/",
        img: giggle
    }
]

    return(
        <>
            <div className="projects" id="projects-section">
                <h2>PROJECTS</h2>
                <div className="projects__cards">

                    {projects_library.map((item, index) => {
                        return (
                                    <div className="projects__cards__card" key={index}>
                                        <div className="projects__cards__card__about">
                                            <div className="card-about-name">
                                                <span>{item.num}</span>
                                                <span>{item.name}</span>
                                            </div>

                                            <div className="card-about-describtion">
                                                <p>{item.describtion}</p>
                                                <div className="card-about-technologies">
                                                    {item.technologies.map((tech_name, index)=>{
                                                        return (<span key={index}>{tech_name}</span>)
                                                    })}
                                                </div>
                                            </div>

                                            <a href={item.link_gitHub} target="_blank">Link gitHub--&gt;</a>
                                        </div>

                                        <div className="projects__cards__card__image">
                                            <a href={item.link_see_project} target="_blank"><img src={item.img} alt="underwatch" /></a>
                                        </div>
                                    </div>
                                )
                    })}

                </div>
            </div>
            
        </>
    )
};
