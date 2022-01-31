import { useState } from 'react';
import {
  Pie, PieChart as RePieChart, ResponsiveContainer, Sector, Cell,
} from 'recharts';

const renderActiveShape = (props) => {
  // const RADIAN = Math.PI / 180;
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value,
  } = props;
  // const sin = Math.sin(-RADIAN * midAngle);
  // const cos = Math.cos(-RADIAN * midAngle);
  // const sx = cx + (outerRadius + 10) * cos;
  // const sy = cy + (outerRadius + 10) * sin;
  // const mx = cx + (outerRadius + 20) * cos;
  // const my = cy + (outerRadius + 20) * sin;
  // const ex = mx + (cos >= 0 ? 1 : -1) * 11;
  // const ey = my;
  // const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill={fill}>
        {value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey + 5} textAnchor={textAnchor} fill={fill}>
        {value}
      </text> */}
    </g>
  );
};

function PieChart({
  data = [], width, height, dataKey = 'value', outerRadius, innerRadius, sector = false,
}) {
  const [activeDonutIndex, setActiveDonutIndex] = useState(0);

  const sectorProps = sector ? {
    activeIndex: activeDonutIndex,
    activeShape: renderActiveShape,
    onMouseEnter: (_, i) => setActiveDonutIndex(i),
  } : {};

  return (
    <ResponsiveContainer>
      <RePieChart width={width} height={height}>
        <Pie
          {...sectorProps}
          data={data}
          dataKey={dataKey}
          outerRadius={outerRadius}
          innerRadius={innerRadius}
        >
          {data.map((el) => <Cell fill={el.color} />)}
        </Pie>
      </RePieChart>
    </ResponsiveContainer>
  );
}

export default PieChart;
