import DashboardView from "@/sections/dashboard/view";
import Header from "@/sections/header/view";
import Nav from "@/sections/header/nav";
import { Stack, Box } from "@mui/material";
export const metadata = {
    title: 'test: Dashboard',
};

export default function Page() {
    return <>
        <Nav>
        <Stack direction={"row"}>
            <Box>
            </Box>
            <DashboardView />
        </Stack>
        </Nav>
    </>
}