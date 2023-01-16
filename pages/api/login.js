import axios from 'axios';
import xfConfig from '../../config/xfGroups';

export default async function login(req, res) {
  const validUserGroups = [xfConfig.tools.ppt];

  if (req.method == 'POST') {
    const userLoginData = req.body;

    const options = {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'XF-Api-Key': process.env.API_KEY,
        'XF-Api-User': process.env.API_USER,
      },
      referrerPolicy: 'origin-when-cross-origin',
    };

    const data = await axios
      .post(`${process.env.API_URL}/auth`, userLoginData, options)
      .then((res) => res.data)
      .catch((e) => console.error(e));

    //TODO: set up error handling, this doesnt work w/ axios
    if (data.errors) {
      res.status(400).send({ error: data.errors[0].message });
      return;
    }

    if (!data.user.secondary_group_ids) {
      res.status(401).send('You do not have permission to view this content.');
      return;
    }

    const userGroups = data.user.secondary_group_ids.filter((id) => validUserGroups.includes(id));
    const userInfo = {
      email: data.user.email,
      gravatar: data.user.gravatar,
      userName: data.user.username,
    };

    if (!userGroups.length) {
      res.status(401).send('You do not have permission to view this content.');
    } else {
      res.status(200).send({ userGroups, userInfo });
    }
  }

  if (req.method !== 'POST') {
    res.status(405).send('This method is not allowed.');
  }
}
