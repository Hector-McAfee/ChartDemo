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
import zoomPlugin from "chartjs-plugin-zoom";
import type { ChartOptions } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

const AnalogueChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Analogue Data",
                data: [10, 20, 15, 25, 30, 20],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4,
            },
        ],
    };
    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Analogue Data Chart Example with zoom and Pan",
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: "xy",
                    modifierKey: "ctrl",
                },
                zoom: {
                    pinch: {
                        enabled: true, // Enable pinch zoom for touch screens
                    },
                    wheel: {
                        enabled: true,
                    },
                    mode: "xy",
                },
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
                min: 0,
                max: 40,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default AnalogueChart;