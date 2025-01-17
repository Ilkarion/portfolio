import underwatch from "../../images/underwatch.png"


export default function Projects() {


    const projects_library = [
        {
            num: "01",
            name: "Underwatch",
            describtion: "project for client",
            technologies: ["Next.js", "CSS", "Tailwind.css", "HTML"],
            link_gitHub: "https://github.com/Ilkarion/underwatch",
            link_see_project: "https://underwatch.vercel.app/uk",
            img: underwatch
        },

    ]

    return(
        <>
            <div className="projects">
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
