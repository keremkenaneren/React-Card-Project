import "bulma/css/bulma.css";
import './App.css'
import Course from './course';
import Angular_img from "./assets/angular-image.png"
import React_img from "./assets/react-image.png"
import Vue_img from "./assets/vue-image.png"
import NextJs_img from "./assets/next.js.png"


function App() {

  // ! variable definition

  // const myAbout = "Hi! I am Kerem. I am a Full Stack Web Developer. I know advenced java"
  // const myAge = 16

  return (

    <>
      {/* <div>
        <h2>Kerem</h2>
        <p>  {myAbout}  </p>
        <h5>and</h5>
        <p>I am {myAge} years old</p>
      </div> */}


      {/* Components */}

      <div className="hero is-warning">
        <div className="hero-body">
          <p className="title">
            Kerem Kenan Eren With ReactJs</p>
        </div>
      </div >


      <section className="section">

        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular_img}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat tenetur amet porro maiores neque aliquid dolorum reiciendis dolor nihil ratione dolore ipsa optio nemo voluptas perspiciatis saepe, placeat dignissimos."
              />
            </div>
            <div className="column">
              <Course
                image={Vue_img}
                title="Vue"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat tenetur amet porro maiores neque aliquid dolorum reiciendis dolor nihil ratione dolore ipsa optio nemo voluptas perspiciatis saepe, placeat dignissimos."
              />
            </div>
            <div className="column">
              <Course
                image={React_img}
                title="React"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat tenetur amet porro maiores neque aliquid dolorum reiciendis dolor nihil ratione dolore ipsa optio nemo voluptas perspiciatis saepe, placeat dignissimos."
              />
            </div>
            <div className="column">
              <Course
                image={NextJs_img}
                title="Next.js"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat tenetur amet porro maiores neque aliquid dolorum reiciendis dolor nihil ratione dolore ipsa optio nemo voluptas perspiciatis saepe, placeat dignissimos."
              />
            </div>
          </div>

        </div>

      </section>







    </>

  );
}

export default App;
