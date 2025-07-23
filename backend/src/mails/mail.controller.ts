import {
    Controller,
    Post,
    Body,
    Res,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MailsService } from './mail.service';
import { SendMailDto } from './dto/send-mail.dto';
@ApiTags('Mail')
@Controller('api/mails')
export class MailsController {
    constructor(private readonly mailsService: MailsService) { }

    // Send
    @Post()
    @ApiOperation({ summary: 'Send mail' })
    create(@Body() sendMailDto: SendMailDto, @Res() response: any): void {
        this.mailsService.send(sendMailDto);

        return response.status(200).json({
            message: 'success',
        });
    }
}
