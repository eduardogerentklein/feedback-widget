import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from 'adapters/MailAdapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
})

export class NodemailerAdapter implements MailAdapter {
  sendMail = async ({ subject, body }: SendMailData) => {
    await transport.sendMail({
      from: 'Eduardo Feedback Widget <oi@feedget.com>',
      to: 'Eduardo Klein <eduardo.klein@catolicasc.org.br>',
      subject: subject,
      html: body
    })
  }
}