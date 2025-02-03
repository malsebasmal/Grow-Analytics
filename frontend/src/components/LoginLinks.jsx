import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaGooglePlusSquare } from "react-icons/fa"

export const LoginLinks = () => {
  return (
    <div>
      <p>
        Or login with
      </p>
      <ul>
        <li>
          <a href="#">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaSquareXTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGooglePlusSquare />
          </a>
        </li>
      </ul>
    </div>
  )
}