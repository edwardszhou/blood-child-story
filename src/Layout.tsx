import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="bg-primary-light min-h-screen max-w-screen p-4">
      <Outlet />
    </div>
  );
}
