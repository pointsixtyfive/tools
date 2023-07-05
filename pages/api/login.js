import xfConfig from '../../config/xfGroups';

async function login(req, res) {
  const validUserGroups = [xfConfig.tools.ppt];

  if (req.method == 'POST') {
    const userLoginData = JSON.parse(req.body);
    const xfResponse = await fetch(`${process.env.XF_API_URL}/auth`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'XF-Api-Key': process.env.TOOLS_API_KEY,
        'XF-Api-User': process.env.TOOLS_API_USER,
      },
      referrerPolicy: 'origin-when-cross-origin',
      body: new URLSearchParams(userLoginData),
    }).catch((e) => {
      if (e.response.status === 400) {
        res
          .status(e.response.status)
          .send({ message: 'There was an error logging in. Make sure the username/password is correct.' });
        return;
      }

      if (e.request) {
        res.status(e.request.status).send({ message: 'There was an error with the request.' });
        return;
      }
    });

    const data = await xfResponse.json();

    if (data.success) {
      if (data.user?.secondary_group_ids.length === 0) {
        res.status(401).send({ message: 'You do not have permission to view this content.' });
        return;
      }

      const userGroups = data.user?.secondary_group_ids.filter((id) => validUserGroups.includes(id));

      if (!userGroups.length) {
        res.status(401).send({ message: 'You do not have permission to view this content.' });
        return;
      }

      const userInfo = {
        email: data.user.email,
        avatar: data.user.avatar_urls?.o,
        userName: data.user.username,
      };

      res.status(200).send({ userGroups, userInfo });
      return;
    }

    if (data.errors) {
      res.status(500).send({ message: 'There was an error authenticating with the server.' });
      return;
    }
  }

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'This method is not allowed.' });
    return;
  }

  res.status(500).send({ message: 'An unknown error occurred.' });
}

export default login;
