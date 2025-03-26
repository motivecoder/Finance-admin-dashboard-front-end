declare module "react-apexcharts" {
  import { Component } from "react";

  export interface ApexChartProps {
    type?: string;
    series?: any;
    width?: string | number;
    height?: string | number;
    options?: any;
    [key: string]: any;
  }

  class ApexChart extends Component<ApexChartProps> {}

  export default ApexChart;
}
