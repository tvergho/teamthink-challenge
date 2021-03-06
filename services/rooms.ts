import type { Room } from 'types/room';
import axios from 'axios';
import { apiUrl } from 'lib/constants';

const URL = `${apiUrl}/rooms`;

export const getRooms = async (): Promise<[Room]> => {
  const { data } = await axios.get(URL);
  return data;
};

export const requestAccess = async (roomId: string, username: string): Promise<string> => {
  const { data } = await axios.post(`${URL}/${roomId}`, { username });
  return data.token;
};

export const createRoom = async (name: string): Promise<Room> => {
  const { data } = await axios.post(URL, { name });
  return data;
};
