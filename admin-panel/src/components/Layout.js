import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  HiHome, 
  HiShoppingBag, 
  HiCollection, 
  HiMail, 
  HiLogout,
  HiMenu,
  HiX
} from 'react-icons/hi';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { admin, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: HiHome },
    { name: 'Products', path: '/products', icon: HiShoppingBag },
    { name: 'Categories', path: '/categories', icon: HiCollection },
    { name: 'Contact Messages', path: '/contacts', icon: HiMail },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 bg-primary text-white">
            <h1 className="text-xl font-bold">Julee Bags Admin</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Admin info & logout */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {admin?.email?.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3 flex-1 overflow-hidden">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {admin?.email}
                </p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <HiLogout className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar (mobile) */}
        <div className="lg:hidden bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600"
            >
              <HiMenu className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
            <div className="w-6" /> {/* Spacer */}
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
