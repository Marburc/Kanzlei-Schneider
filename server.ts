import express from 'express';
import { config } from 'dotenv';

config();

const app = express();
app.use(express.json());

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, anliegen } = req.body;

  if (!firstName || !lastName) {
    res.status(400).json({ error: 'Vorname und Nachname sind erforderlich.' });
    return;
  }

  try {
    const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        ...(email && { email }),
        ...(phone && { phone }),
        locationId: GHL_LOCATION_ID,
        source: 'Website Kanzlei Schneider',
        tags: ['Website-Anfrage'],
      }),
    });

    const contactData = await contactRes.json() as { contact?: { id: string } };

    if (!contactRes.ok) {
      console.error('GHL API Error:', contactData);
      res.status(500).json({ error: 'Fehler beim Anlegen des Kontakts in GHL.' });
      return;
    }

    const contactId = contactData.contact?.id;

    if (anliegen && contactId) {
      await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Version': '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: `Anliegen: ${anliegen}` }),
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Serverfehler. Bitte versuche es erneut.' });
  }
});

app.listen(3010, () => console.log('API server on http://localhost:3010'));
