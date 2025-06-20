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

const CombinedChart: React.FC = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Shared labels for both datasets
        datasets: [
            {
                label: "Analogue Data",
                data: [10, 20, 15, 25, 30, 20],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4, // Smooth curve
                yAxisID: "y1", // Link to the first Y-axis
            },
            {
                label: "Device Status",
                data: [1, 0, 1, 1, 0, 1], // Boolean data
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderWidth: 2,
                tension: 0,
                pointRadius: 5,
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                stepped: true, // Stepped line for boolean data
                yAxisID: "y2", // Link to the second Y-axis
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Combined Analogue and Boolean Chart",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Months",
                },
            },
            y1: {
                type: "linear" as const,
                position: "left" as const,
                title: {
                    display: true,
                    text: "Analogue Values",
                },
                min: 0,
                max: 40,
            },
            y2: {
                type: "linear" as const,
                position: "right" as const,
                title: {
                    display: true,
                    text: "Device Status",
                },
                ticks: {
                    callback: function (tickValue: string | number) {
                        return tickValue === 1 ? "On" : "Off";
                    },
                    stepSize: 1,
                },
                suggestedMin: 0,
                suggestedMax: 1,
                grid: {
                    drawOnChartArea: false, // Prevent grid lines from overlapping
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default CombinedChart;