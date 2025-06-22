import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="project-wrapper">
          {dataportfolio.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h2>{project.title}</h2>
                <p className="project-summary">{project.summary}</p>

                {project.tech && (
                  <div className="project-tech">
                    <strong>Tech Stack:</strong>
                    <ul>
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture && (
                  <details className="architecture">
                    <summary>Architecture Diagram</summary>
                    <pre>{project.architecture}</pre>
                  </details>
                )}

                {project.iframe && (
                  <div
                    className="iframe-container"
                    dangerouslySetInnerHTML={{ __html: project.iframe }}
                  />
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View Project on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
