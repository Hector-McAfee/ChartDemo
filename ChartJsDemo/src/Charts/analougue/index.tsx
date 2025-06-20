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

const AnalogueChart = () => {
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Analogue Data",
            data: [10, 20, 15, 25, 30, 20],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4, // Smooth curve
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
            text: "Analogue Data Chart Example",
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