import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setTask] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setTask('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="add-task">Task</label>
                <input type="text" id="add-task" placeholder="Add Task" value={text} onChange={(e) =>
                setTask(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="add-date-time">Day & Time</label>
                <input type="text" id="add-date-time" placeholder="Add Day & Time" onChange={(e) =>
                setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="set-reminder">Set Reminder</label>
                <input type="checkbox" checked={reminder} id="set-reminder" onChange={(e) =>
                setReminder(e.currentTarget.checked)} />
            </div>   

            <input type="submit" value="Save Task" className="btn btn-block"/>                     
        </form>
    )
}

export default AddTask
