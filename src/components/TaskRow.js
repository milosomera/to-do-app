import React, {useContext} from "react";
import MyContext from "../MyContext";

const TaskRow = (props) => {

    const {deleteBtn} = useContext(MyContext);
    const {doneBtn} = useContext(MyContext);

    let tasks = props.tasks.map(task => {
        if(task.status === "pending") {
            return(
                <tr key={task.name}>
                    <td>
                        {task.name}
                        <button id={task._id} onClick={deleteBtn} className="delete-btn">x</button>
                        <button id={task._id} onClick={doneBtn} className="done-btn">done</button>
                    </td>
                </tr>
            )
        } else {
            return(
                <tr key={task.name}>
                    <td>{task.name}<button id={task._id} onClick={deleteBtn} className="delete-btn">x</button></td>
                </tr>
            )
        }
    })

    return(
        <React.Fragment>
            {tasks}
        </React.Fragment>
    );

}

export default TaskRow;