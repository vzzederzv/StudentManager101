import React from 'react';
import { Button, Space, Table } from 'antd';
import './tableContent.css';
const { Column, ColumnGroup } = Table;

const dataSource = [
    {
      key: '1',
      name: 'Sherlock Homes',
      age: 18,
      address: '221B Baker Street',
    },
    {
      key: '2',
      name: 'Dr. Brown',
      age: 19,
      address: '1640 Riverside Drive',
    },
    {
      key: '3',
      name: 'Prof. Xavier',
      age: '18',
      address: '1407 Graymalkin Lane',
    },
    {
      key: '4',
      name: 'Clark Kent',
      age: 17,
      address: '1938 Sulivan Ln',
    },
    {
      key: '5',
      name: 'Tommy Vercetti',
      age: 17,
      address: 'Vice City',
    },
    {
      key: '6',
      name: 'Bruce Wayne',
      age: 18,
      address: '1007 Mountain Drive',
    },
    {
      key: '7',
      name: 'Mr. Bean',
      age: 20,
      address: '12 Arbour Road',
    },
];

const columns = [
    { title: 'Name', className:'TableContentCentered', dataIndex: 'name', key: 'name', render: (text: string) => <div>{text}</div> },
    { title: 'Age', className:'TableContentCentered', dataIndex: 'age', key: 'age', render: (text: number) => <div>{text}</div>},
    { title: 'Address', className:'TableContentJustify', dataIndex: 'address', key: 'address', render: (text: string) => <div>{text}</div>},
    { title: 'Action', className:'TableContentCentered', key: 'action', width:'15%', render: () => (
          <Space>
            <Button type='primary' shape='round'>Edit</Button>
            <Button type='default' shape='round'>Delete</Button>	  
          </Space>
      )
    },
];

function TableContent() {
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={record => JSON.stringify(record)}
            bordered={true}
            
        />
    )        
}

export default TableContent;