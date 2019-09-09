import { SlackService } from './slack';
import { auth } from './db';
import moment from 'moment';
import { IBookingWithShopData } from '../models/booking';

export const BookingService = {
  sendBookingMessageWithData: (data: IBookingWithShopData) => {
    const userEmail = auth.currentUser.email;
    const msg: string = `
      \`booking\` User requested booking with email: ${userEmail}\`\`\`
      Name: ${data.shopData.name}
      Street: ${data.shopData.address.street}
      City: ${data.shopData.address.city}
      PostCode: ${data.shopData.address.postCode.toUpperCase()}
      Origin Date: ${moment().format('dddd Do MMMM YYYY, hh:mm:ss a')}

      Requested Date: ${moment(data.date).format('dddd Do MMMM YYYY, hh:mm:ss a')}
      Description: ${data.description}\`\`\`
    `;
    SlackService.sendMessage(msg, 'report');
  },
};
