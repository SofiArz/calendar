import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, CalendarModal, Navbar } from '../'
import { localizer } from '../../helpers'
import { useCalendarStore, useUiStore } from '../../hooks'

export const CalendarPage = () => {
    const { openDateModal } = useUiStore()
    const { events } = useCalendarStore()
    const [view, setView] = useState(localStorage.getItem('lastView') || 'month')
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }
        return { style }
    }

    const onDoubleClick = (event) => { openDateModal() }
    const onSelect = (event) => { console.log({ click: event }) }
    const onViewChange = (event) => {
        localStorage.setItem('lastView', event)
        setView(event)
    }

    return (
        <>
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                defaultView={view}
                startAccesor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px)', paddingBottom: '8px' }}
                eventPropGetter={eventStyleGetter}
                views={['month', 'week', 'day']}
                view={view}
                onView={onViewChange}
                components={
                    {
                        event: CalendarEvent
                    }
                }
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
            />
            <CalendarModal></CalendarModal>
        </>
    )
}