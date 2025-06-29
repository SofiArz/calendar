import { onUpdateEvent, onAddNewEvent, onSetActiveEvent, onDeleteEvent } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const saveCalendarEvent = async (calendarEvent) => {
        //TODO: send to backend

        if (calendarEvent._id) { //Update
            dispatch(onUpdateEvent({ ...calendarEvent }))
        } else { //Insert
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }

    }

    const deleteCalendarEvent = () => {
        dispatch(onDeleteEvent())
    }

    return {
        events,
        activeEvent,

        setActiveEvent,
        saveCalendarEvent,
        deleteCalendarEvent
    }
}
