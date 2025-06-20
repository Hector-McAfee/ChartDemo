import React, { useEffect, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const LiveDataChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: [], // Initial empty labels
                        datasets: [
                            {
                                label: "Live Data",
                                data: [], // Initial empty data
                                borderColor: "rgba(75, 192, 192, 1)",
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                borderWidth: 2,
                                tension: 0.4,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        animation: false, // Disable animations for smoother updates
                        scales: {
                            x: {
                                type: "category",
                                title: {
                                    display: true,
                                    text: "Time",
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "Value",
                                },
                            },
                        },
                    },
                });
            }
        }

        const interval = setInterval(() => {
            if (chartInstanceRef.current) {
                const chart = chartInstanceRef.current;
                const now = new Date().toLocaleTimeString();
                const randomValue = Math.floor(Math.random() * 100);

                // Add new data point
                chart.data.labels?.push(now);
                chart.data.datasets[0].data.push(randomValue);

                // Remove old data points to keep the chart manageable
                if ((chart.data.labels ?? []).length > 20) {
                    chart.data.labels = (chart.data.labels ?? []).slice(-20);
                    chart.data.datasets[0].data = chart.data.datasets[0].data.slice(-20);
                }

                chart.update("none"); // Use "none" to avoid animation during updates
            }
        }, 1000);

        return () => {
            clearInterval(interval);
            chartInstanceRef.current?.destroy();
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default LiveDataChart;