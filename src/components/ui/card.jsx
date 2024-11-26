import React from 'react';

export const Card = ({ children }) => (
  <div className="card shadow-lg p-4 bg-white rounded">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="card-header font-bold text-lg mb-2">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

export const CardTitle = ({ children }) => (
  <div className="card-title text-xl font-semibold mb-2">{children}</div>
);
