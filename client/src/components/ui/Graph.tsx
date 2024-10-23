"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 586 },
  { month: "February", desktop: 405 },
  { month: "March", desktop: 337 },
  { month: "April", desktop: 673 },
  { month: "May", desktop: 609 },
  { month: "June", desktop: 414 },
];

const chartConfig = {
  desktop: {
    label: "Customers",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function GraphDemo() {
  return (
    <div className="min-h-[200px] w-full">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={2} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={1} />
        </BarChart>
      </ChartContainer>
      <p className="text-center font-bold">Customer chart per month</p>
    </div>
  );
}
