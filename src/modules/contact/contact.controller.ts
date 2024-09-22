import { Controller, Get, Body, Param, Put, Post } from '@nestjs/common';
import { ContactService } from './services/contact.service';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new contact' })
  @ApiResponse({ status: 201, description: 'Contact created successfully.' })
  create(@Body() createContactDto: any) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of contact' })
  @ApiResponse({ status: 200, description: 'Contact retrieved successfully.' })
  findAll() {
    return this.contactService.findFirst();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a contact' })
  @ApiResponse({ status: 200, description: 'Contact updated successfully.' })
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }
}
