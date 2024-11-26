import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';



const RestaurantReviewAnalytics = () => {
  // Datos simulados de 7000 reseñas para Express, Salón y Barra Libre
  const sentimentData = [
    { name: 'Positivas', value: 4550, color: '#4CAF50' },
    { name: 'Negativas', value: 1750, color: '#F44336' },
    { name: 'Neutrales', value: 700, color: '#2196F3' }
  ];

  const detailedCategoryBreakdown = [
    { category: 'Express', positive: 2100, negative: 650, neutral: 250 },
    { category: 'Salón', positive: 1450, negative: 580, neutral: 270 },
    { category: 'Barra Libre', positive: 1000, negative: 520, neutral: 180 }
  ];

  const totalReviews = sentimentData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Sentiment Distribution Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Distribución General de Sentimientos</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="90%"
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
              >
                {sentimentData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [
                  `${value} (${((value / totalReviews) * 100).toFixed(1)}%)`, 
                  name
                ]}
              />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">Total de Reseñas: {totalReviews}</p>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Category Sentiment Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Análisis Detallado por Servicio</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={detailedCategoryBreakdown}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="positive" stackId="a" fill="#4CAF50" name="Positivas" />
              <Bar dataKey="neutral" stackId="a" fill="#2196F3" name="Neutrales" />
              <Bar dataKey="negative" stackId="a" fill="#F44336" name="Negativas" />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">Desglose de Servicios</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantReviewAnalytics;