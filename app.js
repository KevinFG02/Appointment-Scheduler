// Import the express module
import express from 'express';

// Create an instance of an express app
const app = express();

// Define a port number for the server to listen on
const PORT = 3003;

// Appointment Data 
const appointments = [];

// Enable static file serving
app.use(express.static('public'));

// Access form data through req.body
app.use(express.urlencoded({extended: true}));

// Define a default route ("/")
app.get('/', (req, res) => {
    //res.send('Hello World');
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Confirm route
app.post('/confirm-appointment', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});