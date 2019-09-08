import { IShopData } from '../models/shop';
import { SlackService } from './slack';
import { auth } from './db';
import moment from 'moment';

export const BookingService = {
  sendBookingMessageWithData: (data: IShopData) => {
    const userEmail = auth.currentUser.email;
    const msg: string = `
      \`booking\` User requested booking with email: ${userEmail}\`\`\`
      Name: ${data.name}

      Street: ${data.address.street}
      City: ${data.address.city}
      PostCode: ${data.address.postCode.toUpperCase()}

      Date: ${moment().format('dddd Do MMMM YYYY, hh:mm:ss a')}\`\`\`
    `;
    SlackService.sendMessage(msg, 'report');
  },
};
