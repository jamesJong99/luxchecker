import BalanceView from "@/sections/balance/view";
import Nav from "@/sections/header/nav";
import { Stack, Box } from "@mui/material";
import { TitleBar } from "@/components/TitleBar";

export const metadata = {
    title: 'test: Dashboard',
};

export default function Balance() {
    return <>
        <Nav>
            <TitleBar title="Balance" child="Buy Credits   Available: BTC, BCH, LTC, ETH, XMR" />
            <Stack direction={"row"}>
                <Box>
                    {/* <Nav /> */}
                </Box>
                <BalanceView />
            </Stack>
        </Nav>
    </>
}