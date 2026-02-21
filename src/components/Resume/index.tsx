import resumeStyle from "./resume.module.css";
import ReactGA from "react-ga4";

const Resume = () => {
    const handleResumeDownload = () => {
        // Track resume download
        ReactGA.event({
            category: 'engagement',
            action: 'resume_download',
            label: 'resume_pdf'
        });
        window.open("https://www.dropbox.com/scl/fi/bbx3w5qszb75asye6y2ip/CMP_PDF.v01_Vijay_Munusamy_Resume.pdf?rlkey=smq40jrmlrgfhiyeyy81kz3yq&st=4a1wnt2a&dl=0", "_blank");
    }
    return(
        <section id="resume" className={resumeStyle.resumeContainer}>
            <div className={resumeStyle.resumeWrapper}>
                <div className={resumeStyle.contentSection}>
                    <h3 className={resumeStyle.headerText}>Resume</h3>
                    <p className={resumeStyle.descriptionText}>
                        Download my comprehensive professional resume to explore my complete career journey, technical expertise, and project achievements. It highlights my experience as a Full Stack Engineer with a track record of delivering high-impact solutions.
                    </p>
                    <div className={resumeStyle.highlightList}>
                        <div className={resumeStyle.highlightItem}>
                            <span className={resumeStyle.highlightIcon}>📄</span>
                            <div>
                                <p className={resumeStyle.highlightTitle}>Comprehensive</p>
                                <p className={resumeStyle.highlightDesc}>Detailed skills, experience & achievements</p>
                            </div>
                        </div>
                        <div className={resumeStyle.highlightItem}>
                            <span className={resumeStyle.highlightIcon}>⚡</span>
                            <div>
                                <p className={resumeStyle.highlightTitle}>Updated</p>
                                <p className={resumeStyle.highlightDesc}>Latest technologies and projects included</p>
                            </div>
                        </div>
                        <div className={resumeStyle.highlightItem}>
                            <span className={resumeStyle.highlightIcon}>💼</span>
                            <div>
                                <p className={resumeStyle.highlightTitle}>Professional</p>
                                <p className={resumeStyle.highlightDesc}>Polished format ready for opportunities</p>
                            </div>
                        </div>
                    </div>
                    <div className={resumeStyle.downloadCard}>
                        <button className={resumeStyle.downloadButton} onClick={handleResumeDownload} aria-label="Download resume (PDF)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span>Download Resume (PDF)</span>
                        </button>
                    </div>
                </div>
                <div className={resumeStyle.illustrationSection}>
                    <div className={resumeStyle.illustrationCard}>
                        <div className={resumeStyle.documentIcon}>📋</div>
                        <p className={resumeStyle.illustrationText}>Ready to explore my background?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;