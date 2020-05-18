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

export default function (server) {
  const scenario = scenarios[activeScenario];

  if (scenario) {
    scenario(server);
  }

  server.create('campaign', { name: "Default", description: "A fallback campaign that catches all unassigned donations" });
  server.create('campaign', { name: "Our New Shelter", description: "Donations for the shared facility to house our animals" });
  server.create('campaign', { name: "Dog Food", description: "Donations specifically for feeding dogs at our shelter" });

  server.create('donation', { receiptNumber: 1, firstName: "Ian", lastName: "Knauer", paymentAmount: 1300, insertedAt: 123033, url: "demo-receipt.pdf" });
  server.create('donation', { receiptNumber: 2, firstName: "Nancy", lastName: "Kwong", paymentAmount: 15000, insertedAt: 30194, url: "demo-receipt.pdf" });
  server.create('donation', { receiptNumber: 3, firstName: "Eric", lastName: "Huang", paymentAmount: 2335, insertedAt: 4993, url: "demo-receipt.pdf" });
  server.create('donation', { receiptNumber: 4, firstName: "Natalia", lastName: "Escobar", paymentAmount: 4039, insertedAt: 430321, url: "demo-receipt.pdf" });
  server.create('donation', { receiptNumber: 5, firstName: "Julia", lastName: "Baker", paymentAmount: 50313, insertedAt: 104939, url: "demo-receipt.pdf" });

  // plus whatever default scenario code you want
}