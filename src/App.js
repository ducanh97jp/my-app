// import AddComponent from './Component/AddComponent';
import './App.css';
// import Welcome from './Welcome';
// import FunctionComponent from './Component/FunctionComponent';
import Alert from './Component/Alert';

function App() {
  return (
    // <div className="App">
    //   <Welcome name="Admin"/>
    // </div>
    // <AddComponent firstNumber={1} secondNumber={2}/>
    // <FunctionComponent firstNumber={1} secondNumber={2}/>
    <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
  );
}

export default App;
