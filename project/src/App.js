import React from 'react';
import './App.css';
import { Layout, Breadcrumb, Button, Table, Space, Row } from 'antd';
import AppHeader from './components/Header/header';
import AppSider from './components/Sider/sider';
import AppFooter from './components/Footer/footer';
import TableContent from './content/tableContent';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
const { Column, ColumnGroup } = Table;

function App() {
	  
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<AppSider/>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					<AppHeader/>
				</Header>
				
				<Content style={{ margin: '0 16px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Student Management</Breadcrumb.Item>
						<Breadcrumb.Item>Student List</Breadcrumb.Item>
					</Breadcrumb>				
					<TableContent />
				</Content>
				
				<Footer style={{ textAlign: 'center' }}>
					<AppFooter/>
				</Footer>
        	</Layout>
      	</Layout>
  	);
}

export default App;
