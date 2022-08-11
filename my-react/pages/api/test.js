import dbConnect from '../../utils/dbConnect';

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

  res.json({ test: 'test'});
}