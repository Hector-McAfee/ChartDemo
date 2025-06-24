import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const FanState = {
    Off: 0,
    Eco: 1,
    Slow: 2,
    Medium: 3,
    High: 4,
} as const;

const fanStateLabels = ["Off", "Eco", "Slow", "Medium", "High"];

const dataPoints = [
    { time: "10:00", state: FanState.Off },
    { time: "10:10", state: FanState.Eco },
    { time: "10:20", state: FanState.Slow },
    { time: "10:30", state: FanState.Medium },
    { time: "10:40", state: FanState.High },
    { time: "10:50", state: FanState.Off },
];

const chartData = {
    labels: dataPoints.map((d) => d.time),
    datasets: [
        {
            label: "Fan State",
            data: dataPoints.map((d) => d.state),
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            stepped: true,
            fill: false,
            pointRadius: 5,
            pointHoverRadius: 7,
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: (context: import("chart.js").TooltipItem<"line">) => {
                    const value = context.parsed.y;
                    return `State: ${fanStateLabels[value]}`;
                },
            },
        },
    },
    scales: {
        y: {
            type: "linear" as const,
            min: -0.5, // Add padding below 0
            max: 4.5,  // Add padding above 4
            beginAtZero: true,
            ticks: {
                stepSize: 1,
                callback: function (value: string | number) {
                    return fanStateLabels[Number(value)];
                },
            },
            title: {
                display: true,
                text: "Fan State",
            },
        },
        x: {
            title: {
                display: true,
                text: "Time",
            },
        },
    },
};

const EnumChart: React.FC = () => (
    <div style={{ width: "100%", height: "100%" }}>
        <Line data={chartData} options={chartOptions} />
    </div>
);

export default EnumChart;
