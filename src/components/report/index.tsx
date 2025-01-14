import { Table, Form, Button, DatePicker, Select, Input, Row, Col } from "antd";
import { Filters, ReportData } from "../../types/types";
import { Dayjs } from "dayjs";
import { ColumnsType } from "antd/es/table";

const { RangePicker } = DatePicker;
const { Option } = Select;

interface ReportComponentProps {
    handleFilterChange: (changedValues: Partial<Filters>) => void;
    handleSearch: () => void;
    columns: ColumnsType<ReportData>;
    filteredData: ReportData[];
}

export const ReportComponent: React.FC<ReportComponentProps> = (props) => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Отчет</h2>
            <Form layout="vertical" onValuesChange={props.handleFilterChange}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Интервал дат" name="dateRange">
                            <RangePicker
                                onChange={(dates) =>
                                    props.handleFilterChange({
                                        dateRange: dates as [Dayjs, Dayjs],
                                    })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Статус" name="status">
                            <Select
                                placeholder="Выберите статус"
                                onChange={(value) =>
                                    props.handleFilterChange({ status: value })
                                }
                            >
                                <Option value="">Все</Option>
                                <Option value="Completed">Completed</Option>
                                <Option value="Pending">Pending</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Ключевое слово" name="keyword">
                            <Input
                                placeholder="Поиск по имени"
                                onChange={(e) =>
                                    props.handleFilterChange({
                                        keyword: e.target.value,
                                    })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" onClick={props.handleSearch}>
                    Применить фильтры
                </Button>
            </Form>
            <Table
                style={{ marginTop: "20px" }}
                columns={props.columns}
                dataSource={props.filteredData}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};
