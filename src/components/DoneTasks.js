import React, {useContext} from "react";
import MyContext from "../MyContext";
import TaskRow from "./TaskRow";

const DoneTasks = () => {

    const {tasks} = useContext(MyContext);

    let doneTasks = tasks.filter(task => {
        return task.status === "done"
      })

    return(
        <React.Fragment>
            {
                doneTasks.length === 0 ? 
                <div className="no-done">No Done Tasks</div> : 
                <table>
                    <thead>
                        <tr>
                            <th>Done Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TaskRow tasks={doneTasks}/>
                    </tbody>
                </table>
            }
        </React.Fragment>
    )

}

export default DoneTasks;