/* eslint-disable no-case-declarations */
// import { Button, Col, Row, Statistic } from "antd";
import { useGetAllSellQuery } from "../../redux/fetchurs/getAllSaleApi";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

// <Row gutter={16}>
//   <Col span={6}>
//     <Statistic title="Daily Order" value={daily.length} prefix={ }/>
//   </Col>
//   <Col span={6}>
//     <Statistic title="Weekly Order" value={weekly.length} />
//     <Button style={{ marginTop: 16 }} type="primary">
//       Recharge
//     </Button>
//   </Col>
//   <Col span={6}>
//     <Statistic title="Monthly Order" value={month.length} />
//   </Col>
//   <Col span={6}>
//     <Statistic title="Yearly Order" value={year.length} />
//   </Col>
//   {/* <Col span={12}>
//   <Statistic title="Active Users" value={112893}  />
// </Col> */}
// </Row>

const DashboardCard= () => {
  const { data: gateData } = useGetAllSellQuery("");
  console.log(gateData)

  const getCountDate = (name: string, data: any) => {
    switch (name) {
      case "daily":
        const today = data?.filter(
          (item: any) =>
            new Date(item.date).toDateString() === new Date().toDateString()
        );
        return today;
      case "weekly":
        const firstDayOfWeek = new Date(new Date());
        firstDayOfWeek.setDate(new Date().getDate() - new Date().getDay());
        const weekly = data?.filter(
          (item: any) => new Date(item.date) >= firstDayOfWeek
        );
        return weekly;
      case "month":
        const month = data?.filter(
          (item: any) =>
            new Date(item.date).getMonth() === new Date().getMonth()
        );
        return month;
      case "year":
        const year = data?.filter(
          (item: any) =>
            new Date(item.date).getFullYear() === new Date().getFullYear()
        );
        return year;
      default:
        return data?.filter(() => true);
    }
  };
  const daily = getCountDate("daily", gateData?.data);
  const weekly = getCountDate("weekly", gateData?.data);
  const month = getCountDate("month", gateData?.data);
  const year = getCountDate("year", gateData?.data);
console.log(daily)
  const data = [
    { name: "Daily Sale", value: daily?.length || 0 },
    { name: "Weekly Sale", value: weekly?.length || 0 },
    { name: " Monthly Sale", value: month?.length || 0 },
    { name: "Yearly Sale", value: year?.length || 0 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel: React.FC<{
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }> = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            isAnimationActive={true}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"

            dataKey="value"
          >
            {data?.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardCard;
