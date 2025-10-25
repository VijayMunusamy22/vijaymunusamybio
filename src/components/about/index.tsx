/* eslint-disable @typescript-eslint/no-explicit-any */
import aboutStyle from "./about.module.css";

import developerImage from "../../assets/developer.png";
import { Fragment } from "react/jsx-runtime";

const Skills: any = {
  Frontend: [
    "ReactJs",
    "Redux",
    "Redux Toolkit",
    "Redux Saga",
    "Redux Thunk",
    "JavaScript",
    "Typescript",
    "HTML",
    "CSS",
    "SCSS",
    "NextJs",
    "Angular",
  ],
  Backend: [
    "NodeJs",
    "ExpressJs",
    "GraphQL",
    "NO SQL",
    "Postgress",
    "Middlewares",
    "REST API",
    "Python",
  ],
  Integrations: ["OAuth", "Jwt", "Social Providers", "Cloud Gateways"],
  "Cloud exposure": [
    "AWS Lambda",
    "AWS AppSync",
    "AWS EC2",
    "AWS API Gateway",
    "AWS DynamoDB",
    "AWS Cloudwatch",
    "AWS EventBridge",
    "AWS S3",
  ],
};

const About = () => {
  return (
    <Fragment>
      <section id="about" className={aboutStyle.aboutContainer}>
        <div className={aboutStyle.textWrapper}>
          <h1 className={aboutStyle.headerText}>Hi, I'm Vijay Munusamy</h1>
          <p className={aboutStyle.descriptionText}>
            A passionate Full Stack Engineer with nearly 7 years of experience
            building scalable, high-performance web applications. I specialize
            in both front-end and back-end development, bridging the gap between
            design and engineering to deliver seamless digital experiences.
          </p>
        </div>
        <div className={aboutStyle.imageWrapper}>
          <img
            src={developerImage}
            alt="Developer Image"
            className={aboutStyle.imageStyle}
          />
        </div>
      </section>
      <div className={aboutStyle.skillsWrapper}>
        {Object.keys(Skills).map((eachCategory: string) => (
          <div className={aboutStyle.categoryWrapper} key={eachCategory}>
            <h5 className={aboutStyle.categoryTitle}>{eachCategory}</h5>
            <div className={aboutStyle.skillChipWrapper}>
            {Skills[eachCategory].map((eachSkills: string) => (
              <span key={eachSkills} className={aboutStyle.skillChip}>
                {eachSkills}
              </span>
            ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default About;
