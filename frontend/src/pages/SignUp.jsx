import { FormSignUp } from "../components/FormSignUp.jsx"
import { LoginLinks } from "../components/LoginLinks.jsx"
import { Button } from "antd"

export const SignUp = () => {
  return (
      <section className="w-full h-screen flex justify-center items-center gap-6">
      <div className="flex flex-col gap-4 items-center">
        <img src="./signup.jpg" alt="sign up image" className="w-[30rem]"/>
        <Button type="link">
          Create an account
        </Button>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h3 className="text-4xl font-bold">Sign up</h3>
        <FormSignUp />
        <LoginLinks />
      </div>
    </section>
  )
} 