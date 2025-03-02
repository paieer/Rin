import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockChart = () => {
  const [chartType, setChartType] = useState('close');
  
  // 股票数据处理
  const rawData = [
    {date:"2024-09-03",close:119.6,high:122.67,low:118.8,open:121.37,volume:544600},
    {date:"2024-09-04",close:117.49,high:119.67,low:117.22,open:119.27,volume:622600},
    {date:"2024-09-05",close:116.98,high:117.62,low:116.09,open:117.51,volume:603200},
    {date:"2024-09-06",close:115.27,high:118.68,low:114.79,open:116.98,volume:643200},
    {date:"2024-09-09",close:118.62,high:119.05,low:116.09,open:116.17,volume:726200},
    {date:"2024-09-10",close:120.95,high:120.99,low:117.21,open:118.26,volume:800400},
    {date:"2024-09-11",close:120.87,high:121.01,low:118.63,open:120.45,volume:792200},
    {date:"2024-09-12",close:120.01,high:120.61,low:117.49,open:120.61,volume:659300},
    {date:"2024-09-13",close:121.89,high:122.03,low:119.84,open:120.49,volume:446200},
    {date:"2024-09-16",close:122.66,high:123.47,low:121.5,open:122.85,volume:622600},
    {date:"2024-09-17",close:122.57,high:123.36,low:121.12,open:123.36,volume:533300},
    {date:"2024-09-18",close:124.44,high:126.48,low:121.66,open:122.57,volume:920600},
    {date:"2024-09-19",close:126.33,high:127.85,low:125.38,open:126.66,volume:728200},
    {date:"2024-09-20",close:122.75,high:124.9,low:121.62,open:124.78,volume:1349700},
    {date:"2024-09-23",close:121.93,high:124.2,low:121.5,open:123.85,volume:365300},
    {date:"2024-09-24",close:124.79,high:125.29,low:121.48,open:122.29,volume:638100},
    {date:"2024-09-25",close:121.95,high:125.43,low:121.45,open:124.84,volume:562600},
    {date:"2024-09-26",close:126.19,high:126.37,low:122.81,open:123.58,volume:771700},
    {date:"2024-09-27",close:125.91,high:127.76,low:125.34,open:126.4,volume:680500},
    {date:"2024-09-30",close:127.6,high:127.66,low:125.18,open:125.56,volume:669500},
    {date:"2024-10-01",close:124.29,high:127.68,low:124.27,open:127.55,volume:695200},
    {date:"2024-10-02",close:124.93,high:125.84,low:122.58,open:123.87,volume:643400},
    {date:"2024-10-03",close:123.95,high:124.47,low:122.81,open:124.21,volume:599300},
    {date:"2024-10-04",close:123.81,high:125.89,low:123.61,open:125.2,volume:431300},
    {date:"2024-10-07",close:122.39,high:123.0,low:121.29,open:122.94,volume:573500},
    {date:"2024-10-08",close:121.89,high:123.0,low:121.62,open:122.15,volume:439900},
    {date:"2024-10-09",close:121.37,high:122.46,low:120.73,open:121.89,volume:533700},
    {date:"2024-10-10",close:120.09,high:121.18,low:119.9,open:120.84,volume:388200},
    {date:"2024-10-11",close:121.37,high:122.7,low:119.9,open:119.9,volume:575700},
    {date:"2024-10-14",close:122.77,high:123.03,low:120.92,open:121.32,volume:515300},
    {date:"2024-10-15",close:124.21,high:125.94,low:123.38,open:124.46,volume:937500},
    {date:"2024-10-16",close:120.04,high:124.35,low:119.03,open:123.84,volume:903400},
    {date:"2024-10-17",close:118.91,high:122.4,low:118.06,open:121.56,volume:702100},
    {date:"2024-10-18",close:119.6,high:120.11,low:118.19,open:119.93,volume:711400},
    {date:"2024-10-21",close:119.18,high:119.57,low:117.76,open:119.57,volume:735800},
    {date:"2024-10-22",close:118.71,high:118.93,low:116.36,open:118.28,volume:758500},
    {date:"2024-10-23",close:118.43,high:119.34,low:116.97,open:118.01,volume:844100},
    {date:"2024-10-24",close:116.07,high:119.69,low:116.06,open:118.56,volume:730400},
    {date:"2024-10-25",close:116.26,high:117.34,low:115.2,open:116.67,volume:733600},
    {date:"2024-10-28",close:117.42,high:118.7,low:116.34,open:117.6,volume:772700},
    {date:"2024-10-29",close:117.69,high:118.35,low:116.32,open:117.08,volume:479000},
    {date:"2024-10-30",close:119.96,high:122.94,low:116.78,open:118.23,volume:1004100},
    {date:"2024-10-31",close:118.52,high:120.07,low:117.44,open:119.33,volume:946500},
    {date:"2024-11-01",close:120.97,high:124.11,low:119.83,open:119.83,volume:1474300},
    {date:"2024-11-04",close:124.75,high:128.75,low:120.68,open:122.47,volume:2389100},
    {date:"2024-11-05",close:125.89,high:125.93,low:121.36,open:123.22,volume:855900},
    {date:"2024-11-06",close:124.79,high:129.42,low:120.53,open:128.96,volume:1441900},
    {date:"2024-11-07",close:123.93,high:126.09,low:123.43,open:125.37,volume:829300},
    {date:"2024-11-08",close:122.4,high:123.9,low:118.91,open:123.1,volume:999700},
    {date:"2024-11-11",close:120.57,high:122.03,low:118.95,open:121.48,volume:1293800},
    {date:"2024-11-12",close:120.28,high:120.69,low:119.59,open:119.93,volume:691100},
    {date:"2024-11-13",close:119.67,high:120.78,low:119.27,open:120.16,volume:808700},
    {date:"2024-11-14",close:115.98,high:119.52,low:115.81,open:119.52,volume:732500},
    {date:"2024-11-15",close:109.46,high:117.47,low:109.16,open:115.17,volume:1817400},
    {date:"2024-11-18",close:109.41,high:110.74,low:108.94,open:109.46,volume:1299200},
    {date:"2024-11-19",close:109.85,high:110.11,low:107.11,open:108.42,volume:843900},
    {date:"2024-11-20",close:111.27,high:111.3,low:108.48,open:110.26,volume:952200},
    {date:"2024-11-21",close:111.04,high:114.06,low:109.66,open:111.31,volume:1375000},
    {date:"2024-11-22",close:111.96,high:112.56,low:109.11,open:111.04,volume:1143900},
    {date:"2024-11-25",close:114.59,high:115.15,low:110.89,open:112.93,volume:1408800},
    {date:"2024-11-26",close:115.0,high:115.17,low:112.23,open:113.57,volume:1013600},
    {date:"2024-11-27",close:116.16,high:116.94,low:114.64,open:115.91,volume:622400},
    {date:"2024-11-29",close:116.07,high:116.85,low:115.65,open:115.99,volume:389600},
    {date:"2024-12-02",close:116.63,high:116.77,low:115.09,open:115.72,volume:775200},
    {date:"2024-12-03",close:114.95,high:116.98,low:114.49,open:116.51,volume:699500},
    {date:"2024-12-04",close:116.06,high:117.16,low:113.99,open:114.4,volume:742900},
    {date:"2024-12-05",close:115.02,high:116.12,low:114.27,open:115.46,volume:1216100},
    {date:"2024-12-06",close:116.39,high:117.47,low:115.58,open:115.74,volume:709500},
    {date:"2024-12-09",close:120.22,high:120.54,low:116.44,open:116.44,volume:709500},
    {date:"2024-12-10",close:117.77,high:120.74,low:117.5,open:120.72,volume:743100},
    {date:"2024-12-11",close:116.57,high:119.41,low:116.26,open:118.43,volume:973300},
    {date:"2024-12-12",close:115.94,high:116.75,low:115.52,open:115.92,volume:1456000},
    {date:"2024-12-13",close:115.87,high:116.64,low:113.0,open:116.64,volume:1275000},
    {date:"2024-12-16",close:115.1,high:116.18,low:114.43,open:115.22,volume:698100},
    {date:"2024-12-17",close:114.68,high:117.34,low:114.26,open:115.03,volume:743700},
    {date:"2024-12-18",close:109.08,high:115.13,low:109.04,open:114.01,volume:1006600},
    {date:"2024-12-19",close:110.48,high:110.97,low:107.58,open:108.94,volume:739000},
    {date:"2024-12-20",close:112.49,high:113.59,low:110.09,open:110.09,volume:2049600},
    {date:"2024-12-23",close:112.2,high:112.37,low:110.29,open:111.25,volume:659700},
    {date:"2024-12-24",close:112.27,high:113.04,low:111.21,open:112.17,volume:214100},
    {date:"2024-12-26",close:112.43,high:112.65,low:110.88,open:111.38,volume:266200},
    {date:"2024-12-27",close:111.92,high:112.62,low:110.92,open:111.24,volume:345800},
    {date:"2024-12-30",close:111.24,high:112.01,low:109.33,open:110.84,volume:400000},
    {date:"2024-12-31",close:111.54,high:112.91,low:111.16,open:111.95,volume:337900},
    {date:"2025-01-02",close:111.93,high:113.55,low:111.29,open:112.36,volume:715300},
    {date:"2025-01-03",close:113.53,high:113.78,low:110.67,open:111.96,volume:482700},
    {date:"2025-01-06",close:115.52,high:117.31,low:113.39,open:113.43,volume:766100},
    {date:"2025-01-07",close:116.53,high:119.34,low:115.49,open:115.97,volume:690000},
    {date:"2025-01-08",close:116.35,high:116.9,low:113.5,open:116.02,volume:770400},
    {date:"2025-01-10",close:113.81,high:115.82,low:113.51,open:113.93,volume:641200},
    {date:"2025-01-13",close:122.63,high:122.81,low:117.18,open:118.27,volume:1175900},
    {date:"2025-01-14",close:120.66,high:122.9,low:119.18,open:122.56,volume:723600},
    {date:"2025-01-15",close:118.88,high:122.93,low:117.42,open:121.99,volume:936200},
    {date:"2025-01-16",close:119.46,high:119.81,low:116.53,open:118.45,volume:667200},
    {date:"2025-01-17",close:118.39,high:120.36,low:118.23,open:119.32,volume:659400},
    {date:"2025-01-21",close:123.95,high:124.04,low:118.83,open:119.02,volume:1231300},
    {date:"2025-01-22",close:122.78,high:124.17,low:122.46,open:123.24,volume:936400},
    {date:"2025-01-23",close:123.03,high:123.18,low:119.06,open:122.62,volume:995500},
    {date:"2025-01-24",close:123.15,high:124.59,low:122.1,open:122.98,volume:729300},
    {date:"2025-01-27",close:124.06,high:125.0,low:122.82,open:123.76,volume:1174000},
    {date:"2025-01-28",close:125.59,high:126.72,low:124.61,open:125.62,volume:1201400},
    {date:"2025-01-29",close:123.52,high:124.63,low:122.31,open:124.3,volume:934200},
    {date:"2025-01-30",close:126.84,high:128.29,low:124.17,open:124.97,volume:1528900},
    {date:"2025-01-31",close:126.13,high:128.04,low:121.56,open:125.47,volume:1210200},
    {date:"2025-02-03",close:123.69,high:126.57,low:123.13,open:125.74,volume:872500},
    {date:"2025-02-04",close:123.16,high:124.82,low:121.88,open:122.37,volume:839400},
    {date:"2025-02-05",close:122.37,high:124.1,low:122.2,open:124.09,volume:861700},
    {date:"2025-02-06",close:119.16,high:123.34,low:118.94,open:122.41,volume:943000},
    {date:"2025-02-07",close:118.86,high:119.73,low:116.63,open:119.04,volume:942600},
    {date:"2025-02-10",close:114.84,high:118.26,low:113.93,open:117.84,volume:1394200},
    {date:"2025-02-11",close:112.62,high:114.88,low:111.3,open:113.9,volume:1159200},
    {date:"2025-02-12",close:111.27,high:112.0,low:109.76,open:111.05,volume:926000},
    {date:"2025-02-13",close:112.88,high:113.64,low:110.53,open:111.4,volume:770100},
    {date:"2025-02-14",close:112.26,high:114.03,low:112.22,open:113.69,volume:793500},
    {date:"2025-02-18",close:111.74,high:113.58,low:110.99,open:112.3,volume:784800},
    {date:"2025-02-19",close:115.01,high:115.36,low:110.95,open:110.95,volume:1031200},
    {date:"2025-02-20",close:114.72,high:116.86,low:113.77,open:115.65,volume:1235000},
    {date:"2025-02-21",close:113.84,high:115.41,low:113.09,open:114.77,volume:658400},
    {date:"2025-02-24",close:114.91,high:116.79,low:113.07,open:114.74,volume:894000},
    {date:"2025-02-25",close:115.49,high:115.89,low:114.27,open:115.26,volume:591700},
    {date:"2025-02-26",close:115.11,high:116.38,low:114.28,open:115.85,volume:493000},
    {date:"2025-02-27",close:110.45,high:114.45,low:107.39,open:114.26,volume:1026100},
    {date:"2025-02-28",close:112.15,high:112.55,low:110.29,open:111.07,volume:1309500}
  ];
  
  // 数据格式转换，整理日期显示
  const formatData = rawData.map(item => {
    const date = new Date(item.date);
    return {
      ...item,
      formattedDate: `${date.getMonth() + 1}/${date.getDate()}`,
      fullDate: item.date
    };
  });
  
  // 为了让图表不那么拥挤，我们只显示部分日期标签
  const filteredData = formatData.filter((_, index) => index % 10 === 0);
  
  // 计算滚动平均线 (20天移动平均线)
  interface StockData {
    date: string;
    close: number;
    high: number;
    low: number;
    open: number;
    volume: number;
    formattedDate?: string;
    fullDate?: string;
    ma?: number | null;
  }

  const movingAverage = (data: StockData[], field: keyof StockData, window: number): StockData[] => {
    return data.map((item, index, array) => {
      if (index < window - 1) return { ...item, ma: null };
      
      let sum = 0;
      for (let i = 0; i < window; i++) {
        sum += array[index - i][field] as number;
      }
      return { ...item, ma: sum / window };
    });
  };
  
  const dataWithMA = movingAverage(formatData, 'close', 20);
  
  // 计算最大和最小值以设置Y轴范围
  const minValue = Math.min(...formatData.map(item => item.low)) - 1;
  const maxValue = Math.max(...formatData.map(item => item.high)) + 1;
  
  // 处理图表类型切换
  const handleChartTypeChange = (type: 'close' | 'candlestick' | 'volume') => {
    setChartType(type);
  };
  
  // 为成交量图表计算合适的最大值
  const maxVolume = Math.max(...formatData.map(item => item.volume));
  
  // 自定义工具提示
  interface TooltipProps {
    active?: boolean;
    payload?: {
      payload: StockData;
    }[];
    label?: string;
  }

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-md">
          <p className="font-bold">{data.fullDate}</p>
          {chartType === 'volume' ? (
            <p>成交量: {data.volume.toLocaleString()}</p>
          ) : (
            <>
              <p>开盘: {data.open.toFixed(2)}</p>
              <p>最高: {data.high.toFixed(2)}</p>
              <p>最低: {data.low.toFixed(2)}</p>
              <p>收盘: {data.close.toFixed(2)}</p>
              {data.ma && <p>MA20: {data.ma.toFixed(2)}</p>}
            </>
          )}
        </div>
      );
    }
  
    return null;
  };
  
  // 渲染图表内容
  const renderChart = () => {
    if (chartType === 'volume') {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={formatData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="formattedDate" 
              ticks={filteredData.map(item => item.formattedDate)}
            />
            <YAxis domain={[0, maxVolume * 1.1]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="volume" stroke="#8884d8" dot={false} name="成交量" />
          </LineChart>
        </ResponsiveContainer>
      );
    } else if (chartType === 'candlestick') {
      // 这里模拟蜡烛图效果，因为Recharts没有内置的蜡烛图组件
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={formatData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="formattedDate" 
              ticks={filteredData.map(item => item.formattedDate)}
            />
            <YAxis domain={[minValue, maxValue]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="high" stroke="#2b9348" dot={false} name="最高价" />
            <Line type="monotone" dataKey="low" stroke="#e63946" dot={false} name="最低价" />
            <Line type="monotone" dataKey="open" stroke="#457b9d" dot={false} name="开盘价" />
            <Line type="monotone" dataKey="close" stroke="#1d3557" dot={false} name="收盘价" />
          </LineChart>
        </ResponsiveContainer>
      );
    } else {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dataWithMA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="formattedDate" 
              ticks={filteredData.map(item => item.formattedDate)}
            />
            <YAxis domain={[minValue, maxValue]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="close" stroke="#0077b6" dot={false} name="收盘价" />
            <Line type="monotone" dataKey="ma" stroke="#e63946" dot={false} name="20日均线" />
          </LineChart>
        </ResponsiveContainer>
      );
    }
  };
  
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">RVTY股票价格图表 (2024-09-03至2025-02-28)</h2>
      
      <div className="flex space-x-2 mb-4">
        <button 
          className={`px-4 py-2 rounded ${chartType === 'close' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleChartTypeChange('close')}
        >
          收盘价 & MA20
        </button>
        <button 
          className={`px-4 py-2 rounded ${chartType === 'candlestick' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleChartTypeChange('candlestick')}
        >
          价格详情
        </button>
        <button 
          className={`px-4 py-2 rounded ${chartType === 'volume' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleChartTypeChange('volume')}
        >
          成交量
        </button>
      </div>
      
      {renderChart()}
      
    </div>
  );
};

export default StockChart;