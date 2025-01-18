import underwatch from "../../images/underwatch.png"
import masterComponent from "../../images/masterComponent.png"
import animatedDots from "../../images/animatedDots.png"
import giggle from "../../images/giggle.png"
import portfolio from "../../images/portfolio.png"


export default function Projects() {


    const projects_library = [
        {
            num: "01",
            name: "Underwatch",
            describtion: "Project for client. Responsive.",
            technologies: ["Next.js", "CSS", "TypeScript", "HTML", "Tailwind.css"],
            link_gitHub: "https://github.com/Ilkarion/underwatch",
            link_see_project: "https://underwatch.vercel.app/uk",
            img: underwatch
        },
        {
            num: "02",
            name: "Portfolio",
            describtion: "My currently best work, portfolio. Was created by my design and was implemented by me in Browser. Clear code",
            technologies: ["React", "HTML", "CSS", "Figma"],
            link_gitHub: "https://github.com/Ilkarion/portfolio",
            link_see_project: "#",
            img: portfolio
        },
        {
            num: "03",
            name: "masterComponent",
            describtion: "Learned new technologies, skills. Gained experience with a designer, backender, PM, and QA. Responsive.",
            technologies: ["SCSS", "Next.js", "Tailwind.css", "HTML", "Redux"],
            link_gitHub: "https://github.com/Ilkarion/masterComponent",
            link_see_project: "https://master-component.vercel.app/",
            img: masterComponent
            
        },
        {
            num: "04",
            name: "animatedDots",
            describtion: "Clear JavaScript and Canvas. Animated background.",
            technologies: ["HTML", "JavaScript", "Canvas"],
            link_gitHub: "https://github.com/Ilkarion/animated-fon-dots-lines/tree/main",
            link_see_project: "https://ilkarion.github.io/animated-fon-dots-lines/",
            img: animatedDots
        },
        {
            num: "05",
            name: "Giggle",
            describtion: "I learned how i can do light and dark themes, internationalization of the web site. Responsive",
            technologies: ["Next.js", "JavaScript", "HTML", "Tailwind.css"],
            link_gitHub: "https://github.com/Ilkarion/giggle",
            link_see_project: "https://giggle-three.vercel.app/",
            img: giggle
        },

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
