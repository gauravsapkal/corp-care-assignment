import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS, BarElement, CategoryScale,
    LinearScale, Title, PointElement, LineElement,
    LineController, Filler
} from 'chart.js';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

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

// let ctx = document.getElementById("chart");
// var gradient = ctx.createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, 'rgba(250,174,50,1)');   
// gradient.addColorStop(1, 'rgba(250,174,50,0)');




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

const Linechart = () => {
    const { monthlydata } = useSelector((state) => state);

    const data = {
        labels: ['Nov 1', 'Nov 4', 'Nov 8', 'Nov 12', 'Nov 16'],
        datasets: [
            {
                label: '',
                data: monthlydata.map((elem)=>elem.value),
                backgroundColor: '#acafff',
                borderColor: 'blue',
                tension: '0.4',
                fill: true,
                pointStyle: 'dash'
            }
        ]
    }

    return (
        <Box w='370px' h='180px' position='absolute' left='32px' top='122px'
        
        >
        
            <Line data={data} id="chart"
                options={options}
            />

        </Box>
    )

}


export default Linechart;