import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)

    return(
        <div id="error-page">
            <h1>¡Ups!</h1>
            <p>Lo sentimos, ha ocurrido un error inesperado</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage