import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const BooleanLineChart: React.FC = () => {
    const data = {
        labels: ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM"], // Example time labels
        datasets: [
            {
                label: "Device Status",
                data: [1, 0, 1, 1, 0, 1], // Example data: 1 for "On", 0 for "Off"
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                tension: 0,
                pointRadius: 5,
                pointBackgroundColor: "rgba(75, 192, 192, 1)",
                stepped: true, // Add this property to make the line stepped
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Boolean Enum Line Chart",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time (Hours)",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Status",
                },
                ticks: {
                    callback: function (tickValue: string | number) {
                        return tickValue === 1 ? "On" : "Off";
                    },
                    stepSize: 1,
                },
                suggestedMin: 0, 
                suggestedMax: 1, 
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default BooleanLineChart;