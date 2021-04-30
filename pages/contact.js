import ContactForm from "../components/Contact/ContactForm";
import Head from "next/head"

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ross' Blog</title>
        <meta name="description" content="I post about programming and web development. Contact me by posting a message"/>
      </Head>
      <ContactForm />
    </>
  )
}

export default Contact