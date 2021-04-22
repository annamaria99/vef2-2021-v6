import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCharacters } from '../../lib/swapi';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const after = req.query?.after as string | undefined;
  let characters = null;
  characters = await fetchCharacters(after);

  res.status(200).json(characters);
};
