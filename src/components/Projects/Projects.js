import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heartAttack from "../../Assets/Projects/heart_attack.png";
import messiAnalytics from "../../Assets/Projects/messi_analytics.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques-uns de mes projets récents en IA & Data Science
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={heartAttack}
              isBlog={false}
              title="Prédiction d'Attaque Cardiaque"
              description="Application de Machine Learning pour prédire le risque d'attaque cardiaque. Développée en Python, cet outil d'analyse santé utilise les données patient (âge, cholestérol, pression artérielle, IMC et facteurs de style de vie) pour évaluer le risque cardiovasculaire. Interface intuitive en mode sombre avec prédictions en temps réel et scoring ROC-AUC."
              ghLink="https://github.com/lucabarb/heart_attack_Prediction"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={messiAnalytics}
              isBlog={false}
              title="Analyse Football - Messi WC 2022"
              description="Projet de visualisation de données et d'analyse de la performance de Lionel Messi lors de la Coupe du Monde 2022. Visualisation des dribbles, trajectoires de balle, passes réussies, tirs et fautes obtenues avec Python. Mon premier projet data science partagé publiquement sur LinkedIn !"
              demoLink="https://www.linkedin.com/posts/louey-barbirou-2b97a828b_cest-mon-tout-premier-projet-que-je-partage-activity-7404512770836156416-1NfQ"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

