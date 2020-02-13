import ENV from '../../config/environment';
import fresh from './fresh';
import trial from './trial';
import subscribed from './subscribed';

const scenarios = {
  fresh,
  trial,
  subscribed
}

const activeScenario = ENV.MIRAGE_SCENARIO || 'fresh';

export default function(server) {
  const scenario = scenarios[activeScenario];

  if (scenario) {
    scenario(server);
  }

  // plus whatever default scenario code you want
}