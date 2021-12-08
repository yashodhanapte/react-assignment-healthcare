import React, { useState } from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  DOCTOR_NAME,
  TIME_ZONE,
  DAY_OF_WEEK,
  AVAILABLE_AT,
  AVAILABLE_UNTIL,
  BOOK_APPOINTMENT,
} from '../../common/constant';
import {
  timeInStringFormat,
  replaceColonWithEmptyString
} from '../../common/utils';
import Button from '../../components/Button/Button';
import Fade from '@mui/material/Fade';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:250,
  bgcolor: 'background.paper',
  border: '5px solid #009879',
  boxShadow: 24,
  p: 4,
}
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} style={{ backgroundColor: "#009879" }} />;
});

const Home = ({ docData }) => {
  // state to toggle opening and closing of modal
  const [modalOpen, setModalOpen] = useState(false);

  // state to store selected Doctor from list
  const [selectedDoc, setSelectedDoc] = useState({});

  // state to store selected date
  const [selectedDate, setSelectedDate] = useState('');

  // state to store number equivalent of days of the week, for example: Monday = 1, Tuesday = 2, etc.
  const [numberEquivalent, setNumberEquivalent] = useState('');

  // state to toggle opening and closing of snackBar
  const [openSnackbar, setOpenSnackbar] = useState(false);

  /** 
   * handleButtonClick Function
   * Description: This function is called when user clicks on Book button in table row.
   * It sets the selected doctor and number equivalent of day of week to state and opens the modal.
   * @param {*} doc - selected doctor from the clicked row
   */
  const handleButtonClick = (doc) => {
    setModalOpen(true);
    setSelectedDoc(doc);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setNumberEquivalent(weekDays.indexOf(doc.Day_of_Week));
  };

  /**
   * handleCloseModal Function
   * Description: This is used to close the Modal and reset the date value in its datepicker.
   */
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDate('');
  };

  /**
   * handleCloseSnackbar function
   * Description: This is used to close the Snackbar manually (either by clicking outside or the cross button or esc key)
   * @param {} event - event param can be used to track more details of event
   * @param {*} reason - reason param is used to know the reason for closing modal e.g click away or close button
   */
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  /**
   * availableTimeSlots Function
   * Description: This function is used to return available timeslots for the selected doctor.
   * @param {*} date - selected date used to fetch hours and minutes
   * @uses timeInStringFormat function to get hours / minutes from a date and convert it to String format
   * @returns true if selected timeslot is within the available range for that doctor on that day
   */
  const availableTimeSlots = (date) => {
    return Number(timeInStringFormat(date, 'hours') + (timeInStringFormat(date, 'minutes'))) >= Number(replaceColonWithEmptyString(selectedDoc.Available_at))
      && Number(timeInStringFormat(date, 'hours') + (timeInStringFormat(date, 'minutes'))) <= Number(replaceColonWithEmptyString(selectedDoc.Available_until))
  }

  /**
   * submitBooking Function
   * Description: This function is used to open trigger Modal close and call the Snackbar to display success message.
   */
  const submitBooking = () => {
    setOpenSnackbar(true);
    handleCloseModal();
  }

  return (
    <div className="main-container">
      
      <Fade in={true}>
      <table className="content-table">
        <thead>
          <tr>
            <th>{DOCTOR_NAME}</th>
            <th>{TIME_ZONE}</th>
            <th>{DAY_OF_WEEK}</th>
            <th>{AVAILABLE_AT}</th>
            <th>{AVAILABLE_UNTIL}</th>
            <th>{BOOK_APPOINTMENT}</th>
          </tr>
        </thead>
        <tbody>
          {docData.map((doc) => (
            <tr key={doc.key}>
              <td>{doc.Name}</td>
              <td>{doc.Timezone}</td>
              <td>{doc.Day_of_Week}</td>
              <td>{doc.Available_at}</td>
              <td>{doc.Available_until}</td>
              <td><Button handleButtonClick={()=>handleButtonClick(doc)} title="Book"/></td>
            </tr>
          ))}
        </tbody>
      </table>
      </Fade>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedDoc.Name ? `Book an appointment for ${selectedDoc.Name}` : ''}
          </Typography>
          <div className="datepicker-container">
          <DatePicker
            showTimeSelect
            selected={selectedDate}
              onChange={(date) => { setSelectedDate(date)}}
            dateFormat="MMMM d, yyyy h:mm aa"
            filterDate={(date) => date.getDay() === numberEquivalent}
            filterTime={availableTimeSlots}
            placeholderText="Select Date and Time"
          />
          </div>
          <div className="button-container">
            <Button disabled={selectedDate === ''} handleButtonClick={submitBooking} title="Confirm"/>
          </div>
        </Box>
      </Modal>
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar} >
        <Alert onClose={handleCloseSnackbar}>
          Appointment Confirmed with {selectedDoc.Name}
        </Alert>
      </Snackbar>
    </div>

  )
}
export default Home
