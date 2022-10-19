import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu ,Button, message, Steps,Space} from 'antd';
  import React, { useState } from 'react';
import AntID from './AntID'

import './css/03-css.css'
const { Step } = Steps;


  const { Header, Sider, Content } = Layout;

  const App = () => {
    const [collapsed, setCollapsed] = useState(false);


    const [current, setCurrent] = useState(0);

    const steps = [
        {
          title: 'First',
          content: <AntID currrentId={current}></AntID>,
        },
        {
          title: 'Second',
          content: <AntID currrentId={current}></AntID>,
        },
        {
          title: 'Last',
          content:  <AntID currrentId={current}></AntID>,
        },
      ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [size, setSize] = useState(8);


    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
              {
                key: '4',
                icon: <UploadOutlined />,
                label: 'nav 4',
              }
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >

            05-app
            <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>

      <Space size={210}>

      {current<2&&<Button type="primary" 
      onClick={()=>{
          next()
      }}>next</Button>}
      {current===2&&<Button type="primary" danger>Done</Button>}
      {current>0&&<Button type="primary" onClick={()=>{
          prev()
      }}>privious</Button>}
      </Space>
    

      {/* <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default App;