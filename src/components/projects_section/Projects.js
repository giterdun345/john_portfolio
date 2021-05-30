import Project from './Project'
import SliderNavigation from './SliderNavigation'
import Footer from '../Footer'
const Projects = () => {
  const comlogs =
  `During the pandemic, school counselors needed to keep track of their students,
  communication and stats. I created a CRUD application, with non-tech-savvy users in mind, smooth
  UX,no risk for inaccurate data. There is an analytics admin dashboard for quick access to real 
  time stats.The counselors have continued to use the app throughout the 2020-2021 school year and
  an inquiry for adding additional departments has been made. Used: React, Bootstrap, Express`
  
  const sspm = 
  `The original web page was not optimal, it needed a professional look.
  Furthermore the owner was paying $150/month for all the bells and whistles of dedicated hosting 
  without requiring the extensive resources. I created an SEO friendly page, optimized for speed 
  and added a job application form in addition to a contact form, which is accessed as a database. The website is ready for articles/blog
  portion, making it a full JAMstack. It saved almost 80% on cost and the owner was
  pleased with the outcome. Used: React, Sass, Gatsby `

  const mixitup = `
  I am API savvy so I wanted to make an app to demonstrate this and to have something for my friends
  and family to use also. This fetches data from the CocktailDb, free with some limitations; 
  CocktailDb is an open source database providing instructions and ingredients for making cocktails.
  This page offers search options, browsing by letter, and if you have an ingredient at the house, 
  you can find the ingredient in the list to see all the drinks that are possible. I hope if you go
  to check it out, you find a drink to make this weekend that is different and satisfying. I like 
  to mix things up a bit and explore what the world has to offer, I encourage it. Used: React, Sass, APIs`

  return ( 
    <div className="section section-twoside projects-slider " data-section="projects">
      <Project 
        // image=
        demo="https://comlogs-demo.netlify.app/"
        source="https://github.com/giterdun345/guidance_counsellors"
        title = "School Com Logs"
        description = {comlogs} 
      />
      <Project 
        // image="./img/sspm.png"
        demo="https://southsidepaint-prototype.netlify.app/"
        source="https://github.com/giterdun345/southsideG"
        title = "Southside Paint"
        description = {sspm} 
      />
      <Project 
      // image="./img/mixitupGIF.gif"
        demo="https://mixitupketterer.netlify.app/"
        source="https://github.com/giterdun345/cocktailAPI-mixitup"
        title = "MixItUp"
        description = {mixitup} 
      />
      <SliderNavigation />
      <Footer />
    </div>
   );
}
 
export default Projects;