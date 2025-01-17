
import axios from 'axios';

const apiUrl = 'https://labresult.app.cloud.cbh.kth.se/labresult/register'; // Change this URL to your actual API endpoint
const apiUrlForPatients = 'https://patientmanagement.app.cloud.cbh.kth.se/patients/register';

export const sendEventToApi = async (event: any) => {
    try {
        const response = await axios.post(apiUrl, event);
        console.log('Event sent successfully:', response.data);

    } catch (error) {
        console.error('Error sending event:', error);

    }
};

export const sendPatientToApi = async (patient: any) => {
    try {
        const response = await axios.post(apiUrlForPatients, patient);
        console.log('Event sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending event:', error);
    }
};
