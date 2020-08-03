import React, {useContext} from "react";
import MyContext from "../MyContext";

const AddTaskForm = () => {

    const {addTaskBtn} = useContext(MyContext);
    const {inputChangeHandler} = useContext(MyContext);
    const {input, errorMessage} = useContext(MyContext);

    let addTaskBtnHandler = () => {
        addTaskBtn(input)
    }

    return(
        <div className="task-form">
            <div>Task Name</div>
            <input type="text" value={input} onChange={inputChangeHandler}/><br/>
            <span><small>{errorMessage}</small></span><br/>
            <button type="button" onClick={addTaskBtnHandler}>Add Task</button>
        </div>
    )

}

export default AddTaskForm;