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
        'XF-Api-Key': process.env.TOOLS_API_KEY,
        'XF-Api-User': process.env.TOOLS_API_USER,
      },
      referrerPolicy: 'origin-when-cross-origin',
    };

    const data = await axios
      .post(`${process.env.XF_API_URL}/auth`, userLoginData, options)
      .then((response) => response.data)
      .catch((e) => {
        console.log(e);
        if (e.response) {
          res
            .status(e.response.status)
            .send({ message: 'There was an error logging in. Make sure the username/password is correct.' });
        }

        if (e.request) {
          res.status(e.request.status).send({ message: 'There was an error with the request.' });
        }
      });

    if (data?.user.secondary_group_ids.length === 0) {
      res.status(401).send({ message: 'You do not have permission to view this content.' });
      return;
    }

    const userGroups = data?.user.secondary_group_ids.filter((id) => validUserGroups.includes(id));
    const userInfo = {
      email: data.user.email,
      gravatar: data.user.gravatar,
      userName: data.user.username,
    };

    if (!userGroups.length) {
      res.status(401).send({ message: 'You do not have permission to view this content.' });
    } else {
      res.status(200).send({ userGroups, userInfo });
    }
  }

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'This method is not allowed.' });
  }
}
