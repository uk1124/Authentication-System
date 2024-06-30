import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';


const secret = process.env.JWT_SECRET || 'your_secret_key';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (username === 'user' && password === 'password') {
      const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
