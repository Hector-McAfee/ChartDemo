import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import type { TooltipItem } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LocaleMultiChart: React.FC = () => {
    const [locale, setLocale] = useState("en-US");

    const monthNames = ["January", "February", "March", "April", "May", "June"].map((month, index) =>
        new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date(2023, index))
    );

    const data = {
        labels: monthNames,
        datasets: [
            {
                label: new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(0, "month") + " Sales",
                data: [3000, 2000, 4000, 5000, 6000, 7000],
                backgroundColor: "rgba(75, 192, 192, 0.5)",
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
                text: new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date()) + " Sales Data",
            },
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<'bar'>) => {
                        return new Intl.NumberFormat(locale, {
                            style: "currency",
                            currency: "USD",
                        }).format(context.raw as number);
                    },
                },
            },
        },
    };

    const handleLocaleChange = (newLocale: string) => {
        setLocale(newLocale);
    };

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                <button onClick={() => handleLocaleChange("en-US")}>English (US)</button>
                <button onClick={() => handleLocaleChange("fr-FR")}>French (FR)</button>
                <button onClick={() => handleLocaleChange("de-DE")}>German (DE)</button>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default LocaleMultiChart;