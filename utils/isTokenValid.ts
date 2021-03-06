import jwt_decode from 'jwt-decode';

const isTokenValid = (token: string): boolean => {
  try {
    const { exp } = (jwt_decode(token) as Record<string, number>);
    return exp < new Date().getTime() / 1000;
  } catch (e) {
    return false;
  }
};

export default isTokenValid;
