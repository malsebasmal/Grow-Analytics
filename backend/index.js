import { listen } from "./app.js"

listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})