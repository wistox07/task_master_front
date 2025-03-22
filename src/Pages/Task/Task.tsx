import { useEffect } from "react";
import { useLoginStore } from "../../Stores/LoginStore"
import { taskService } from "../../Services/TaskService";
import { useTaskStore } from "../../Stores/TaskStore";
import ContentLoaderTable from "../../Components/Common/SkeletonLoading/ContentLoaderTable";
import { Card, CardBody } from "reactstrap";



export default function Task () {
    const {
        getTasksMe: callGetTaskMe
    } = taskService;
    const { isToken, setToken, setUser } = useLoginStore();
    const { isTasks, setTasks , isLoading , setLoading } = useTaskStore();


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
        setLoading(true)
        let response =await callGetTaskMe()

        if(response.error){
            console.log(response.message, response.message_detail)
            return
        }
        setLoading(false)
        setTasks(response.tasks)
    }

    useEffect(() => {
        getTasksMe()
    }, []);

    return (
        <div>
            {isToken && (
                    <button className="btn btn-danger" onClick={logout}>
                    CERRAR SESIÓN
                </button>
            )}
                <Card>
                <CardBody>
            {isLoading ? (
                    <ContentLoaderTable/>
                ) : isTasks.length > 0 ? (
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
                                    <td>
                                    <button className="btn btn-danger" onClick={editTask}>Edit </button>
                                    <button className="btn btn-danger" onClick={deleteTask}>Delete </button>
                                    </td>
                                    

                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                ) : (
                    <p>No hay datos</p>
                )}
                </CardBody>
                </Card>
        </div>
    )
} 