import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class MailsService {
    constructor(
        private readonly mailService: MailerService
    ) { }

    // Add
    send(sendMailDto: SendMailDto): void {
        try {
            this.mailService.sendMail({
                from: sendMailDto.from,
                to: sendMailDto.to,
                subject: sendMailDto.subject,
                text: sendMailDto.message
            })
        } catch (err) {
            console.log(err);
        }
    }
}
