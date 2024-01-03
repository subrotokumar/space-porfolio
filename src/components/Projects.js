/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import docsyncImg from "../assets/img/docsync.png";
import kurumiImg from "../assets/img/kurumi.png";
import cometImg from "../assets/img/comet.png";
import coinstateImg from "../assets/img/coinstate.png";
import 'animate.css';
import colorSharp2 from "../assets/img/color-sharp2.png";
import OneInchDexImg from "../assets/img/1inchdex.png";
import aboutMeCliImg from "../assets/img/aboutme-cli.png"
import urlShorterImg from "../assets/img/url-shortner.png"
import nyxImg from "../assets/img/nyx.png"
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectTab1 = [
    {
      title: "Docsync",
      description: "Realtime Document Editor",
      imgUrl: docsyncImg,
      tech: ["nodejs", "flutter", "mongodb"],
      link: "https://github.com/subrotokumar/doc-sync-server",
    },
    {
      title: "Kurumi: Anilist Client",
      description: "Discovery and tracking app for Anime lovers",
      imgUrl: kurumiImg,
      tech: ["dart", "flutter", "graphql"],
      link: "https://play.google.com/store/apps/details?id=com.subrotokumar.kurumi"
    },
    {
      title: "Comet",
      description: "Cryptocurrency And NFT Wallet\n for EVM chains",
      imgUrl: cometImg,
      tech: ["flutter", "solidity", "nodejs"],
      link: "https://play.google.com/store/apps/details?id=com.subrotokumar.comet"
    },
  ];

  const projectTab2 = [
    {
      title: "1Inch Decentralized Exchange",
      description: "Cryptocurrency token swapper",
      imgUrl: OneInchDexImg,
      tech: ["react", "html", "nodejs", "express"],
      link: "https://fascinating-empanada-ff7997.netlify.app/"
    },
    {
      title: "Coinstate",
      description: "Cryptocurrency Price Tracker",
      imgUrl: coinstateImg,
      tech: ["dart", "flutter", "androidstudio"],
      link: "https://play.google.com/store/apps/details?id=com.subrotokumar.cryptobook"
    },
    {
      title: "AboutMe CLi",
      description: "CLI like porfolio website",
      imgUrl: aboutMeCliImg,
      tech: ["typescript", "react", "css", "html"],
      link: "https://github.com/subrotokumar/aboutme-cli"
    },

  ];

  const projectTab3 = [
    {
      title: "Go URL Shortner",
      description: "URL shortner built with go, postgres and gorm",
      imgUrl: urlShorterImg,
      tech: ["go", "postgres"],
      link: "https://github.com/subrotokumar/go-url-shortener"
    },
    {
      title: "NYX",
      description: "NFT Gallery",
      imgUrl: nyxImg,
      tech: ["androidstudio"],
      link: "https://play.google.com/store/apps/details?id=com.subrotokumar.nyx"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectTab1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectTab2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projectTab3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
