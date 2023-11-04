const client = require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  
export default async (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    console.log("worked");
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: "+19375806869",
        body: "Your child past a level in their curriculum!",
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch((err) => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
}