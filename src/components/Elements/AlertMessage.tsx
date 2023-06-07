interface IProps {
    show: boolean
    message: string | null
    type: "danger" | "success"
}

const AlertMessage: React.FC<IProps> = ({show, message, type}) => {
    return (
        <div className={show ? `alert alert-${type} alert-fade show` : `alert alert-${type} hidden`}>
            {message}
        </div>
    )
}

export default AlertMessage