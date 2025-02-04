import { IoPerson } from "react-icons/io5"
import { RiLockPasswordFill } from "react-icons/ri"

export const FormSignUp = () => {
  return (
    <form action="">
      <ul className="flex flex-col items-start justify-center gap-6">
        <li className="flex justify-center items-center gap-1 border-b-1 border-black border-solid">
          <label htmlFor="yourname">
            <IoPerson />
          </label>
          <input className="p-2" type="text" name="Your name" id="yourname" placeholder="Your name" />
        </li>
        <li className="flex justify-center items-center gap-1 border-b-1 border-black border-solid">
          <label htmlFor="password">
            <RiLockPasswordFill />
          </label>
          <input className="p-2" type="password" name="Password" id="password" placeholder="Password" />
        </li>
        <li className="flex justify-center items-center gap-4">
          <input className="" type="checkbox" name="Checkbox" id="checkbox" />
          <label htmlFor="Remember me">Remember me</label>
        </li>
      </ul>
      <button className="mt-6 bg-blue-400 px-8 py-4 rounded-md text-white">Log in</button>
    </form>
  )
}