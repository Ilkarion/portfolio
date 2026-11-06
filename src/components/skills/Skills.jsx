import js_skills from "../../images/skills/JS.svg"
import ts_skills from "../../images/skills/ts.svg"
import bootstrap_skills from "../../images/skills/bootstrap.svg"
import css_skills from "../../images/skills/css.svg"
import figma_skills from "../../images/skills/figma.svg"
import github_skills from "../../images/skills/github.svg"
import html_skills from "../../images/skills/html.svg"
import npm_skills from "../../images/skills/npm.svg"
// import python_skills from "../../images/skills/python.svg" -- python
import react_skills from "../../images/skills/react.svg"
import redux_skills from "../../images/skills/redux.svg"
import sass_skills from "../../images/skills/sass.svg"
import sql_skill from "../../images/skills/sql.png"
import next_js_skill from "../../images/skills/next_js.png"
import jira_skills from "../../images/skills/jira.jpeg"
import CardSkills from "./CardSkills"

import apiImg from "../../images/skills/API.png"
import postgreSQLImg from "../../images/skills/postgreSQL.png"
import zustandImg from "../../images/skills/zustand.png"
import nodeJSImg from "../../images/skills/nodeJS.png"
import expressImg from "../../images/skills/express.png"
import supabaseImg from "../../images/skills/supabase.png"
import postmanImg from "../../images/skills/postman.png"
import muiImg from "../../images/skills/mui.png"

//QA
import allureQA from "../../images/skills/qa/allure.png"
import devtoolsQA from "../../images/skills/qa/devtools.png"
import gh_actionsQA from "../../images/skills/qa/gh-actions.png"
import javaQA from "../../images/skills/qa/java.svg"
import jsonQA from "../../images/skills/qa/json.svg"
import mavenQA from "../../images/skills/qa/maven.png"
import seleniumQA from "../../images/skills/qa/selenium.svg"
import swaggerQA from "../../images/skills/qa/swagger.png"
import testngQA from "../../images/skills/qa/testng.png"
import xrayQA from "../../images/skills/qa/xray.png"



export default function Skills() {
    const frontend_tech = [
        {
            img: js_skills,
            shadowColor: "rgba(124, 112, 16, 1)",
            name: "JavaScript"
        },
        {
            img: next_js_skill,
            shadowColor: "#064E58",
            name: "Next.js"
        },
        {
            img: ts_skills,
            shadowColor: "rgba(0, 152, 255, 1)",
            name: "TypeScript"
        },
        {
            img: html_skills,
            shadowColor: "rgba(228, 77, 38, 1)",
            name: "HTML"
        },
        {
            img: react_skills,
            shadowColor: "rgba(0, 165, 195, 1)",
            name: "React"
        },
        {
            img: redux_skills,
            shadowColor: "rgba(161, 101, 255, 1)",
            name: "Redux"
        },
        {
            img: css_skills,
            shadowColor: "rgba(35, 162, 255, 1)",
            name: "CSS"
        },
        {
            img: sass_skills,
            shadowColor: "rgba(205, 103, 153, 1)",
            name: "SASS"
        },
        {
            img: apiImg,
            shadowColor: "#E58325",
            name: "API"
        },
        {
            img: zustandImg,
            shadowColor: "#516E2F",
            name: "Zustand"
        },
    ]
    const backend_tech = [
        // {
        //     img: python_skills,
        //     shadowColor: "rgba(78, 174, 255, 1)",
        //     name: "Python"
        // },
        {
            img: sql_skill,
            shadowColor: "#E06C21",
            name: "SQL"
        },
        {
            img: postgreSQLImg,
            shadowColor: "#2B5679",
            name: "Postgre SQL"
        },
        {
            img: nodeJSImg,
            shadowColor: "#85BE01",
            name: "Node.js"
        },
        {
            img: expressImg,
            shadowColor: "#8a8a01",
            name: "Express.js"
        },
        {
            img: supabaseImg,
            shadowColor: "#3ECF8E",
            name: "Supabase database"
        }
]
    const other_tech = [
        {
            img: bootstrap_skills,
            shadowColor: "rgba(102, 44, 130, 1)",
            name: "Bootstrap"
        },
        {
            img: figma_skills,
            shadowColor: "rgba(10, 207, 131, 1)",
            name: "Figma"
        },
        {
            img: github_skills,
            shadowColor: "rgba(113, 113, 113, 0.16)",
            name: "GitHub"
        },
        {
            img: npm_skills,
            shadowColor: "rgba(150, 46, 46, 1)",
            name: "npm"
        },
        {
            img: muiImg,
            shadowColor: "#007BF7",
            name: "Material UI"
        },

    ]

    //qa
    const qa_auto = [
        {
            img: javaQA,
            shadowColor: "#E76F00",
            name: "Java"
        },
        {
            img: seleniumQA,
            shadowColor: "#2CB134",
            name: "Selenium"
        },
        {
            img: testngQA,
            shadowColor: "#BD110F",
            name: "TestNG"
        },
        {
            img: allureQA,
            shadowColor: "#7E8EA5",
            name: "Allure"
        },
        {
            img: gh_actionsQA,
            shadowColor: "#1E87FD",
            name: "GitHub Actions"
        },
        {
            img: mavenQA,
            shadowColor: "#A61F5D",
            name: "Maven"
        },
    ]
    const qa_api = [
        {
            img: postmanImg,
            shadowColor: "#FD6C35",
            name: "Postman"
        },
        {
            img: jsonQA,
            shadowColor: "#FFD375",
            name: "JSON"
        },
        {
            img: swaggerQA,
            shadowColor: "#183748",
            name: "Swagger"
        },
    ]
    const qa_manual = [
        {
            img: xrayQA,
            shadowColor: "#97DAA4",
            name: "XRay"
        },
        {
            img: jira_skills,
            shadowColor: "#0E54D7",
            name: "Jira"
        },
        {
            img: devtoolsQA,
            shadowColor: "#F9759D",
            name: "DevTools"
        },
    ]

    return(
        <div className="skills" id="skills-sect">
            <h2>SKILLS</h2>

            <h3 className="skills__name_section delete-double-margin">QA Automation</h3>
            <div className="skills_section">
                {qa_auto.map((item, index) => (
                    <CardSkills Skill={item.img} NameSkill={item.name} ShadowColor={item.shadowColor} key={index}/>
                ))}
            </div>

            <h3 className="skills__name_section">QA API</h3>
            <div className="skills_section">
                {qa_api.map((item, index) => (
                    <CardSkills Skill={item.img} NameSkill={item.name} ShadowColor={item.shadowColor} key={index}/>
                ))}
            </div>

            <h3 className="skills__name_section">QA manual</h3>
            <div className="skills_section">
                {qa_manual.map((item, index) => (
                    <CardSkills Skill={item.img} NameSkill={item.name} ShadowColor={item.shadowColor} key={index}/>
                ))}
            </div>

            <h3 className="skills__name_section">Front-end</h3>
                <div className="skills_section">
                    {frontend_tech.map((item, index) => (
                        <CardSkills Skill={item.img} NameSkill={item.name} ShadowColor={item.shadowColor} key={index}/>
                    ))}
                </div>
            <h3 className="skills__name_section">Back-end</h3>
                <div className="skills_section">
                    {backend_tech.map((item, index) => (
                        <CardSkills Skill={item.img} NameSkill={item.name} ShadowColor={item.shadowColor} key={index}/>
                    ))}
                </div>
            <h3 className="skills__name_section">Other</h3>
                <div className="skills_section">
                    {other_tech.map((item, index) => (
                        <CardSkills Skill={item.img} NameSkill={item.name} ShadowColor={item.shadowColor} key={index}/>
                    ))}
                </div>
        </div>
    )
};
