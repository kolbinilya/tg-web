import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp


function App() {
  const url = 'https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1.jpg'

  useEffect(() => {
    tg.ready()
  }, []);

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <h1>hello react</h1>
      <button className='closeBtn' onClick={onClose}>close</button>
      <div className='container'>
        <img className='img' src={url} alt=""/>
      </div>
    </div>
  );
}

export default App;
