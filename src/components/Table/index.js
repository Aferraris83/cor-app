import { Table } from 'antd'

import styles from './styles.module.css'

export const CustomTable = ({ rows, columns }) => {

    const tableProps = {
        size: 'middle',
        expandable: { expandedRowRender: (record) => <p>{record.description}</p>},
        showHeader: true,
    }

    return (
        <div className={styles.table}>
            <Table
                {...tableProps}
                columns={columns}
                dataSource={rows}
            />
        </div>
    )
}
