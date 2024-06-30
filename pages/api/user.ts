import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'JWT_SECRET' ;

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      try {
        const user = jwt.verify(token, secret);
        res.status(200).json(user);
      } catch (error) {
        res.status(403).json({ message: 'Forbidden' });
      }
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
