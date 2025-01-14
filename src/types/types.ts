import { Dayjs } from "dayjs";

export interface MenuItem {
    key: string;
    label: string;
    icon: React.ReactNode;
    path: string;
}
export interface RouteElement {
    element: JSX.Element;
}

export interface Filters {
    dateRange: [Dayjs | null, Dayjs | null] | null;
    status: string;
    keyword: string;
}
export interface ReportData {
    key: string;
    date: string;
    name: string;
    status: string;
    amount: number;
    description: string;
}
