"use client"
import { Stack, Box } from "@mui/material"
import CustomAlert from "@/components/CustomAlert"
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from '@mui/material';
import DashboardModal from "@/components/DashboardModal";
import * as React from 'react';
import Alert from '@mui/material/Alert';
export default function DashboardView() {
    return (
        
        <Stack padding={2}>
            <DashboardModal/>  
            <Box>
                <Stack sx={{ width: '100%' }} spacing={2} borderBottom={"1px solid"} paddingBottom={"30px"} borderColor={"#E2E2E2"}>
                    <Alert icon={false} severity="success" onClose={() => { }} style={{ color: "#3c763d", fontSize: "14px" }}>
                        <Typography fontFamily={"Open Sans"}><FontAwesomeIcon icon={faBullhorn} className="fas fa-check"
                        />LuxChecker Updates!</Typography>
                        <Typography fontFamily={"Open Sans"}>-Secure Checker Added.</Typography>
                        <Typography marginTop={"20px"} fontFamily={"Open Sans"} >3DS Checker is to check if your card has “Verified by Visa” or “MasterCard SecureCode” enabled or disabled.
                        </Typography>
                        <Typography marginTop={"20px"} fontFamily={"Open Sans"} fontWeight={"700"} >:Support</Typography>
                    </Alert>
                </Stack>
            </Box>
            <Box borderBottom={"1px solid"} paddingY={"30px"} borderColor={"#E2E2E2"}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert icon={false} severity="success" onClose={() => { }} style={{ color: "#3c763d", fontSize: "14px" }}>
                        <Typography fontFamily={"Open Sans"}><FontAwesomeIcon icon={faBullhorn} className="fas fa-check"
                        />LuxChecker Updates!</Typography>
                        <Typography fontFamily={"Open Sans"}>API Mirrors</Typography>
                        <Typography fontFamily={"Open Sans"} marginTop={"20px"}>We have introduced two new mirrors dedicated for API checkings. We suggest everyone to shift their API calls to one of the following domains</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"}>Note: All LuXChecker domains (.pm,.pw,.vc,TOR) will also work for API. These domains are just to ensure faster and stable checks.</Typography>
                        <Typography marginTop={"20px"} fontFamily={"Open Sans"} fontWeight={"700"} >:Support</Typography>
                    </Alert>
                </Stack>
            </Box>
            <Box borderBottom={"1px solid"} paddingY={"30px"} borderColor={"#E2E2E2"}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert icon={false} severity="success" onClose={() => { }} style={{ color: "#3c763d", fontSize: "14px" }}>
                        <Typography fontFamily={"Open Sans"}><FontAwesomeIcon icon={faBullhorn} className="fas fa-check"
                        />LuxChecker Updates!</Typography>
                        <Typography fontFamily={"Open Sans"}>-Secure Checker Added.</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"}>Note: All LuXChecker domains (.pm,.pw,.vc,TOR) will also work for API. These domains are just to ensure faster and stable checks.</Typography>
                        <Typography marginTop={"20px"} fontFamily={"Open Sans"} fontWeight={"700"} >:Support</Typography>
                    </Alert>
                </Stack>
            </Box>
            <Box borderBottom={"1px solid"} paddingY={"30px"} borderColor={"#E2E2E2"}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert icon={false} severity="success" onClose={() => { }} style={{ color: "#3c763d", fontSize: "14px" }}>
                        <Typography fontFamily={"Open Sans"}><FontAwesomeIcon icon={faBullhorn} className="fas fa-check"
                        />LuxChecker Updates!</Typography>
                        <Typography fontFamily={"Open Sans"}>-Secure Checker Added.</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"}>Note: All LuXChecker domains (.pm,.pw,.vc,TOR) will also work for API. These domains are just to ensure faster and stable checks.</Typography>
                        <Typography marginTop={"20px"} fontFamily={"Open Sans"} fontWeight={"700"} >:Support</Typography>
                    </Alert>
                </Stack>
            </Box>
            <Box borderBottom={"1px solid"} paddingY={"30px"} borderColor={"#E2E2E2"}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert icon={false} severity="success" onClose={() => { }} style={{ color: "#3c763d", fontSize: "14px" }}>
                        <Typography fontFamily={"Open Sans"}><FontAwesomeIcon icon={faBullhorn} className="fas fa-check"
                        />LuxChecker Updates!</Typography>
                        <Typography fontFamily={"Open Sans"}>-Secure Checker Added.</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"}>Note: All LuXChecker domains (.pm,.pw,.vc,TOR) will also work for API. These domains are just to ensure faster and stable checks.</Typography>
                        <Typography marginTop={"20px"} fontFamily={"Open Sans"} fontWeight={"700"} >:Support</Typography>
                    </Alert>
                </Stack>
            </Box>
            <Box borderBottom={"1px solid"} paddingY={"30px"} borderColor={"#E2E2E2"}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert icon={false} severity="success" onClose={() => { }} style={{ color: "#3c763d", fontSize: "14px" }}>
                        <Typography fontFamily={"Open Sans"}><FontAwesomeIcon icon={faBullhorn} className="fas fa-check"
                        />LuxChecker Updates!</Typography>
                        <Typography fontFamily={"Open Sans"}>-Secure Checker Added.</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                        <Typography marginTop={"40px"} fontFamily={"Open Sans"}>Note: All LuXChecker domains (.pm,.pw,.vc,TOR) will also work for API. These domains are just to ensure faster and stable checks.</Typography>
                        <Typography marginTop={"20px"} fontFamily={"Open Sans"} fontWeight={"700"} >:Support</Typography>
                    </Alert>
                </Stack>
            </Box>
        </Stack>
    )
}
