import {
  FIREBASE_API_KEY,
  GOOGLE_API_KEY,
  SLACK_HOOK_REPORTING,
  SLACK_HOOK_LOG,
} from 'react-native-dotenv';

interface IConfig {
  firebase: { apiKey: string };
  google: { apiKey: string };
  slack: {
    logChannel: string;
    reportChannel: string;
    logHook: string;
    reportHook: string,
  };
  request: { nearbyLimit: number };
}

export const config: IConfig = {
  firebase: { apiKey: FIREBASE_API_KEY || '' },
  google: { apiKey: GOOGLE_API_KEY || '' },
  slack: {
    logChannel: '#dev_logs',
    reportChannel: '#dev_reporting',
    logHook: SLACK_HOOK_LOG || '',
    reportHook: SLACK_HOOK_REPORTING || '',
  },
  request: { nearbyLimit: 10 },
};
