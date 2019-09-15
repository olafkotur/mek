import { SlackService } from './slack';
import { DbService } from './db';
import moment from 'moment';
import { IBookingWithShopData, IBookingData } from '../models/booking';
import { IStatusWithCode } from '../models/request';

export const BookingService = {
  saveBookingInDb: async (data: IBookingData) => {
    let res: IStatusWithCode = { status: true, code: ''};
    await DbService.db.collection('bookings').add(data).catch((err) => {
      console.log(`sendPasswordRecoveryEmail: Error ${err.code}`);
      res = { status: false, code: err.code };
    });
    return res;
  },

  fetchBookingsFromDb: async () => {
    return await DbService.db.collection('bookings').where('uid', '==', DbService.auth.currentUser.uid).get()
    .then((snapshot: any) => {
      const data: any = [];
      snapshot.forEach((doc: any) => data.push(doc.data()));
      return data;
    }).catch((err) => {
      console.warn(`fetchBookingsFromDb: Error ${err}`);
    });
  },

  sendBookingMessageWithData: (data: IBookingWithShopData) => {
    const userEmail = DbService.auth.currentUser.email;
    const msg: string = `
      \`booking\` User requested booking with email: ${userEmail}\`\`\`
      Name: ${data.shopData.name}
      Street: ${data.shopData.address.street}
      City: ${data.shopData.address.city}
      PostCode: ${data.shopData.address.postCode.toUpperCase()}
      Origin Date: ${moment(data.bookingDate).format('dddd Do MMMM YYYY, hh:mm:ss a')}

      Requested Date: ${moment(data.requestedDate).format('dddd Do MMMM YYYY, hh:mm:ss a')}
      Description: ${data.description}\`\`\`
    `;
    SlackService.sendMessage(msg, 'report');
  },
};
