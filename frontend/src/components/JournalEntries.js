/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JournalEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  // Fetch journal entries from the backend
  const fetchEntries = () => {
    axios.get('http://localhost:3001/entries').then((response) => {
      setEntries(response.data);
    });
  };

  // Function to format the date to local format
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Parse the date
    return date.toLocaleDateString('en-GB'); // Format to dd/mm/yyyy
  };

  const deleteEntry = (id) => {
    axios.delete(`http://localhost:3001/delete-entry/${id}`).then(() => {
      fetchEntries(); // Refresh entries after deletion
    });
  };

  return (
    <div className="container">
      <h2>Journal Entries</h2>
      <ul className="list-group">
        {entries.map((entry) => (
          <li key={entry.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{entry.title}</h5>
              <p>{entry.content}</p>
              <small>{formatDate(entry.date)}</small> {/* Display formatted date *//*}
            </div>
            <button className="btn btn-danger" onClick={() => deleteEntry(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JournalEntries;*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JournalEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/entries').then((response) => {
      setEntries(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Your Journal Entries</h2>
      <ul className="list-group">
        {entries.map((entry) => (
          <li key={entry.id} className="list-group-item">
            <h5>{entry.title}</h5>
            <p>{entry.content}</p>
            <small>{entry.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JournalEntries;

