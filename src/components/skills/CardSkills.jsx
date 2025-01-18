/* eslint-disable react/prop-types */


export default function CardSkills({Skill, NameSkill, ShadowColor}) {
    return(
        <>
            <div className="card-skill" style={{boxShadow: `0px 5px 16px -8px ${ShadowColor}`}}>
                <div className="card-skill__img">
                    <img src={Skill} alt={NameSkill}/>
                </div>
                <span className="card-skill__name">
                    {NameSkill}
                </span>
            </div>
        </>
    )
};
