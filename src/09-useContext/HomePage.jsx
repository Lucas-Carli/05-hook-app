import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  /* El HomePage interpreta el contexto, basado en él decide que renderiza */
  const { user} = useContext( UserContext );

  return (
    <>
      <h1>HomePage <small> {user?.name}</small></h1>
      <hr />

      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}
