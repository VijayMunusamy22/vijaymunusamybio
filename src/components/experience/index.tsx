/* eslint-disable @typescript-eslint/no-explicit-any */
import experienceStyle from "./experience.module.css";

const ExperienceDetails: any = {
    "Atos-Syntel Pvt Ltd": {
        duration: "Jul 2018 to Aug 2020",
        project: "FedEx (Fedral Express)",
        role: "Associate Consultant"
    },
    "Learnship Technologies Pvt Ltd": {
        duration: "Sept 2020 to Sept 2023",
        project: "Products - Sprint, Solo, Elevate & LPA",
        role: "Software Engineer"
    },
    "First American India Pvt Ltd": {
        duration: "Sept 2023 to Feb 2024",
        project: "Products - Pricing Strategy Management",
        role: "Senior Software Engineer"
    },
    "Cognizant Technology Solution Pvt Ltd": {
        duration: "Feb 2024 to Present",
        project: "Key Bank",
        role: "Senior Associate - Projects"
    }
}

const Experience = () => {
    return(
        <section id="experience" className={experienceStyle.experienceContainer}>
            <h3 className={experienceStyle.headerText}>Experience</h3>
            <p className={experienceStyle.descriptionText}>I have worked with a variety of companies, from startups to large corporations. Here is a summary of my experience.</p>
            <div className={experienceStyle.experienceWrapper}>
            {
                Object.keys(ExperienceDetails).map(eachOrg => (
                    <div className={experienceStyle.orgWrapper} key={eachOrg}>
                        <h4 className={experienceStyle.orgText}>{eachOrg}</h4>
                        <span className={experienceStyle.orgDuration}>{ExperienceDetails[eachOrg].duration}</span>
                        <div className={experienceStyle.projectWrapper}>
                            <h6 className={experienceStyle.clientLabel}>Client/Project:</h6>
                            <span className={experienceStyle.clientDetail}>{ExperienceDetails[eachOrg].project}</span>
                        </div>
                        <div>
                        <h6 className={experienceStyle.clientLabel}>Role:</h6>
                        <span className={experienceStyle.clientDetail}>{ExperienceDetails[eachOrg].role}</span>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}

export default Experience;