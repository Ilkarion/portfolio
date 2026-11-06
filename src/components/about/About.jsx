import me from "../../images/me.svg"


export default function About() {

    const full_stack = "I am a QA Engineer with a background in web development. I know how to do manual testing, test APIs with Postman, and build test automation using Java and Selenium."
    const every_month = "Month by month, I am learning new skills to become a better tester."
    const my_goal = "My goal is to make sure applications work well and give users a smooth, high-quality experience."
    const student = "Right now, I am studying Computer Science at WSPA University. You can check out my projects and skills below!"


    return (
        <>
            <div className="about">
                <div className="about__info">
                    <p>{full_stack}</p>
                    <p>{every_month}<br />{my_goal}</p>
                    <p>{student}</p>
                </div>
                <div className="about__image">
                    
                    <div className="about__image_me">

                        <div className="about__image__blue-dot">
                            <div></div>
                        </div>
                        <div className="image-shadow">
                            <div></div>
                        </div>
                        <img src={me} alt="me"/>

                        <div className="about__image__yellow-dot">
                            <div></div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
};
