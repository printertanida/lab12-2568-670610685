import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}

function SidebarComponent({userName, type}: SidebarComponentProps){
  return (
    <Box p={8}>
      <Group>
        <Indicator
          color={type === "admin" ? "blue" : "orange"}  
          size={12}
          offset={5}
          disabled={!type}
          position="bottom-end"
          withBorder
          >
          <Avatar radius="xl" color="cyan" src="/public/profile.jpg" />
        </Indicator>
        <Text>User : {userName} : {type === "admin" ? "Admin" : "Student"}</Text>
      </Group>
    </Box>
  );
}


export type { SidebarComponentProps };
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        <SidebarComponent userName="Tanida" type="student" />
      </Box>
    </Stack>
  );
}
