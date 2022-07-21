import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Tasks } from '../pages/Tasks';

export const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<SignUp />}></Route>
      <Route path="/register" element={<SignIn />}></Route>
      <Route path="/task" element={<Tasks />}></Route>
    </Routes>
  );
};
