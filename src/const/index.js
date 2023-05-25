export const PRIORITY_OPTIONS = [
    {
        value: 'alta',
        text: 'Alta'
    },
    {
        value: 'media',
        text: 'Media'
    },
    {
        value: 'baja',
        text: 'Baja'
    },
]

export const STATE_OPTIONS = [
    {
        value: 'nueva',
        text: 'nueva',
    },
    {
        value: 'en proceso',
        text: 'en proceso',
    },
    {
        value: 'finalizada',
        text: 'finalizada',
    },
]

export const INPUTS = [
    {
        type: 'input',
        name: 'title',
        placeholder: 'Titulo',
        style: {width: '45%'},
        required: true
    },
    {
        type: 'select',
        name: 'priority',
        placeholder: 'priority',
        style: {width: '24%', minWidth: '24%',},
        required: true,
        options: PRIORITY_OPTIONS
    },
    {
        type: 'select',
        name: 'state',
        placeholder: 'Estado',
        style: {width: '24%', minWidth: '24%'},
        required: true,
        options: STATE_OPTIONS
    },
    {
        type: 'textArea',
        name: 'description',
        placeholder: 'Descripcion',
        style: {width: '100%'},
        rows: 4,
        required: true
    },
]
