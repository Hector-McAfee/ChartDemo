import React from 'react';
import { Line } from 'react-chartjs-2';
import {

Chart as ChartJS,
LineElement,
PointElement,
LinearScale,
Title,
Tooltip,
Legend,
CategoryScale,

} from 'chart.js';
import type { ChartData,ScriptableContext, ChartOptions } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const LIMIT_HIGH = 10;
const LIMIT_LOW = -10;

// Generate some analogue-like data
const generateData = (points: number) => {
const data: number[] = [];
let value = 0;
for (let i = 0; i < points; i++) {
    value += Math.sin(i / 5) + (Math.random() - 0.5) * 2;
    data.push(Number(value.toFixed(2)));
}
return data;
};

const analogueData = generateData(30);

const data: ChartData<'line'> = {
labels: analogueData.map((_, i) => i + 1),
datasets: [
    {
        label: 'Analogue Data',
        data: analogueData,
        borderColor: '#007bff',
        backgroundColor: 'rgba(0,123,255,0.1)',
        pointBackgroundColor: (ctx: ScriptableContext<'line'>) => {
            const value = ctx.raw as number;
            if (value > LIMIT_HIGH || value < LIMIT_LOW) return 'red';
            return '#007bff';
        },
        pointBorderColor: (ctx: ScriptableContext<'line'>) => {
            const value = ctx.raw as number;
            if (value > LIMIT_HIGH || value < LIMIT_LOW) return 'red';
            return '#007bff';
        },
        pointRadius: 5,
        fill: false,
        tension: 0.3,
    },
    // Upper limit line
    {
        label: 'Upper Limit',
        data: Array(analogueData.length).fill(LIMIT_HIGH),
        borderColor: 'red',
        borderDash: [10, 5],
        pointRadius: 0,
        fill: false,
        borderWidth: 2,
    },
    // Lower limit line
    {
        label: 'Lower Limit',
        data: Array(analogueData.length).fill(LIMIT_LOW),
        borderColor: 'red',
        borderDash: [10, 5],
        pointRadius: 0,
        fill: false,
        borderWidth: 2,
    },
],
};

const options: ChartOptions<'line'> = {
responsive: true,
plugins: {
    legend: {
        display: true,
    },
    title: {
        display: true,
        text: 'Analogue Data with Limits',
    },
},
scales: {
    y: {
        min: Math.min(LIMIT_LOW - 5, ...analogueData),
        max: Math.max(LIMIT_HIGH + 5, ...analogueData),
        grid: {
            color: (ctx) => {
                if (ctx.tick.value === LIMIT_HIGH || ctx.tick.value === LIMIT_LOW) {
                    return 'red';
                }
                return undefined;
            },
            lineWidth: (ctx) => {
                if (ctx.tick.value === LIMIT_HIGH || ctx.tick.value === LIMIT_LOW) {
                    return 2;
                }
                return 1;
            },
        },
    },
},
};

const LimitsChart: React.FC = () => (
<div>
    <Line data={data} options={options} />
</div>
);

export default LimitsChart;