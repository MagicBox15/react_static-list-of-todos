import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <p className="UserInfo__name">{user.name}</p>
    <p className="UserInfo__email">{user.email}</p>
  </div>
);