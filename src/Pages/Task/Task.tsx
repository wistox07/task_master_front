import { useEffect } from "react";
import { useLoginStore } from "../../Stores/LoginStore"
import { taskService } from "../../Services/TaskService";
import { useTaskStore } from "../../Stores/TaskStore";



export default function Task () {
    const {
        getTasksMe: callGetTaskMe
    } = taskService;
    const { isToken, setToken, setUser } = useLoginStore();
    const { isTasks, setTasks } = useTaskStore();


    const logout = () => {
        setToken(null)
        setUser(null)
    }

    const editTask = () => {
        console.log("edit")
    }

    const deleteTask = () => {
        console.log("delete")
    }



    const  getTasksMe = async () => {
        let response =await callGetTaskMe()
        if(response.error){
            console.log(response.message, response.message_detail)
            return
        }
        setTasks(response.tasks)
    }

    useEffect(() => {
        getTasksMe()
    }, []);

    return (
        <div>
            Task
            {isToken && (
                    <button className="btn btn-danger" onClick={logout}>
                    CERRAR SESIÓN
                </button>
            )}
            {
                isTasks.length > 0 ? (
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Expiration Date</td>
                                <td>Status</td>
                                <td>User</td>
                                <td>Actions</td>
                            </tr>

                        </thead>
                        <tbody>
                        {
                            isTasks.map((v,i) => (
                                <tr key={i}>
                                    <td>{v.title}</td>
                                    <td>{v.description}</td>
                                    <td>{v.expiration_date}</td>
                                    <td>{v.status}</td>
                                    <td>{v.user}</td>
                                    <button className="btn btn-danger" onClick={editTask}>Edit </button>
                                    <button className="btn btn-danger" onClick={deleteTask}>Delete </button>

                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                ) : (
                    <p>No hay datos</p>
                )

            }
        </div>
    )
} 