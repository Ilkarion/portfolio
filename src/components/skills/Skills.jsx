import js_skills from "../../images/skills/JS.svg"
import ts_skills from "../../images/skills/ts.svg"
import bootstrap_skills from "../../images/skills/bootstrap.svg"
import css_skills from "../../images/skills/css.svg"
import figma_skills from "../../images/skills/figma.svg"
import github_skills from "../../images/skills/github.svg"
import html_skills from "../../images/skills/html.svg"
import npm_skills from "../../images/skills/npm.svg"
import python_skills from "../../images/skills/python.svg"
import react_skills from "../../images/skills/react.svg"
import redux_skills from "../../images/skills/redux.svg"
import sass_skills from "../../images/skills/sass.svg"
import CardSkills from "./CardSkills"


export default function Skills() {
    const frontend_tech = [
        {
            img: js_skills,
            shadowColor: "rgba(124, 112, 16, 1)",
            name: "JavaScript"
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
        }
    ]
    const backend_tech = [{
        img: python_skills,
        shadowColor: "rgba(78, 174, 255, 1)",
        name: "Python"
    }]
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
    ]

    return(
        <div className="skills" id="skills-sect">
            <h2>SKILLS</h2>

            <h3 className="skills__name_section delete-double-margin">Front-end</h3>
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
