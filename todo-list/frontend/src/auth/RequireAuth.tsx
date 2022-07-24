/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

interface Local {
  id: string;
  email: string;
  token: string;
}

export const RequireAuth = ({ children }: Props) => {
  const user = JSON.parse(localStorage.getItem('user') as string) as Local;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
