import { Box } from "@chakra-ui/react"

import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip, PointElement, LineElement, RadialLinearScale, LineController, Filler } from 'chart.js';
import { useSelector } from "react-redux";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    PointElement,
    LineElement,
    LineController,
    Filler
)

const Barchart = () => {

    const bardata = useSelector((state) => state.bardata);

    const data = {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
            {
                label: '',
                data: bardata.map((elem)=>elem.value1),
                backgroundColor: 'skyblue',
                borderColor: 'blue',
                tension: '0.4',
                fill: true,
                pointStyle: 'dash'
            },
            {
                label: '',
                data:  bardata.map((elem)=>elem.value2),
                backgroundColor: 'blue',
                borderColor: 'blue',
                tension: '0.4',
                fill: true,
                pointStyle: 'dash'
            }
        ]
    }


    const options = {
        maintainAspectRatio: false,

        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,

                grid: {
                    display: false
                }
            },
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
    
    return (
        <Box w='231px' h='179px' position='absolute' left='23px' top='134px'>


            <Bar data={data} options={options}
            />
        </Box>
    )
}


export default Barchart;