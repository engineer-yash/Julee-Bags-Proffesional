import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { productAPI, categoryAPI, contactAPI } from '../services/api';
import { HiShoppingBag, HiCollection, HiMail, HiTrendingUp } from 'react-icons/hi';

const Dashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    contacts: 0,
    loading: true,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [productsRes, categoriesRes, contactsRes] = await Promise.all([
        productAPI.getAll(),
        categoryAPI.getAll(),
        contactAPI.getAll(),
      ]);

      setStats({
        products: productsRes.data.count,
        categories: categoriesRes.data.count,
        contacts: contactsRes.data.count,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats({ ...stats, loading: false });
    }
  };

  const statCards = [
    {
      title: 'Total Products',
      value: stats.products,
      icon: HiShoppingBag,
      color: 'bg-blue-500',
      link: '/products',
    },
    {
      title: 'Total Categories',
      value: stats.categories,
      icon: HiCollection,
      color: 'bg-green-500',
      link: '/categories',
    },
    {
      title: 'Contact Messages',
      value: stats.contacts,
      icon: HiMail,
      color: 'bg-yellow-500',
      link: '/contacts',
    },
    {
      title: 'Active Status',
      value: 'Online',
      icon: HiTrendingUp,
      color: 'bg-purple-500',
      isText: true,
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to Julee Bags Admin Panel</p>
        </div>

        {/* Stats Grid */}
        {stats.loading ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading statistics...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.isText ? stat.value : stat.value.toLocaleString()}
                  </p>
                  {stat.link && (
                    <a
                      href={stat.link}
                      className="text-primary text-sm font-medium hover:underline mt-2 inline-block"
                    >
                      View Details →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Welcome Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a
                href="/products"
                className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <p className="font-semibold text-blue-900">Manage Products</p>
                <p className="text-sm text-blue-600">Add, edit, or delete products</p>
              </a>
              <a
                href="/categories"
                className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                <p className="font-semibold text-green-900">Manage Categories</p>
                <p className="text-sm text-green-600">Organize your product categories</p>
              </a>
              <a
                href="/contacts"
                className="block p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
              >
                <p className="font-semibold text-yellow-900">View Messages</p>
                <p className="text-sm text-yellow-600">Check customer inquiries</p>
              </a>
            </div>
          </div>

          {/* System Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Platform</span>
                <span className="font-semibold">Julee Bags CMS</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Version</span>
                <span className="font-semibold">1.0.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Database</span>
                <span className="font-semibold">MongoDB Atlas</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                  Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
