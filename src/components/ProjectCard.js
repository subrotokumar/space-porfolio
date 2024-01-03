import { Col } from "react-bootstrap";
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/google-play.svg';

export const ProjectCard = ({ title, description, imgUrl, tech, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {
            tech.length > 0 ?
              < img src={`https://skillicons.dev/icons?i=${tech.join(",")}&theme=light`} className="tech-icon" alt="tect stack used" /> : <div />
          }
          <div className="social-icon pad">
            <a href={link}><img src={link.includes("github") ? navIcon2 : navIcon3} alt="" /></a>
            {/* <a href="https://play.google.com/store/apps/developer?id=Subroto+Kumar"><img src={navIcon3} alt="" /></a> */}
          </div>
        </div>
      </div>
    </Col>
  )
}
