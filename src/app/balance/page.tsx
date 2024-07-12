import BalanceView from "@/sections/balance/view";
import Header from "@/sections/header/view";
import Nav from "@/sections/header/nav";
import { Stack, Box } from "@mui/material";
export const metadata = {
    title: 'test: Dashboard',
};

export default function Balance() {
    return <>
        <Header />
        <Stack direction={"row"}>
            <Box>
                {/* <Nav /> */}
            </Box>
            <BalanceView />
        </Stack>
    </>
}