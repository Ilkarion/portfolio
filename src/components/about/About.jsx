import me from "../../images/me.svg"


export default function About() {

    const full_stack = "Yo!   I am a Fullstack Developer with great experience, good knowledge in programming languages and web development."
    const every_month = "Month by month, I am mastering my skills and developing myself."
    const my_goal = "My goal is to create new products or update them to give people more flexible, faster, and good-looking products."
    const student = "Now,  I am a student of WSPA  University (Computer Science). Down below, you can see my projects and skills."


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
