"use client";

import * as React from "react";
import { ResponsiveContainer, Tooltip, Legend } from "recharts";
import type { TooltipProps } from "recharts";
import { cn } from "./utils";

/* ---------------------------------- Types --------------------------------- */

const THEMES = {
  light: "",
  dark: ".dark",
} as const;

type ThemeKey = keyof typeof THEMES;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<ThemeKey, string>;
  }
>;

type ChartContextValue = {
  config: ChartConfig;
};

/* -------------------------------- Context --------------------------------- */

const ChartContext = React.createContext<ChartContextValue | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) {
    throw new Error("useChart must be used within ChartContainer");
  }
  return ctx;
}

/* ------------------------------ ChartContainer ----------------------------- */

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<typeof ResponsiveContainer>["children"];
};

function ChartContainer({
  id,
  className,
  config,
  children,
  ...props
}: ChartContainerProps) {
  const reactId = React.useId();
  const chartId = `chart-${id ?? reactId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        data-slot="chart"
        className={cn(
          "flex aspect-video justify-center text-xs",
          "[&_.recharts-layer]:outline-hidden",
          "[&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/* --------------------------------- Styling -------------------------------- */

function ChartStyle({
  id,
  config,
}: {
  id: string;
  config: ChartConfig;
}) {
  const entries = Object.entries(config).filter(
    ([, v]) => v.color || v.theme
  );

  if (!entries.length) return null;

  const css = Object.entries(THEMES)
    .map(([theme, selector]) => {
      const vars = entries
        .map(([key, value]) => {
          const color = value.theme?.[theme as ThemeKey] ?? value.color;
          return color ? `--color-${key}: ${color};` : "";
        })
        .join("\n");

      return `
${selector} [data-chart="${id}"] {
${vars}
}`;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

/* -------------------------------- Tooltip --------------------------------- */

const ChartTooltip = Tooltip;

function ChartTooltipContent({
  active,
  payload,
  className,
  hideLabel,
  formatter,
}: React.ComponentProps<"div"> &
  TooltipProps<any, any> & {
    hideLabel?: boolean;
    payload?: any[];
  }) {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  return (
    <div
      className={cn(
        "rounded-lg border bg-background px-3 py-2 text-xs shadow-xl",
        className
      )}
    >
      {!hideLabel && (
        <div className="mb-1 font-medium">
          {payload[0]?.name}
        </div>
      )}

      {payload.map((item) => {
        const cfg = resolveConfig(config, item);

        return (
          <div key={item.dataKey} className="flex justify-between gap-2">
            <span className="text-muted-foreground">
              {cfg?.label ?? item.name}
            </span>
            <span className="font-mono font-medium">
              {formatter
                ? formatter(item.value!, item.name!, item, 0, item.payload)
                : item.value?.toLocaleString()}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* --------------------------------- Legend --------------------------------- */

const ChartLegend = Legend;

function ChartLegendContent({
  payload,
  className,
}: React.ComponentProps<"div"> & { payload?: any[] }) {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div className={cn("flex justify-center gap-4", className)}>
      {payload.map((item) => {
        const cfg = resolveConfig(config, item);

        return (
          <div key={item.value} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            {cfg?.label ?? item.value}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------- Utilities -------------------------------- */

function resolveConfig(config: ChartConfig, item: any) {
  const key =
    item.dataKey ??
    item.name ??
    item.payload?.name ??
    "value";

  return config[key];
}

/* --------------------------------- Export --------------------------------- */

export {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};
