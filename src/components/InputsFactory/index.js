import { Input, Select } from 'antd'
const { TextArea } = Input

export const InputsFactory = (props) => {
    const factory = {
        input: <Input {...props} />,
        select: <Select {...props} />,
        textArea:<TextArea {...props} />
    }
    return factory[props.type] || null
}