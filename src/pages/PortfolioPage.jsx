import kanban from "../images/kanboard.png";
import porfolio from "../images/firstporfolioo.png";
import './styles.css';
import notetaker from "../images/notetaker.png";
import concert from "../images/concertApp.png";
import weather from "../images/weather.png";
import blog from "../images/firstblog.png";




export default function PortfolioPage() {
  return (
    <div className="container pt-4">
        <h4 className="title">Project Overview</h4>
      <p className="text">
        Welcome to my project showcase! Here, you'll find a diverse collection of applications and tools that I’ve developed as part of my Fullstack Developer Bootcamp. Each project demonstrates my proficiency with various technologies and my ability to solve real-world problems. From interactive web applications to utility tools, these projects reflect my journey in mastering full-stack development.
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3 >Kanban Board</h3>
                <p className="lead mb-0">
                  In this link, you can see how my kankan Board looks like completly deployed and the git repository <a href="https://gabrielasiu.github.io/Kanban-Board/">Go to Kanban Board</a>
                  <a href="https://github.com/Gabrielasiu/Kanban-Board">Go to Kanban git repository</a>
                  <img
                    className="img"
                    src={kanban}
                  />

                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>My first Portfolio</h3>
                <p className="lead mb-0">
                  In this link, you can see how my porfolio looks like completly deployed and the git repository <a href="https://gabrielasiu.github.io/Challenge-2/">Go to my Portfolio deployed</a>
                  <a href="https://github.com/Gabrielasiu/My-First-Portafolio-">Go to my portfolio git repository</a>
                  <img
                    className="img"
                    src={porfolio}
                    alt="portfolio app"
                  />
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Note taker</h3>
                <p className="lead mb-0">
                  In this link, you can see how my note taker looks like completly deployed and the git repository <a href="https://notetaker-1-tub3.onrender.com/">Go to my note taker deployed</a>
                  <a href="https://github.com/Gabrielasiu/noteTaker">Go to my note taker git repository</a>
                  <img
                    className="img"
                    src={notetaker}
                    alt="portfolio app"
                  />
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Concert App</h3>
                <p className="lead mb-0">
                  This was my second Project. For this we created a matchup concert app where
                  we nuilt a full stack app. Take a look! <a href="https://concertapp.onrender.com/login">Go to my deployed App</a>

                  <a href="https://github.com/Gabrielasiu/concertApp">Go to my Concert App git repository</a>
                  <img
                    className="img"
                    src={concert}
                    alt="concert app"
                  />
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Weather App</h3>
                <p className="lead mb-0">
                  Take a look! <a href="https://github.com/Gabrielasiu/weather">Go to my deployed App</a>

                  <a href="https://gabrielasiu.github.io/weather/"> Weather app git repository</a>
                  <img
                    className="img"
                    src={weather}
                    alt="weather app"
                  />
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3> Personal Blog App</h3>
                <p className="lead mb-0">
                  Take a look! <a href="https://gabrielasiu.github.io/My-Personal-Blog/">Go to my deployed App</a>

                  <a href="https://github.com/Gabrielasiu/My-Personal-Blog"> Personal blog git repository</a>
                  <img
                    className="img"
                    src={blog}
                    alt="weather app"
                  />
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>


    </div>
  );

}