import { onSetActiveEvent } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    return {
        events,
        activeEvent,

        setActiveEvent
    }
}
