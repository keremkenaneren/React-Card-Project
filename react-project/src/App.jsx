import './App.css'
import Course from './course';
import Angular_img from "./assets/angular-image.png"
import React_img from "./assets/react-image.png"
import Vue_img from "./assets/vue-image.png"
import Java_img from "./assets/java.png"


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

      <Course
        image={Angular_img}
        title="Angular"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat tenetur amet porro maiores neque aliquid dolorum reiciendis dolor nihil ratione dolore ipsa optio nemo voluptas perspiciatis saepe, placeat dignissimos."
      />
      <Course
        image={Vue_img}
        title="Vue"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat tenetur amet porro maiores neque aliquid dolorum reiciendis dolor nihil ratione dolore ipsa optio nemo voluptas perspiciatis saepe, placeat dignissimos."
      />
      <Course
        image={React_img}
        title="React"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat tenetur amet porro maiores neque aliquid dolorum reiciendis dolor nihil ratione dolore ipsa optio nemo voluptas perspiciatis saepe, placeat dignissimos."
      />
      <Course
        image={Java_img}
        title="Java"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat tenetur amet porro maiores neque aliquid dolorum reiciendis dolor nihil ratione dolore ipsa optio nemo voluptas perspiciatis saepe, placeat dignissimos."
      />
    </>

  );
}

export default App;
