import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaGooglePlusSquare } from "react-icons/fa"

export const LoginLinks = () => {
  return (
    <div className="mt-4 flex gap-4 items-center">
      <p>
        Or login with
      </p>
      <ul className="flex gap-4 items-center justify-center">
        <li>
          <a href="#">
            <FaFacebookSquare className="size-8"/>
          </a>
        </li>
        <li>
          <a href="#">
            <FaSquareXTwitter className="size-8" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGooglePlusSquare className="size-8" />
          </a>
        </li>
      </ul>
    </div>
  )
}