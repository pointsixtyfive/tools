// import clientPromise from '../../db/mongodb';
import dbConnect from '../../db/dbConnect';
import FacilityPptData from '../../db/models/FacilityPptData';

export default async function submit(req, res) {
  // const client = await clientPromise;
  await dbConnect();
  const { body: data, method } = req;

  try {
    // const db = await client.db();
    if (method === 'POST') {
      // const pptCollection = await db.collection('pptdata');
      const result = await FacilityPptData.bulkWrite(
        data.map((doc) => ({
          updateOne: {
            filter: { 'Facility ID': doc['Facility ID'] },
            update: { $set: doc },
            upsert: true,
          },
        }))
      );
      console.log(result);
      res.status(201).json(result);
    } else {
      console.error(`METHOD ${method} NOT SUPPORTED`);
      res.status(405).json({ status: 405 });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: 500, data: { ok: 0, errorMsg: 'There was an error.' } });
  }
}
