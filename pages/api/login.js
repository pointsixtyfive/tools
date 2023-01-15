import xfConfig from '../../config/xfGroups';
import axios from 'axios';

const validUserGroups = process.env.NODE_ENV === 'development' ? [3, 4, 5] : [xfConfig.tools.ppt];

export default async function login(req, res) {
  if (req.method == 'POST') {
    const userLoginData = req.body;

    const authData = await fetch(`${process.env.API_URL}/auth`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'XF-Api-Key': process.env.API_KEY,
        'XF-Api-User': process.env.API_USER,
      },
      referrerPolicy: 'origin-when-cross-origin',
      body: new URLSearchParams(userLoginData),
    });

    const data = await authData.json();
    console.log(data);

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
}
