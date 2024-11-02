import { MongoClient } from 'mongodb';

const uri = 'YOUR_MONGODB_CONNECTION_STRING';
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await client.connect();
      const database = client.db('yourDatabaseName');
      const collection = database.collection('subscribers');

      await collection.insertOne({ email });

      res.status(201).json({ message: 'Subscribed successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error subscribing' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}