import ReactDOM from 'react-dom/client';
import App from './07-replenish/portal/App';
// import  "./01-Tsintro/01-基本类型";
// import  './01-Tsintro/02-数组'
// import './01-Tsintro/03-Object'
// import './01-Tsintro/04-function'
// import './01-Tsintro/05-class'
import 'antd/dist/antd.css'




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
      <App />
  // </React.StrictMode>
);

