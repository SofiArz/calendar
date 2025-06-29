import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {
    const { deleteCalendarEvent, activeEvent } = useCalendarStore();

    const handleDelete = () => {
        deleteCalendarEvent()
    }

    return (
        <button
            className='btn btn-danger fab fab-delete'
            onClick={handleDelete}
            style={{
                display: !!activeEvent && !!activeEvent._id ? '' : 'none'
            }}
        >
            <i className='fas fa-trash-alt'></i>
        </button>
    )
}
