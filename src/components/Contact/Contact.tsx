
import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import linkedin from "../../assets/linkedin.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:connect.omnim@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:connect.omnim@gmail.com">connect.omnim@gmail.com</a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/omni-manwani"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://www.linkedin.com/in/omni-manwani">Omni Manwani</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}