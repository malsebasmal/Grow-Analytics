import { FormSignUp } from "../components/FormSignUp.jsx"
import { LoginLinks } from "../components/LoginLinks.jsx"

export const SignUp = () => {
  return (
    <section>
      <div>
        <img src="./signup.jpg" alt="sign up image" />
        <a href="">Create an account</a>
      </div>
      <div>
        <h3>Sign up</h3>
        <FormSignUp />
        <LoginLinks />
      </div>
    </section>
  )
} 