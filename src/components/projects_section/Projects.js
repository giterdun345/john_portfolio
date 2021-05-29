// import Buttons from './Buttons'
import Project from './Project'
const Projects = () => {
  const comlogs =
  `During the pandemic, school counselors needed to keep track of their students,
  communication and stats. I created a CRUD application, with non-tech-savvy users in mind, smooth
  UX,no risk for inaccurate data. There is an analytics admin dashboard for quick access to real 
  time stats.The counselors have continued to use the app throughout the 2020-2021 school year and
  an inquiry for adding additional departments has been made. Used: React, Bootstrap, Express`
  const sspm = `
  Southside Paint + More is a painting company serving the Jacksonville area. Their original web 
  page was slow and being in the top 15 painting companies in the area, needed a professional look.
   Furthermore the owner was paying $150/month for all the bells and whistles of dedicated hosting 
   without requiring the extensive resources. I created an SEO friendly page, optimized for speed 
   despite the image gallery and also added a job application form to add a database for potential
    employees, in addition to a contact database for clients. The image gallery uses Cloudinary and
     is linked with Facebook to make managing a breeze. The website is also ready for articles/blog/markdown
      portion, when they are ready, making it a full JAMstack. It saved almost 80% on cost and the owner was
       pleased with the outcome. Here is a demo version, it lives at Netlify for now.`
  const mixitup = `
  I am API savvy so I wanted to make an app to demonstrate this and to have something for my friends
   and family to use also. This fetches data from the CocktailDb, free with some limitations; 
   CocktailDb is an open source database providing instructions and ingredients for making cocktails.
    This page offers search options, browsing by letter, and if you have an ingredient at the house, 
    you can find the ingredient in the list to see all the drinks that are possible. I hope if you go
     to check it out, you find a drink to make this weekend that is different and satisfying. I like 
     to mix things up a bit and explore what the world has to offer, I encourage it.`

  return ( 
    <div className="section section-twoside projects-slider " data-section="projects">
      <Project 
        demo="https://comlogs-demo.netlify.app/"
        source="https://github.com/giterdun345/guidance_counsellors"
        title = "School Com Logs"
        description = {comlogs} 
      />
      <Project 
        demo="https://southsidepaint-prototype.netlify.app/"
        source="https://github.com/giterdun345/southsideG"
        title = "Southside Paint & More"
        description = {sspm} 
      />
      <Project 
        demo="https://mixitupketterer.netlify.app/"
        source="https://github.com/giterdun345/cocktailAPI-mixitup"
        title = "MixItUp"
        description = {mixitup} 
      />
      
      {/* <!-- Slider Navigation --> */}
      <div className="section-slider-footer slider-navigation">
        <a className="left">
          <span className="btn btn-arrow">
            <span className="icon">
              <span className="arrow-left"></span>
            </span>
          </span>
        </a>
        <a className="right">
          <span className="btn btn-arrow">
            <span className="icon">
              <span className="arrow-right"></span>
            </span>
          </span>
        </a>
        <div className="text">
          <p>Browse Projects</p>
        </div>
      </div>

      {/* <!-- Arrows scroll down/up --> */}
      <footer className="section-footer scrolldown">
        <a className="up">
          <span className="btn btn-arrow">
            <span className="icon">
              <span className="arrow-up"></span>
            </span>
          </span>
        </a>
        <a className="down">
          <span className="btn btn-arrow">
            <span className="icon">
              <span className="arrow-down"></span>
            </span>
          </span>
        </a>
      </footer> 

    </div>
   );
}
 
export default Projects;