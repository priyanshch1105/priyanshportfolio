import type { TooltipProps, LegendProps } from "recharts";

const t: TooltipProps<any, any> & { payload?: any[] } = {
    active: true,
    payload: []
};
const p = t.payload;

const l: LegendProps & { payload?: any[] } = {
    payload: []
};
