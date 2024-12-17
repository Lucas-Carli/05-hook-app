import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    useEffect(() => {
        //     console.log('useEffect called!')
    }, []);

    useEffect(() => {
        //     console.log('formState changed!')
    }, [formState]);

    useEffect(() => {
        //     console.log('email changed!')
    }, [email]);

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control"
                placeholder="fernando@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={ onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>


    )
}
