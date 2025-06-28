
export const CalendarEvent = ({ event }) => {
    const { title, users } = event;
   
    return (
        <>
            <strong>{title}</strong>
            <span> - {users.name}</span>
        </>
    )
}
