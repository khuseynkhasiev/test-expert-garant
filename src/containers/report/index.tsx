import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { Filters, ReportData } from "../../types/types";
import { ReportComponent } from "../../components/report";

export const ReportContainer: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({
        dateRange: null,
        status: "",
        keyword: "",
    });

    const [data] = useState<ReportData[]>([
        {
            key: "1",
            date: "2025-01-12",
            name: "John Doe",
            status: "Completed",
            amount: 200,
            description: "Description 1",
        },
        {
            key: "2",
            date: "2025-01-11",
            name: "Jane Smith",
            status: "Pending",
            amount: 150,
            description: "Description 2",
        },
        {
            key: "3",
            date: "2025-01-10",
            name: "Alice Johnson",
            status: "Completed",
            amount: 300,
            description: "Description 3",
        },
    ]);

    const [filteredData, setFilteredData] = useState<ReportData[]>(data);

    const handleFilterChange = (changedValues: Partial<Filters>) => {
        setFilters({ ...filters, ...changedValues });
    };

    const handleSearch = () => {
        const { dateRange, status, keyword } = filters;

        const filtered = data.filter((item) => {
            const matchesDate =
                !dateRange ||
                !dateRange[0] ||
                (dayjs(item.date).isAfter(dateRange[0], "day") &&
                    dayjs(item.date).isBefore(dateRange[1], "day"));

            const matchesStatus =
                !status || item.status.toLowerCase() === status.toLowerCase();

            const matchesKeyword =
                !keyword ||
                item.name.toLowerCase().includes(keyword.toLowerCase());

            return matchesDate && matchesStatus && matchesKeyword;
        });

        setFilteredData(filtered);
    };

    const columns: ColumnsType<ReportData> = [
        {
            title: "Дата",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
        },
        {
            title: "Имя",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Статус",
            dataIndex: "status",
            key: "status",
            filters: [
                { text: "Completed", value: "Completed" },
                { text: "Pending", value: "Pending" },
            ],
            onFilter: (value, record) =>
                record.status.toLowerCase() === (value as string).toLowerCase(),
        },
        {
            title: "Сумма",
            dataIndex: "amount",
            key: "amount",
            sorter: (a, b) => a.amount - b.amount,
        },
        {
            title: "Описание",
            dataIndex: "description",
            key: "description",
        },
    ];

    return (
        <ReportComponent
            handleFilterChange={handleFilterChange}
            handleSearch={handleSearch}
            columns={columns}
            filteredData={filteredData}
        />
    );
};
