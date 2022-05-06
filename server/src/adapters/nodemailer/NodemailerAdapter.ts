import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '35a3e800bce9c3',
    pass: '25b319611f6afa'
  }
});

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