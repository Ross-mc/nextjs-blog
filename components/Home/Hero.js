import Image from "next/image";
import classes from "./hero.module.css"

//using an Image component, we can use a path assuming we are in the public
//folder as this is the purpose of the Image component
const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/cropped.jpg" alt="me" width={500} height={500}/>
      </div>
      <h1>Hello I am Ross</h1>
      <p>I am a web developer. Welcome to my blog.</p>
    </section>
  )
}

export default Hero