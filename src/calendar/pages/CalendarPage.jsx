import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { Navbar } from '../'

import { localizer } from '../../helpers'

const events = [{
    title: 'Study time',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 6),
    bgColor: '#fafafa',
    users: {
        _id: '123',
        name: 'Sofia'
    }
}]

export const CalendarPage = () => {
    const [view, setView] = useState('month')
    const eventStyleGetter = (event, start, end, isSelected) => {
        console.log(event, start, end, isSelected)
    }
    return (
        <>
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccesor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px)', paddingBottom: '8px' }}
                eventPropGetter={eventStyleGetter}
                views={['month', 'week', 'day']} 
                view={view}
                onView={setView}
            />
        </>
    )
}