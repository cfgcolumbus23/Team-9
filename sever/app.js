const express = require("express");
const twilio = require('twilio');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});

app.get("/send-sms", (request, response) => {
    const status = {
        "Status": "Sending SMS"
    };

    // Twilio code

    // Your Twilio Account SID. Get a free account at twilio.com/try-twilio
    TWILIO_ACCOUNT_SID = "***REMOVED***"
    // Your Twilio Auth Token. You can get it at twilio.com/console
    TWILIO_AUTH_TOKEN = "***REMOVED***"
    // The Twilio phone number you want to use to send SMS. Get one in the Twilio Console
    TWILIO_PHONE_NUMBER = "+18559130253"


    try {

        const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

        const { sid } = client.messages.create({
            from: TWILIO_PHONE_NUMBER,
            to: +15133449912,
            body: "Your child finished section 1 of thier math curriculum!",
        });

        response.send({
            status: 'success',
            message: `SMS sent to ${request.body.to}. Message SID: ${sid}`,
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({
            status: 'error',
            message: 'Failed to send SMS. Check server logs for more details.',
        });
    }


    response.send(status);
});