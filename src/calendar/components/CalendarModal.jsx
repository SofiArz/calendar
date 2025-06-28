import { addHours } from 'date-fns';
import { useState } from 'react';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    const onCloseModal = () => {
        setIsOpen(false)
    }

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChange = (event, name) => {
        setFormValues({
            ...formValues,
            [name]: event
        })
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-overlay"
            closeTimeoutMS={200}
        >
            <h1> New event </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Start date and time</label>
                    <DatePicker
                        selected={formValues.start}
                        onChange={(event) => { onDateChange(event, 'start') }}
                        className='form-control'
                        wrapperClassName="d-block w-100"
                        dateFormat="Pp"
                        showTimeSelect
                    />
                </div>

                <div className="form-group mb-2">
                    <label>End date and time</label>
                    <DatePicker
                        minDate={formValues.start}
                        selected={formValues.end}
                        onChange={(event) => { onDateChange(event, 'end') }}
                        className='form-control'
                        wrapperClassName="d-block w-100"
                        dateFormat="Pp"
                        showTimeSelect
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Title and notes</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Event Title"
                        name="title"
                        value={formValues.title}
                        onChange={onInputChange}
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">A short description</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notes"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Additional information</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <span> Save</span>
                </button>

            </form>

        </Modal>
    )
}
