import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';



const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GraphArea = () => {

	const options = {
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		exportEnabled: true,
		animationEnabled: true,
		title: {
			text: "Stock Price of BMW - August"
		},
		axisX: {
			valueFormatString: "DD MMM",
			crosshair: {
				enabled: true,
				snapToDataPoint: true
			}
		},
		axisY: {
			title: "Closing Price (in USD)",
			valueFormatString: "$##0.00",
			crosshair: {
				enabled: true,
				snapToDataPoint: true,
				labelFormatter: function (e) {
					return "$" + CanvasJS.formatNumber(e.value, "##0.00");
				}
			}
		},
		data: [{
			type: "area",
			xValueFormatString: "DD MMM",
			yValueFormatString: "$##0.00",
			dataPoints: [
				{ x: new Date(2023, 5, 26, 9, 0, 0), y: 76.727997 },
				{ x: new Date(2023, 5, 27, 12, 30, 0), y: 3.727997 },
				{ x: new Date(2023, 5, 28, 18, 15, 0), y: 746.727997 },
				{ x: new Date(2023, 5, 29, 7, 45, 0), y: 762.727997 },
				{ x: new Date(2023, 5, 30, 14, 10, 0), y: 763.727997 },
				{ x: new Date(2023, 6, 1, 21, 20, 0), y: 762.727997 },
				{ x: new Date(2023, 6, 2, 10, 5, 0), y: 76.727997 },
				{ x: new Date(2023, 6, 3, 16, 50, 0), y: 56.727997 },
				{ x: new Date(2023, 6, 4, 8, 15, 0), y: 26.727997 },
				{ x: new Date(2023, 6, 5, 13, 40, 0), y: 76.727997 },
				{ x: new Date(2023, 6, 6, 19, 55, 0), y: 76.727997 },
				{ x: new Date(2023, 6, 7, 5, 30, 0), y: 76.727997 },
				{ x: new Date(2023, 6, 8, 11, 45, 0), y: 76.727997 },
				{ x: new Date(2023, 6, 9, 17, 0, 0), y: 76.727997 }

			]
		}]
	}

	return (
		<div className='w-[500px] m-[20px] '>
			<CanvasJSChart options={options}

			/>
		</div>
	);

}


export default GraphArea