import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Title,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Title);

const MultiTraceChart: React.FC = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: Array.from({ length: 10 }, (_, i) => ({
            label: `Line ${i + 1}`,
            data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
            borderColor: `hsl(${(i * 36) % 360}, 70%, 50%)`,
            backgroundColor: `hsl(${(i * 36) % 360}, 70%, 50%, 0.5)`,
            borderWidth: 2,
            fill: false,
        })),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            tooltip: {
                mode: "index" as const,
                intersect: false,
            },
            title: {
                display: true,
                text: "MultiTrace",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Months",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Values",
                },
            },
        },
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default MultiTraceChart;