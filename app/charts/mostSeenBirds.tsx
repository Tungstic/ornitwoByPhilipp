import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { extractAndSortBirds } from '../functions/extractAndSortBirds';
import { UserSightingResponse } from '../report/account/[userId]/AccountData';

Chart.register(CategoryScale);

type Props = {
  data: UserSightingResponse;
};

export default function MostSeenBirdsDoughnut(props: Props) {
  const inputData = extractAndSortBirds(props.data);

  const chartData = {
    labels: inputData.map((item) => {
      return item.birdName;
    }),
    datasets: [
      {
        label: 'Spotted: ',
        data: inputData.map((item) => {
          return item.spottings;
        }),
        backgroundColor: ['#FBB159', '#fbb2597b', '#fbb2592b'],
        borderWidth: 2,
        borderColor: '#FBB159',
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: 'Bird sightings',
            },
            legend: {
              display: true,
              labels: {
                color: '#FBB159',
              },
            },
          },
        }}
      />
    </div>
  );
}
