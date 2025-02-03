import { FormSignUp } from "../components/FormSignUp.jsx"
import { LoginLinks } from "../components/LoginLinks.jsx"
import { Button } from "antd"

export const SignUp = () => {
  return (
    <section>
      <div>
        <img src="./signup.jpg" alt="sign up image" />
        <Button>
          Create an account
        </Button>
      </div>
      <div>
        <h3>Sign up</h3>
        <FormSignUp />
        <LoginLinks />
      </div>
    </section>
  )
} 