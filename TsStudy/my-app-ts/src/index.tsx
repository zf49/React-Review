import ReactDOM from 'react-dom/client';
import App from './App';
import  "./01-Tsintro/01-基本类型";
import  './01-Tsintro/02-数组'
import './01-Tsintro/03-Object'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

