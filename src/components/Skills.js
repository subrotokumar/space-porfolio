import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    {
      img: "https://skillicons.dev/icons?i=java",
      name: "Java",
    },
    {
      img: "https://skillicons.dev/icons?i=dart",
      name: "Dart",
    },
    {
      img: "https://skillicons.dev/icons?i=flutter",
      name: "Flutter",
    },
    {
      img: "https://skillicons.dev/icons?i=javascript",
      name: "JavaScript",
    },
    {
      img: "https://skillicons.dev/icons?i=typescript",
      name: "Typescript",
    },
    {
      img: "https://skillicons.dev/icons?i=go",
      name: "Go",
    },
    {
      img: "https://skillicons.dev/icons?i=nodejs",
      name: "Node.js",
    },
    {
      img: "https://skillicons.dev/icons?i=express",
      name: "Express",
    },
    {
      img: "https://skillicons.dev/icons?i=graphql",
      name: "Graphql",
    },
    {
      img: "https://skillicons.dev/icons?i=docker",
      name: "Docker",
    },
    {
      img: "https://skillicons.dev/icons?i=postgres",
      name: "Postgres",
    },
    {
      img: "https://skillicons.dev/icons?i=mongodb",
      name: "MongoDB",
    },
    {
      img: "https://skillicons.dev/icons?i=git",
      name: "Git",
    },
    {
      img: "https://skillicons.dev/icons?i=linux",
      name: "Linux",
    },
  ];


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              {
                // <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              }
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} shouldResetAutoplay={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => {
                  return <div className="item">
                    <img src={skill.img} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                })}
              </Carousel>
              {/* <div style={{ height: 30 }}></div>
              <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => {
                  return <div className="item">
                    <img src={skill.img} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                })}
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
