import React, { useEffect, useState } from 'react'
import { AppstoreOutlined, MailOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { listCate } from '../api/category';
import { Link } from 'react-router-dom';
import { getProducCate } from '../api/product';
import Sider from 'antd/lib/layout/Sider';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

interface type {
  id?: number,
}

const Sidebar = () => {
  const [category, setCategory] = useState<type[]>([])
  useEffect(() => {
    const listcategory = async () => {
      const { data } = await listCate();

      setCategory(data)
    }
    listcategory();

  }, [])

  const onClick: MenuProps['onClick'] = async (e) => {
    console.log('click ', e);
    console.log(e.keyPath[0]);

    const { data } = await getProducCate(Number(e.keyPath[0]));
    console.log(data);
    

  };
  const items: MenuProps['items'] = category?.map((item: any, index: any) =>


    getItem(item.name, item.id, <AppstoreOutlined />)
  )
  const item3: MenuProps['items'] =  category?.map((item: any, index: any) => (
    { key: `${item.name}`, label: <Link to={`/categories/${item.id}`}>{item.name} <span style={{width: '120px', float: 'right'}}><RightOutlined /></span></Link> }
   
  ))
  return (
    
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
        />
    // <Menu
    //   onClick={onClick}
    //   style={{ width: 256 }}
    //   defaultOpenKeys={['sub1']}
    //   mode="inline"
    //   items={items}
    // />
  );
};


export default Sidebar