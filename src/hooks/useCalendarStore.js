import { onAddNewEvent, onSetActiveEvent } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
        //TODO: send to backend

        if (calendarEvent._id) { //Update

        } else { //Insert
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }

    }

    return {
        events,
        activeEvent,

        setActiveEvent,
        startSavingEvent
    }
}
