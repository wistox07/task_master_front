import { useLoginStore } from "../../Stores/LoginStore"



export default function Task () {
    const { isToken, setToken, setUser } = useLoginStore();

    const logout = () => {
        setToken(null)
        setUser(null)
    }
    return (
        <div>
            Task
            {isToken && (
                    <button className="btn btn-danger" onClick={logout}>
                    CERRAR SESIÓN
                </button>
            )}
        </div>
    )

} 