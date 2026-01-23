import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { contactAPI } from '../services/api';
import { HiTrash, HiMail, HiPhone, HiCalendar } from 'react-icons/hi';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await contactAPI.getAll();
      setContacts(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      alert('Error loading contact messages');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await contactAPI.delete(id);
        alert('Message deleted successfully!');
        fetchContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert(error.response?.data?.message || 'Error deleting message');
      }
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-gray-600 mt-1">Customer inquiries and messages</p>
        </div>

        {/* Messages List */}
        {loading ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-gray-500">Loading messages...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <HiMail className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No contact messages yet.</p>
              </div>
            ) : (
              contacts.map((contact) => (
                <div
                  key={contact._id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Contact Info */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {contact.name}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <HiMail className="w-4 h-4 mr-1" />
                              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                                {contact.email}
                              </a>
                            </div>
                            {contact.phone && (
                              <div className="flex items-center">
                                <HiPhone className="w-4 h-4 mr-1" />
                                <a href={`tel:${contact.phone}`} className="hover:text-primary">
                                  {contact.phone}
                                </a>
                              </div>
                            )}
                            <div className="flex items-center">
                              <HiCalendar className="w-4 h-4 mr-1" />
                              {new Date(contact.createdAt).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="mb-3">
                        <p className="text-sm font-semibold text-gray-500 mb-1">Subject:</p>
                        <p className="text-lg font-semibold text-gray-900">{contact.subject}</p>
                      </div>

                      {/* Message */}
                      <div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Message:</p>
                        <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                      </div>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete message"
                    >
                      <HiTrash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Contacts;
