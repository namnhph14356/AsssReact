import React, { useEffect, useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { listCate } from '../api/category';
import { Link } from 'react-router-dom';

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

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    
    
  };
  const items: MenuProps['items'] = category?.map((item: any, index: any) =>


    getItem(item.name, item.id, <AppstoreOutlined />)
  )
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};


export default Sidebar