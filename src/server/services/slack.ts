import { config } from '../../config';
import Slack from 'react-native-slack-webhook';

export const SlackService = {
  sendMessage: (message: string, type: 'log' | 'report') => {
    const target: { hook: string, channel: string } = {
      hook: '',
      channel: '',
    };

    if (type === 'log') {
      target.hook = config.slack.logHook;
      target.channel = config.slack.logChannel;
    }
    else if (type === 'report') {
      target.hook = config.slack.reportHook;
      target.channel = config.slack.reportChannel;
    }

    new Slack(target.hook).post(message, target.channel);
  },
};
