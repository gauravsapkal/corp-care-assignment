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
            },
            ticks: {
                display: false
            }
        }
    }
}

const Smalllinechart = () => {
    const { monthlydata, smalllinedata , isloading } = useSelector((state) => state);

    
    
    const data = {
        labels: ['Nov 1', 'Nov 4', 'Nov 8', 'Nov 12', 'Nov 16'],
        datasets: [
            {
                data: smalllinedata.map((elem)=>elem.value),
                backgroundColor: '#acafff',
                borderColor: 'blue',
                tension: '0.5',
                fill: true,
                pointStyle: 'dash'
            }
        ]
    }

    return (
        <Box w='237px' h='141.5px' position='absolute' left='27px' top='172px'
        >
            <Line data={data} id="chart"
                options={options}
            />

        </Box>
    )

}


export default Smalllinechart;