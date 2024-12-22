"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 1200,
  },
  {
    name: "Feb",
    total: 1500,
  },
  {
    name: "Mar",
    total: 1800,
  },
  {
    name: "Apr",
    total: 2200,
  },
  {
    name: "May",
    total: 2600,
  },
  {
    name: "Jun",
    total: 2400,
  },
  {
    name: "Jul",
    total: 2800,
  },
  {
    name: "Aug",
    total: 3200,
  },
  {
    name: "Sep",
    total: 3600,
  },
  {
    name: "Oct",
    total: 3300,
  },
  {
    name: "Nov",
    total: 3800,
  },
  {
    name: "Dec",
    total: 4200,
  },
]

export function InventoryOverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          className="text-muted-foreground"
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          className="text-muted-foreground"
        />
        <Bar dataKey="total" fill="var(--primary)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

