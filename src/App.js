// import AddComponent from './Component/AddComponent';
import './App.css';
// import Welcome from './Welcome';
// import FunctionComponent from './Component/FunctionComponent';
// import Alert from './Component/Alert';
import StudentInfoComponent from './Component/StudentInfoComponent';

function App() {
  const student ={
    id:1,
    name: 'Nguyễn Vănn A',
    age: 30,
    address: 'Hà Nội'
};
  return (
    // <div className="App">
    //   <Welcome name="Admin"/>
    // </div>
    // <AddComponent firstNumber={1} secondNumber={2}/>
    // <FunctionComponent firstNumber={1} secondNumber={2}/>
    // <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
    <StudentInfoComponent student={student}/>
  );
}

export default App;
