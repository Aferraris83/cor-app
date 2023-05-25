import { useState } from "react"
import uniqueId from 'uniqid'

import { Form } from "../../components/Form"
import { CustomTable } from "../../components/Table"

import styles from './styles.module.css'
import { useGetColumns } from "../../hooks/useGetTableColumns"

export const Home = () => {
    const [task, setTask] = useState({
        title: null,
        priority: null,
        state: null,
        description: null,
    })
    const [tasks, setTasks] = useState([])
    const [editingKey, setEditingKey] = useState('')
    

    const handleChange = ({name, value}) => {
        setTask(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        setTasks(prevState => ([...prevState, {...task, key: uniqueId()}]))
        setTask({
            title: null,
            priority: null,
            state: null,
            description: null
        })
    }

    const handleDelete = (id) => {
        setTasks(prevState => prevState.filter(({key}) => id !== key))
    }

    const handleEdit = (id) => {
        setEditingKey(id)
    }

    const handleSave = (value) => {
        setTasks(prevState => {
            return prevState.map(task => {
                if (task.key === value.key) {
                    return value
                }
                return task
            })
        })
        setEditingKey('')
    }

    const columns = useGetColumns({editingKey, onSave: handleSave, onEdit: handleEdit, onDelete: handleDelete})

    return(
        <div className={styles.home}>
            <Form 
                values={task} 
                onChange={handleChange} 
                onSubmit={handleSubmit} 
            />
            <CustomTable 
                rows={tasks} 
                columns={columns}
            />
        </div>
    )
}