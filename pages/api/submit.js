import dbConnect from '../../db/dbConnect';
import FacilityPptData from '../../db/models/FacilityPptData';
import PptDate from '../../db/models/PptDate';

export default async function submit(req, res) {
  await dbConnect();
  const { body: data, method, query } = req;

  try {
    if (method === 'POST') {
      let result;

      if (query.date) {
        result = await PptDate.updateOne(
          { 'Facility ID': 'Updated' },
          { $set: { 'Facility Name': query.date } },
          { upsert: true }
        );
        result.newDate = query.date;
      } else {
        result = await FacilityPptData.bulkWrite(
          data.map((doc) => ({
            updateOne: {
              filter: { 'Facility ID': doc['Facility ID'] },
              update: { $set: doc },
              upsert: true,
            },
          }))
        );
      }
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
