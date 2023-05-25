import { Button } from 'antd'

import { InputsFactory } from '../InputsFactory'

import styles from './styles.module.css'
import { useState } from 'react'
import { INPUTS } from '../../const'

export const Form = ({ values, onChange, onSubmit }) => {
    const [disabled, setDisabled] = useState(true);


    const checkFormValidity = (values) => {
        for (const input of INPUTS) {
          if (input.required && !values[input.name]) {
            return false
          }
        }
        return true
      };

    const handleChange = ({name, value}) => {
        if(typeof value === 'string') {
            onChange({name, value})
        } else {
            onChange({name, value: value.target.value})
        }
        setDisabled(!checkFormValidity({ ...values, [name]: value }))
    }
    return(
        <div className={styles.box}>
            {INPUTS.map((input, i) => (
                <InputsFactory 
                    key={`${input.name}-${i}`} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={(e) => handleChange({name: input.name, value: e})} 
                />
            ))}
            <Button onClick={onSubmit} disabled={disabled}>Crear tarea</Button>
        </div>
    )
}
