import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
} from "chart.js";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale
);

const NonContiguousDataChart: React.FC = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const dataWithGaps = [10, 20, null, 40, null, 60];

    const dataTraceBetweenPoints = {
        labels,
        datasets: [
            {
                label: "Trace Between Points",
                data: dataWithGaps,
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                spanGaps: true, // Connects the missing points
            },
        ],
    };

    const dataNoTraceBetweenPoints = {
        labels,
        datasets: [
            {
                label: "No Trace Between Points",
                data: dataWithGaps,
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                spanGaps: false, // Does not connect the missing points
            },
        ],
    };

    const optionsTraceBetweenPoints = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Non Contiguous",
            },
        },
    };

    const optionsNoTraceBetweenPoints = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Non Contiguous",
            },
        },
    };

    return (
        <div>
            <Line data={dataTraceBetweenPoints} options={optionsTraceBetweenPoints} />
            <Line data={dataNoTraceBetweenPoints} options={optionsNoTraceBetweenPoints} />
        </div>
    );
};

export default NonContiguousDataChart;