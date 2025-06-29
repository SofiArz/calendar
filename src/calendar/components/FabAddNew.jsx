import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent(
            {
                title: '',
                notes: '',
                start: new Date(),
                end: addHours(new Date(), 6),
                bgColor: '#fafafa',
                users: {
                    _id: '123',
                    name: 'Sofia'
                }
            }
        )

        openDateModal();
    }

    return (
        <button
            className='btn btn-primary fab fab-add'
            onClick={handleClickNew}
        >
            <i className='fas fa-plus'></i>
        </button>
    )
}
