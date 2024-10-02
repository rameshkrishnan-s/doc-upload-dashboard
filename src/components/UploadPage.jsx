// components/UploadPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
  const [files, setFiles] = useState([
    { name: '', type: 'PAN Card', status: 'Under Review' },
    { name: '', type: 'Aadhar Card', status: 'Under Review' },
    { name: '', type: 'Salary Slip', status: 'Under Review' },
  ]);
  const [uploaded, setUploaded] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    newFiles[index].name = file.name;
    setFiles(newFiles);
  };

  const handleUpload = () => {
    if (files.every(file => file.name !== '')) {
      setUploaded(true);
      alert('Files uploaded successfully!');
    } else {
      alert('Please upload all 3 files');
    }
  };

  const deleteFile = (index) => {
    const newFiles = [...files];
    newFiles[index].name = '';
    setFiles(newFiles);
  };

  const goToDashboard = () => {
    navigate('/dashboard', { state: { documents: files } });
  };

  return (
    <div>
      <h2>Upload Documents</h2>
      {files.map((file, index) => (
        <div key={index}>
          <label>{file.type}:</label>
          {file.name ? (
            <div>
              <p>{file.name} ({file.status})</p>
              <button onClick={() => deleteFile(index)}>Delete</button>
            </div>
          ) : (
            <input type="file" onChange={(e) => handleFileChange(index, e.target.files[0])} />
          )}
        </div>
      ))}
      <button onClick={handleUpload}>Upload</button>

      {uploaded && (
        <div>
          <p>Documents uploaded! Go to dashboard to view details.</p>
          <button onClick={goToDashboard}>Go to Dashboard</button>
        </div>
      )}
    </div>
  );
}

export default UploadPage;
