import { Link } from 'react-router-dom'
import mainPic from'../images/tutorial.png';
function Page1() {
  return (
    <div>
      <h1>How I Built This Project 🖥️</h1>
      <p>I used react and vite to build this react project</p>
      <div>
       <p>1. I used npm <b>create vite@latest .</b></p>
       <p>2. I went with the default package name</p>
       <p>3. I chose <u>React</u> as the framework and <u>JavaScript</u> as the variant.</p>
       <p>4. Finally I did <mark>npm install</mark> and <mark>npm run dev</mark> to run locally!</p>
      </div>
      <div>
      <img src={mainPic} />

      <h2>How I Built this page? 😊</h2>
       <p>I used react component to make this page called Page1.jsx</p>
       <p>Inside the file I used jsx which is like html elements. In the main.jsx page I imported the component and it shows to the user.</p>
       <p>I added react router so whenever the user clicks the button on the homepage it routes to page1.jsx</p>
    
        <h3>Difficulties? 🤔</h3>
        <p>The difficulties I ran into is when installing react router. I couldn't get the links to route properly. I had to look at the documentation to solve it and in the end it worked!</p>
         <a href="https://www.w3schools.com/react/react_router.asp">w3 Schools react router tutorial</a>
      </div>
      
   
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Page1 