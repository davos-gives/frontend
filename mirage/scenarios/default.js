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

  const organization = server.create('organization', { name: "Barks and Meows Shelter", address1: "1823 East Georiga Street", address2: "305", city: "Vancouver", Province: "British Columbia", postalCode: "V5L2B5", charitableNumber: 12345, nationId: "barksmeows", category: "health" });

  server.create('user', { fname: "ian", lname: "knauer", email: "ian.knauer@davos.gives", organization: organization });

  server.create('campaign', { name: "Default", description: "A fallback campaign that catches all unassigned donations", isActive: true });

  server.create('donation', { receiptNumber: 1, firstName: "Ian", lastName: "Knauer", paymentAmount: 1300, insertedAt: 1590435939283, url: "demo-receipt.pdf" });
  server.create('donation', { receiptNumber: 2, firstName: "Nancy", lastName: "Kwong", paymentAmount: 15000, insertedAt: 1590435939283, url: "demo-receipt.pdf" });
  server.create('donation', { receiptNumber: 3, firstName: "Eric", lastName: "Huang", paymentAmount: 2335, insertedAt: 1590435939283, url: "demo-receipt.pdf" });
  server.create('donation', { receiptNumber: 4, firstName: "Natalia", lastName: "Escobar", paymentAmount: 4039, insertedAt: 1590435939283, url: "demo-receipt.pdf" });
  server.create('donation', { receiptNumber: 5, firstName: "Julia", lastName: "Baker", paymentAmount: 50313, insertedAt: 1590435939283, url: "demo-receipt.pdf" });


  server.create('slug', { name: "Christmas Campaign" });
  server.create('slug', { name: "New Shelter" });

  server.create('receipt', { name: "Default Receipt" });

  // plus whatever default scenario code you want
}