import React, {useState} from 'react';
import {generateMockEvents} from '../components/MockDataGenerator';
import {sendEventToApi} from '../services/ApiService';
import "../styles/LoginPageComponentStyle.css"

const DataGenerationPage: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(event.target.value));
    };

    const handleGenerateData = async () => {
        if (count <= 0 || !Number.isInteger(count)) {
            setFeedback('Please enter a valid positive integer for count.');
            return;
        }


        // Assuming your API service method accepts an array of events
        try {
            const mockData = generateMockEvents(count);
            // Loop through mockData and send each event individually
            for (const event of mockData) {
                await sendEventToApi(event);
            }

            console.log('All events sent successfully');
        } catch (error) {
            console.error('Error sending events:', error);
        }
    };

    return (
        <div className="inner-body-page">
            <h1>Data Generation Page</h1>
            <div className="width-of-input">
                <label>
                    Enter the number of events to generate:
                    <input type="number" value={count} onChange={handleCountChange}/>
                </label>

                <button onClick={handleGenerateData}>Generate Data</button>
                {feedback && <p className="feedback-message">{feedback}</p>}
            </div>
        </div>
    );
};

export default DataGenerationPage;