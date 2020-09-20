import React from 'react';
import "./sider.css";
import { Card, Layout, Menu } from "antd";
import {
	PieChartOutlined,
	TeamOutlined,
	HomeOutlined,
	ExclamationCircleOutlined,
	QuestionCircleOutlined,
	IdcardOutlined
} from "@ant-design/icons";

const {	Sider } = Layout;
const { SubMenu } = Menu;

class AppSider extends React.Component {
	state = {
		collapsed: false,
	}
	
	onCollapse = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	
	render() {	
		return(
			<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
			
			<div>
				<Card 
					style={{
						height: "31px",
						background: "#586f85",
						margin: "15px",
						border: '#586f85',
					}}
				></Card>
			</div>

			<Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
				<Menu.Item key="1" icon={<HomeOutlined/>}>
				Home
				</Menu.Item>
				
				<Menu.Item key="2" icon={<PieChartOutlined />}>
				DashBoard
				</Menu.Item>
								
				<SubMenu 
					key="sub1" icon={<TeamOutlined />} 
					title="Student Management"
				>
					<Menu.Item key="3">Student List</Menu.Item>
					<Menu.Item key="4">Course Learning</Menu.Item>
					<Menu.Item key="5">Free Course</Menu.Item>
					<Menu.Item key="6">Register Absence</Menu.Item>
					<Menu.Item key="7">Payment</Menu.Item>
				</SubMenu>
				
				<Menu.Item key="8" icon={<IdcardOutlined />}>Lead Management</Menu.Item>

				<Menu.Item key="9" icon={<ExclamationCircleOutlined />}>Report</Menu.Item>

				<Menu.Item key="10" icon={<QuestionCircleOutlined />}>Help</Menu.Item>
			</Menu>
			</Sider>
		);
	}
}
export default AppSider;