import masterComponent from "../../images/masterComponent.png"
import animatedDots from "../../images/animatedDots.png"
import cosmicDiary from "../../images/CosmicDiary.png"
import randomAnim from "../../images/randomAnim.png"
import graphQA from "../../images/qa/graphs.png"
import run_resultsQA from "../../images/qa/run results.png"
import boardQA from "../../images/qa/board.png"


export default function Projects() {


const projects_library = [
    {
        num: "01",
        name: "UI Test Automation: Diary Cosmic",
        describtion: `Contains automated UI tests for Diary Cosmic, a personal diary web application.
                      The main goal of this project is to practise and demonstrate UI test automation using Java, Selenium WebDriver, TestNG, Maven and Allure.`,

        technologies: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Allure", "GitHub Actions"],
        link_gitHub: "https://github.com/Ilkarion/Your-Diary-Auto-testing",
        img: graphQA
    },
    {
        num: "02",
        name: "API Testing: Your Diary API (Postman)",
        describtion: `This project demonstrates manual API testing with Postman test scripts (JavaScript) API testing of a diary application using Postman.
                      The goal was to verify API functionality, validate responses, test authentication, and identify potential issues in backend validation.`,
        technologies: ["Postman", "JavaScript", "REST", "JSON", "Swagger UI / OpenAPI", "GitHub"],
        link_gitHub: "https://github.com/Ilkarion/APITesting_Your_diary",
        img: run_resultsQA
    },
        {
        num: "03",
        name: "Manual QA: Allegro Sandbox",
        describtion: `Created to practice full-cycle software testing on an e-commerce platform. It provided practical experience in test planning, designing 65 test cases using core test design techniques, managing test artifacts in Jira and Xray, building a traceability matrix, and writing professional reports.`,
        technologies: ["Jira", "Xray", "DevTools", "GitHub"],
        link_gitHub: "https://github.com/Ilkarion/allegro-sandbox-qa-manual",
        img: boardQA
    },
    {
        num: "04",
        name: "Diary Cosmic",
        describtion: `Full‑stack personal diary app with mood tracking, an interactive map of entries, and analytics. 
        It showcases modern frontend + backend practices, including:
        + User authentication (signup/login/email verification)
        + Create and manage diary entries with tags, moods and map locations
        + Mood statistics and emotional trends visualization
        + Responsive UI with theme switching and internationalization`,

        technologies: ["Next.js (React)", "TypeScript", "Zustand ", "Fetch API",
            "CSS(SCSS)", "HTML", "SQL/PostgreSQL" , "Node.js(Express.js)", "Supabase (database)", "Render (deployment)", "Vercel (deployment)", "i18n (internationalization)"],
        link_gitHub: "https://github.com/Ilkarion/diary_cosmic",
        link_see_project: "https://diary-cosmic-liard.vercel.app/",
        img: cosmicDiary
    },
    {
        num: "05",
        name: "Random Animation",
        describtion: `Focusing on smooth, visually appealing animations.
                    The project includes dynamic animated components that can be used in user interfaces to enhance user engagement, such as interactive particle effects and procedural animations.`,
        technologies: ["Next.js", "CSS", "TypeScript", "HTML", "Tailwind.css", "GSAP(animations)"],
        link_gitHub: "https://github.com/Ilkarion/random_animation",
        link_see_project: "https://random-animation-ecru.vercel.app/",
        img: randomAnim
    },
    {
        num: "06",
        name: "masterComponent",
        describtion: `Computer Store. The project focuses on teamwork, modular architecture, and responsive layouts.`,
        technologies: ["React.js", "Redux", "Material UI", "HTML", "CSS/SCSS", "Git", "Vercel deployment"],
        link_gitHub: "https://github.com/Ilkarion/masterComponent",
        link_see_project: "https://master-component.vercel.app/",
        img: masterComponent
    },
    {
        num: "07",
        name: "animatedDots",
        describtion: `Built an animated background using pure JavaScript and Canvas.
        Goal: practice OOP in JavaScript and apply it in a practical project.`,
        technologies: ["HTML", "JavaScript", "Canvas", "OOP"],
        link_gitHub: "https://github.com/Ilkarion/animated-fon-dots-lines/tree/main",
        link_see_project: "https://ilkarion.github.io/animated-fon-dots-lines/",
        img: animatedDots
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
                                            <a href={item.link_see_project} target="_blank"><img src={item.img} alt="screenshot" /></a>
                                        </div>
                                        
                                    </div>
                                )
                    })}

                </div>
            </div>
            
        </>
    )
};
