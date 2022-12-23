import clientPromise from '../../db/mongodb';

export default async function submit(req, res) {
  const client = await clientPromise;
  const data = req.body;

  try {
    const db = await client.db();
    const pptCollection = await db.collection('pptdata');
    const result = await pptCollection.bulkWrite(
      data.map((doc) => ({
        updateOne: {
          filter: { 'Facility ID': doc['Facility ID'] },
          update: { $set: doc },
          upsert: true,
        },
      }))
    );
    console.log(result);
    res.json(result);
  } catch (e) {
    console.error(e);
  } /* finally {
    await client.close();
  } */
}
