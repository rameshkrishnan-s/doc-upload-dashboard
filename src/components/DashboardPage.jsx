// components/DashboardPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DashboardPage() {
  const location = useLocation();
  const { documents } = location.state || { documents: [] };
  const navigate = useNavigate();

  const editDocument = (index) => {
    navigate('/upload', { state: { documents, editIndex: index } });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Document Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>Customer {index + 1}</td>
              <td>{doc.type}</td>
              <td>{doc.status}</td>
              <td>
                <button onClick={() => editDocument(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardPage;
