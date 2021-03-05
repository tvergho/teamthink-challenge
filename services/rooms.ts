import type { Room } from 'types/room';
import axios from 'axios';
import { apiUrl } from 'lib/constants';

const URL = `${apiUrl}/rooms`;

export const getRooms = async (): Promise<[Room]> => {
  const { data } = await axios.get(URL);
  console.log(data);
  return data;
};
