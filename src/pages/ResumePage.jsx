//resume
// contact
export default function ResumePage() {
  return (
    <div className="container pt-4">
      <p>
        Enthusiastic Fullstack Developer Bootcamp student with solid knowledge
        in JavaScript, APIs, Node.js, and various other technologies.
        Seeking an entry-level position to apply my skills in a dynamic environment and contribute to innovative projects.
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Education</h3>
                <p className="lead mb-0">
                  Full stack web developer Virtual Bootcamp
                  March, 2024 - September 2024

                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Key Topics</h3>
                <p className="lead mb-0">
                  JavaScript, APIs, Node.js, Object-Oriented Programming, Express, SQL, ORM, MVC, NoSQL, PWA, React

                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Technical Skills</h3>
                <p className="lead mb-0">
                  Languages: JavaScript Frameworks/Libraries: Node.js, Express, React Databases: SQL, NoSQL Concepts: Object-Oriented Programming, MVC, ORM, PWA, APIs Tools: [Include any relevant tools, e.g., Git, Docker]
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Projects</h3>
                <p className="lead mb-0">
                  Projects
                  Project Name
                  [Brief Description]

                  Developed using JavaScript, Node.js, Express, and React
                  Implemented [specific feature or functionality]
                  Utilized SQL/NoSQL databases to manage data
                  Followed MVC architecture and employed ORM for database interactions
                  
                  Project Name
                  [Brief Description]

                  Created a Progressive Web App (PWA) to [brief description of functionality]
                  Integrated external APIs to [describe integration]
                  Focused on responsive design and user experience
                  ols: [Include any relevant tools, e.g., Git, Docker]

                </p>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      <div className="container pt-4">
        <p>
          Projects
          Project Name
          [Brief Description]

          Developed using JavaScript, Node.js, Express, and React
          Implemented [specific feature or functionality]
          Utilized SQL/NoSQL databases to manage data
          Followed MVC architecture and employed ORM for database interactions
          Project Name
          [Brief Description]

          Created a Progressive Web App (PWA) to [brief description of functionality]
          Integrated external APIs to [describe integration]
          Focused on responsive design and user experience

        </p>


      </div>
    </div>
  );

}