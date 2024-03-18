import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../stylesheet/Stats.css"

const Stats = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (myChart) {
        myChart.destroy(); // Destroy the previous chart instance
      }
      const ctx = chartRef.current.getContext('2d');
      myChart = new Chart(ctx, {
        type:"pie",
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Growth',
            backgroundColor: 'rgba(7,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [30,50,70,90,94,97],
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Growth by months',
              fontSize: 40,
            },
            legend: {
              display: true,
              position: 'right',
            },
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, []);

  return (
    <section className='stats'>
      <h1 style={{color:"white"}}>Moonshine Stats</h1>
      <section className='stats-graph'>
        <canvas ref={chartRef}></canvas>
      </section>
    </section>
  );
};

export default Stats;
