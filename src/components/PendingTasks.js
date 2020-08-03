import React, {useContext} from "react";
import MyContext from "../MyContext";
import TaskRow from "./TaskRow";

const PendingTasks = () => {

    const {tasks} = useContext(MyContext);

    let pendingTasks = tasks.filter(task => {
        return task.status === "pending";
    })

    return(
        <React.Fragment>
            {
                pendingTasks.length === 0 ? 
                <div className="no-pending">No Pending Tasks</div> : 
                <table>
                    <thead>
                        <tr>
                            <th>Pending Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TaskRow tasks={pendingTasks}/>
                    </tbody>
                </table>
            }
        </React.Fragment>
    )

}

export default PendingTasks;