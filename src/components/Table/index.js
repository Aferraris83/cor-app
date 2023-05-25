import { Table } from 'antd'

export const CustomTable = ({ rows, columns }) => {

    const tableProps = {
        size: 'middle',
        expandable: { expandedRowRender: (record) => <p>{record.description}</p>},
        showHeader: true,
    }

    return (
        <div style={{margin: '3em 0'}}>
            <Table
                {...tableProps}
                columns={columns}
                dataSource={rows}
            />
        </div>
    )
}
