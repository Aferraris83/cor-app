import { useState } from "react"
import { DeleteTwoTone, EditTwoTone, SaveTwoTone, CloseCircleTwoTone } from '@ant-design/icons'

import { PRIORITY_OPTIONS, STATE_OPTIONS } from "../const"
import { InputsFactory } from "../components/InputsFactory"
import { TableButton } from "../components/Table/SaveButtons"

export const useGetColumns = ({ editingKey, onSave, onEdit, onDelete }) => {
    const [state, setState] = useState({
        priority: '',
        state: ''
    })

    const handleChange = ({name, value}) => {
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const isEditing = (record) => record.key === editingKey
    const columns = [
        {
            title: 'Titulo',
            dataIndex: 'title',
            ellipsis: true
        },
        {
            title: 'Prioridad',
            dataIndex: 'priority',
            ellipsis: true,
            editable: true,
            defaultSortOrder: 'descend',
            filters: PRIORITY_OPTIONS,
            onFilter: (value, record) => record.priority.indexOf(value) === 0,
            render: (value, record) => {
                const edit = isEditing(record)
                return edit ? 
                <InputsFactory
                    type='select'
                    name='priority'
                    placeholder='priority'
                    options={PRIORITY_OPTIONS}
                    onChange={(e) => handleChange({name: 'priority', value: e})}
                /> : 
                value        
            }
        },
        {
            title: 'Estado',
            dataIndex: 'state',
            ellipsis: true,
            editable: true,
            filters: STATE_OPTIONS,
            onFilter: (value, record) => record.state.indexOf(value) === 0,
            render: (value, record) => {
                const edit = isEditing(record)
                return edit ?
                    <InputsFactory 
                        type='select'
                        name='state'
                        placeholder='priority'
                        options={STATE_OPTIONS}
                        onChange={(e) => handleChange({name: 'state', value: e})}
                    /> :
                    value
            }
        },
        {
            title: 'Accion',
            key: 'action',
            render: (value, record) => {
                const edit = isEditing(record)
                const onClickFirst = () => edit ? onSave({...value, ...state}) : onDelete(value.key)
                const onClickSecond = () => onEdit(edit ? '' : value.key)
                const titleOne = edit ? 'Guardar' : 'Borrar'
                const titleTwo = edit ? 'Cancelar' : 'Editar'
                const iconOne = edit ? <SaveTwoTone /> : <DeleteTwoTone />
                const iconTwo = edit? <CloseCircleTwoTone /> : <EditTwoTone />
                return (
                    <TableButton
                        onClickFirst={onClickFirst}
                        onclickSecond={onClickSecond} 
                        titleOne={titleOne} 
                        titleTwo={titleTwo}
                        iconOne={iconOne}
                        iconTwo={iconTwo}
                    />
                )
            },
        },
    ]
      
    return columns
}