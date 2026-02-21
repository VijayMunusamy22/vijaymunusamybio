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
            <p className={experienceStyle.descriptionText}>I have worked with a variety of companies, from startups to large corporations. Here is a summary of my professional journey.</p>
            <div className={experienceStyle.experienceWrapper}>
            {
                Object.keys(ExperienceDetails).map(eachOrg => (
                    <div className={experienceStyle.orgWrapper} key={eachOrg}>
                        <div className={experienceStyle.accentLine}></div>
                        <div className={experienceStyle.cardHeader}>
                            <div>
                                <h4 className={experienceStyle.orgText}>{eachOrg}</h4>
                                <span className={experienceStyle.badgeSubtext}>Company</span>
                            </div>
                            <span className={experienceStyle.badge}>{ExperienceDetails[eachOrg].duration}</span>
                        </div>
                        <div className={experienceStyle.cardDivider}></div>
                        <div className={experienceStyle.cardContent}>
                            <div className={experienceStyle.detailRow}>
                                <span className={experienceStyle.iconWrapper}>💼</span>
                                <div className={experienceStyle.detailInfo}>
                                    <p className={experienceStyle.detailLabel}>Role</p>
                                    <p className={experienceStyle.detailValue}>{ExperienceDetails[eachOrg].role}</p>
                                </div>
                            </div>
                            <div className={experienceStyle.detailRow}>
                                <span className={experienceStyle.iconWrapper}>🎯</span>
                                <div className={experienceStyle.detailInfo}>
                                    <p className={experienceStyle.detailLabel}>Project</p>
                                    <p className={experienceStyle.detailValue}>{ExperienceDetails[eachOrg].project}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}

export default Experience;