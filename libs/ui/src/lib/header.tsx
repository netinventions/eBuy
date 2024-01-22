import { Menu, Container, Icon, Label } from 'semantic-ui-react';

export function Header() {
  return (
    <Menu fixed="top" inverted>
      <Container fixed="top">
        <Menu.Item as="a" header>
          eBuy.com
        </Menu.Item> 
        <MenuItems />
        <Menu.Item position='right'>
          <Label>
            <Icon name="shopping cart">
              00
            </Icon>
          </Label>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

const MenuItems = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem) =>(
        <Menu.Item key={navItem.label}>
          <a href={navItem.href ?? '#'}>{navItem.label}</a>
        </Menu.Item>
      ))}
    </>
  );
};

  interface NavItem {
    label: string;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Catalog',
      href: '/',
    },
    {
      label: 'Checkout',
      href: '/checkout',
    },
  ];


export default Header;
