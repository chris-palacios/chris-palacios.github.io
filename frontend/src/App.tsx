import './App.css'
import { getImageUrl } from './utils/image-url'

function App() {

  return (
    <>
      <div className="name-title">
        <h1>Hi I'm Christian</h1>
      </div>
      <div className='profile-pic'>
        <img src={getImageUrl("profile-pic.jpg")}/>
      </div>
      <div className='profile-bio'>
        <h2>I'm a software developer looking for his first gig. Please hire me.</h2>
      </div>
      <div className='projects'>
        <div className='row'>
          <ProjectCard link="https://github.com/chris-palacios" picture={getImageUrl('maple-leafs.jpg')} desc='Sports Sentiment Evaluator'></ProjectCard>
          <ProjectCard link="https://github.com/chris-palacios" picture={getImageUrl('news.jpg')} desc='News Website'></ProjectCard>
        </div>  
        <div className='row'>
          <ProjectCard link="https://github.com/chris-palacios" picture={getImageUrl('bingoal.jpg')} desc='Habit Tracking'></ProjectCard>
          <ProjectCard link="https://github.com/chris-palacios" picture={getImageUrl('CI-CD.jpg')} desc='Portfolio Webserver CI/CD'></ProjectCard>
        </div>
      </div>
    </>
  )
}

function ProjectCard({link, picture, desc}: {link: string, picture: string, desc:string}){
  return (
    <>
      <div className='project-card'>
        <div className='project-picture'>
        <a href={link}> <img src={picture}/> </a>
        </div>
        <div className='project-description'>
          <p>{desc}</p>
        </div>
      </div>
    </>
  )
}
export default App
