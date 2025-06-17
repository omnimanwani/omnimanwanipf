import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/omnimanwani/MaatrAI" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dhayika : Maternal Health Chatbot</h3>
              <p>
                Developed a Flask-based maternal health chatbot with Neo4j for structured risk assessment and MongoDB for
                patient history. Trained the model chieving 97% accuracy in risk prediction. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>LLM </li>
                <li>Flask</li>
                <li>NLTK</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/omnimanwani/DesignProject" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Movie Recommendation System</h3>
              <p> Built LLM-based movie recommender using prompt engineering for intent classification for accurate user intention classification, Named Entity Recognition to extract movie-related attributes. Used Neo4j to map relationships between movie entities, trained on ReDial dataset for personalized recommendations . </p>
            </div>
            <footer> <ul className="tech-list"> <li>Neo4j</li> <li>SpaCy</li> <li>NLTK</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/omnimanwani/Hack-the-Future-WillDo/tree/patch-1" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Deaf and Dumb Interactive Learning App</h3>
              <p>
                Develop a system that translates sign language into text and speech. And text to sign.​
                Captured hand gestures and converted them into text using a TensorFlow-based deep learning model.​
                Transformed the interpreted text into speech using gTTS (Google Text-to-Speech).​
                Created a simple web interface using Flask to make the system accessible to users.​
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>gTTS</li>
                <li>Tensorflow</li>
                <li>ASL</li>
                <li>OpenCV</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/omnimanwani/FrostFlowss" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>FrostFlow Budget Optimizer</h3>
              <p>This focuses on optimizing budget distribution across multiple advertising channels. The primary objective is to allocate the budget in a way that maximizes conversions while minimizing costs. It uses Multi-Objective Optimization (MOO) and the NSGA-II algorithm for budget allocation. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>MOO</li>
                <li>Pandas</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/omnimanwani/Sales_insight_DBMS" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Walmart Sales Insights </h3>
              <p>Integrated real-time Walmart Sales CSV data using Pandas, queried and updated data trends via advance
                queries(Triggers, Views, Checks) in MySQL, visualized with Matplotlib, and implemented user-driven queries for
                flexible data analysis and reporting.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MySQL</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}