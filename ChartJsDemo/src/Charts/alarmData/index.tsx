import React, { useRef, useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

const bellIcon = new Image();
bellIcon.src =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-bell-fill" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.104-14.804a1 1 0 1 0-1.208 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 2.563-1.401 4.021-.246.413-.37.87-.37 1.329C1.229 12.972 2.06 14 3.25 14h9.5c1.19 0 2.021-1.028 2.021-2.65 0-.46-.124-.916-.37-1.329C13.5 8.563 13 7.098 13 6a5.002 5.002 0 0 0-3.896-4.804z"/></svg>';
bellIcon.width = 16;
bellIcon.height = 16;

const AlarmChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const data = [10, 20, 15, 30, 25, 40, 35];
        const bellIndex = 3; // Index to replace with bell icon

        const chart = new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: data.map((_, i) => `Label ${i + 1}`),
                datasets: [
                    {
                        label: 'Demo Data',
                        data,
                        pointStyle: data.map((_, i) =>
                            i === bellIndex
                                ? bellIcon
                                : 'circle'
                        ),
                        pointRadius: data.map((_, i) => (i === bellIndex ? 15 : 5)),
                        pointBackgroundColor: data.map((_, i) => (i === bellIndex ? 'red' : 'blue')),
                        borderColor: 'blue',
                        backgroundColor: 'rgba(255, 25, 0, 0.1)',
                        fill: false,
                        tension: 0.4,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                display: true,
                text: 'Alarm Point',
            },
                    legend: { display: true },
                    tooltip: { enabled: true },
                },
                scales: {
                    x: { display: true },
                    y: { display: true },
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default AlarmChart;