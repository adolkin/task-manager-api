const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'tuantest@mailinator.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'tuantest@mailinator.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
