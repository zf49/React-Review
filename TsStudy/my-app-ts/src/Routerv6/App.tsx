



import {HashRouter} from 'react-router-dom' 
import TabBar from './Component/TabBar'
import MRouter from './route/index'

import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default function App() {
    return (
       <HashRouter>
               <Content style={{ padding: '0 50px' }}>

           <MRouter></MRouter>
           </Content>
           <Footer style={{ textAlign: 'center' }}>
           <TabBar/>
           </Footer>
       </HashRouter>
    )
}
