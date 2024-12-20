import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   id: 123,
//   name: 'Fernando Herrera',
//   email: 'fernando@google.com'
// }

export const UserProvider = ({ children }) => {

const [user, setUser] = useState();

  return (
    /* Creo un objeto */
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
