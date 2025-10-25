import resumeStyle from "./resume.module.css";

const Resume = () => {
    const handleResumeDownload = () => {
        window.open("https://www.dropbox.com/scl/fi/nbxk7x9ojiuifwrd1aq2f/CMP_PDF.v01_Vijay_Munusamy_Resume.pdf?rlkey=d6at72tq5by5tk9zhrqx85l7f&dl=0", "_blank");
    }
    return(
        <section id="resume" className={resumeStyle.resumeContainer}>
            <h3 className={resumeStyle.headerText}>Resume</h3>
            <p className={resumeStyle.descriptionText}>You can download my resume by clicking the icon below.</p>
            <div className={resumeStyle.resumeIcon} onClick={handleResumeDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
        </section>
    )
}

export default Resume;