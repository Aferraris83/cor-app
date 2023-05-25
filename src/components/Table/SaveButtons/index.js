import { Button, Space, Tooltip } from "antd"

export const TableButton = ({ onClickFirst, onclickSecond, titleOne, titleTwo, iconOne, iconTwo }) => {
    return (
        <Space size="middle">
            <Tooltip title={titleOne}>
                <Button onClick={onClickFirst} shape="circle">
                    {iconOne}
                </Button>
            </Tooltip>
            <Tooltip title={titleTwo}>
                <Button onClick={onclickSecond} shape="circle">
                    {iconTwo}
                </Button>
            </Tooltip>
        </Space>
    )
}