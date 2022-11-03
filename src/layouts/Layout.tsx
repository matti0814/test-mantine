import { Outlet, Link } from "react-router-dom";
import { Drawer, Button, Group, useMantineTheme, TextInput } from '@mantine/core';
import { useState } from "react";


function DemoDrawer() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  console.log("latest")
  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        aria-labelledby="drawer-title"
        aria-describedby="drawer-body"
        closeButtonLabel="Close drawer"
      >
        <TextInput label="Input label" description="Input description" />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>
      {DemoDrawer()}
      <Outlet />
    </>
  )
};

export default Layout;