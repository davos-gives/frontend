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

  server.create('campaign', {name: "Help us find a new home", defaultImage: 1});
  server.create('campaign', {name: "Cat food for cool cats", defaultImage: 2});
  server.create('campaign', {name: "Dog food from dudes", defaultImage: 3});

  // plus whatever default scenario code you want
}