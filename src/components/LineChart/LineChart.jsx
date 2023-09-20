import { LineChart as LC, Line} from 'recharts';

const LineChart = () => {
   const mathMarks = [
        {
          id: 1,
          name: "John",
          marks: 85,
          score: 79
        },
        {
          id: 2,
          name: "Emily",
          marks: 92,
          score: 90
        },
        {
          id: 3,
          name: "Michael",
          marks: 78,
          score: 88
        },
        {
          id: 4,
          name: "Sophia",
          marks: 95,
          score: 99
        },
        {
          id: 5,
          name: "William",
          marks: 88,
          score: 75
        },
        {
          id: 6,
          name: "Olivia",
          marks: 90,
          score: 95
        },
        {
          id: 7,
          name: "Daniel",
          marks: 79,
          score: 70
        },
        {
          id: 8,
          name: "Ava",
          marks: 97,
          score: 80
        },
        {
          id: 9,
          name: "Matthew",
          marks: 84,
          score: 90
        },
        {
          id: 10,
          name: "Emma",
          marks: 91,
          score: 100
        }
      ];
      
          
    
    
    return (
        <div>
          
              <LC width={800} height={300} data={mathMarks}>
              <Line dataKey="marks"></Line>
              <Line dataKey="score"></Line>
              </LC>

              
 
        </div>
    );
};

export default LineChart;