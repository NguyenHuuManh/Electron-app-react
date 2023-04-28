import routes, { RouteInterface } from '@renderer/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigator = useNavigate();
  const navigate = ({ path }: RouteInterface) => {
    navigator(path);
  };

  return (
    <div style={{ display: 'flex' }}>
      {routes.map((e) => (
        <button key={e.key} onClick={() => navigate(e)}>
          {e.name}
        </button>
      ))}
    </div>
  );
}

export default Header;
