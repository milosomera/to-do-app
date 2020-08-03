import React from "react";
import MyContext from "./MyContext";
import axios from "axios";

class MyProvider extends React.Component {

    inputChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    addTaskBtn = (task) => {
        let newTask = {
            name: task,
            status: "pending"
        }
        if(this.state.input === "") {
            this.setState({
                errorMessage: "This field is required"
            })
        } else {
            axios.post("https://to-do-app-server.herokuapp.com/tasks", {
                task: newTask
            }).then(res => {
                this.setState({
                    tasks: [...this.state.tasks, res.data],
                    errorMessage: "",
                    input: ""
                })
            })
        }
    }

    deleteBtn = (e) => {
        let deleteTask = [...this.state.tasks]
        deleteTask.map(task => {
            if(e.target.id === task._id) {
                deleteTask.splice(deleteTask.indexOf(task), 1);
            }
            return deleteTask
        })
        this.setState({
            tasks: deleteTask
        })
        axios.delete("https://to-do-app-server.herokuapp.com/tasks/" + e.target.id)
    }

    doneBtn = (e) => {
        let doneTask = [...this.state.tasks]
        doneTask.map(task => {
            if(e.target.id === task._id) {
                task.status = "done"
            }
            return doneTask
        })
        axios.put("https://to-do-app-server.herokuapp.com/tasks/" + e.target.id, {
            status: "done"
        })
        this.setState({
            tasks: doneTask
        })
    }

    state = {
        addTaskBtn: this.addTaskBtn,
        inputChangeHandler: this.inputChangeHandler,
        deleteBtn: this.deleteBtn,
        doneBtn: this.doneBtn,
        input: "",
        errorMessage: "",
        tasks: []
    }

    componentDidMount() {
        axios("https://to-do-app-server.herokuapp.com/tasks")
        .then(res => {
            let tasks = res.data;
            this.setState({
                tasks: tasks
            })
        })
    }

    render() {

        return(
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )

    }

}

export default MyProvider;


// {
//     name: "eat",
//     status: "pending",
//     id: uuid()
// },
// {
//     name: "code",
//     status: "pending",
//     id: uuid()
// },
// {
//     name: "sleep",
//     status: "done",
//     id: uuid()
// }
