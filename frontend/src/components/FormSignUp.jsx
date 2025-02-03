export const FormSignUp = () => {
  return (
    <form action="">
      <ul>
        <li>
          <label htmlFor="yourname"></label>
          <input type="text" name="Your name" id="yourname" />
        </li>
        <li>
          <label htmlFor="password"></label>
          <input type="password" name="Password" id="password" />
        </li>
        <li>
          <input type="checkbox" name="Checkbox" id="checkbox" />
          <label htmlFor="Remember me"></label>
        </li>
      </ul>
      <button>Log in</button>
    </form>
  )
}