import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Study time',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 6),
    bgColor: '#fafafa',
    users: {
        _id: '123',
        name: 'Sofia'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null,

    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload
        }
    }

})

export const { onSetActiveEvent } = calendarSlice.actions;