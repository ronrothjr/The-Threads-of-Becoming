// AWS Lambda function for form submission emails
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

exports.handler = async (event) => {
    const { name, email, message } = JSON.parse(event.body);
    
    const params = {
        Destination: {
            ToAddresses: ['your-email@creativeadvance.org']
        },
        Message: {
            Body: {
                Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` }
            },
            Subject: { Data: 'New Contact Form Submission' }
        },
        Source: 'noreply@creativeadvance.org'
    };
    
    await ses.sendEmail(params).promise();
    
    return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: true })
    };
};