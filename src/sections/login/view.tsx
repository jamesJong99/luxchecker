"use client";
import { useRouter } from "next/navigation"
import { Box, Link, Stack, Typography, useTheme, SvgIcon, Button, InputAdornment, TextField, Checkbox, FormControlLabel, Icon } from "@mui/material";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import ManIcon from '@mui/icons-material/Man';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faKey } from "@fortawesome/free-solid-svg-icons";

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();

  const login = () => {
    // e.preventDefault()
    router.push("/dashboard");
  }
  return (
    <Stack direction={"column"} gap={2.5} bgcolor={"#1D2024"}>

      <Stack direction={"row"} justifyContent={"center"} gap={2.5} pt={2.5}>

        <Link href="https://briansclub.cm/">
          <Image
            src={"/assets/images/bk.gif"}
            alt=""
            width={"300"}
            height={"40"}
          />
        </Link>
        <Link href="https://siktor.fail/">
          <Image
            src={"/assets/images/bks.gif"}
            alt=""
            width={"300"}
            height={"40"}
          />
        </Link>
        <Link href="https://ultimateshop.to/login">
          <Image
            src={"/assets/images/bu2.gif"}
            alt=""
            width={"300"}
            height={"40"}
          />
        </Link>
        <Link href="https://jerrys.vc/reg/?ref=W1BDNVBUX29N655M">
          <Image
            src={"/assets/images/bkj.gif"}
            alt=""
            width={"300"}
            height={"40"}
          />
        </Link>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} gap={2.5}>
        <Link href="https://tox3.in/login">
          <Image
            src={"/assets/images/bkt.gif"}
            alt=""
            width={"300"}
            height={"40"}
          />
        </Link>
      </Stack>
      <Stack direction={"column"} gap={1}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={0.5}
        >
          <Image
            src={"/assets/images/www.png"}
            alt=""
            width={"24"}
            height={"24"}
          />
          <Typography variant="body2" component={"span"} color={"#69AA46"}>
            {" "}
            LuxChecker Domains, bookmark them in case one domain does not work
            well:
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          <Link
            href="https://luxchecker.vc/"
            sx={{
              borderRight: "2px solid #69AA46",
              paddingRight: "24px",
              fontSize: "12px",
            }}
          >
            https://luxchecker.vc/
          </Link>
          <Link
            href="https://luxchecker.pw/"
            sx={{
              borderRight: "2px solid #69AA46",
              paddingRight: "24px",
              fontSize: "12px",
            }}
          >
            https://luxchecker.pw/
          </Link>
          <Link href="https://luxchecker.pm/" sx={{ fontSize: "12px" }}>
            https://luxchecker.pm/
          </Link>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={0.5}
      >
        <Image
          src={"/assets/images/tor.png"}
          alt=""
          width={"24"}
          height={"24"}
        />
        <Typography variant="body2" component={"span"} color={"#69AA46"}>
          To Domain
        </Typography>
        <Link
          href="http://luxchkr35xj7gis6u4xu67f4theumzhbw43pebz6lc6qsy7ahkzfmzqd.onion/"
          style={{ fontSize: "12px" }}
        >
          {" "}
          luxchkr35xj7gis6u4xu67f4theumzhbw43pebz6lc6qsy7ahkzfmzqd.onion
        </Link>
      </Stack>
      <Stack direction={"row"} margin={"auto"}>
        <Box paddingTop={"8px"} marginRight={"6px"}>
          <Image
            src={"/assets/images/closed-captioning-regular.svg"}
            alt=""
            width={36}
            height={32} />
        </Box>
        <Typography
          color={"#69AA46"}
          fontFamily={"Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif"}
          fontWeight={400}
          fontSize={"32px"}
          textAlign={"center"}>
          LuX Checker
        </Typography>
      </Stack>
      <Stack
        margin={"auto"}
        borderColor={"#CCC"} border={"1px"}
        padding={"6px"} bgcolor={"#394557"}
        width={"375px"} height={"450px"}
        direction={"column"}
        justifyContent={"center"}>
        <Stack
          bgcolor={"#FFF"}
          textAlign={"center"}
          fontFamily={'Open Sans'}
          fontSize={"13px"}
          color={"#393939"}>
          <Stack
            bgcolor={"#F7F7F7"}
            paddingX={"36px"}
            paddingY={"16px"}>
            <Typography
              variant="h4"
              component="h4"
              fontSize={"19px"}
              lineHeight={"28px"}
              borderBottom={1}
              borderColor={"#d5e3ef"}
              fontWeight={"lighter"}
              color={"#478FCA"}>
              <SvgIcon
                component={LocalCafeIcon}
                color="success" />
              Please Enter Your Information
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Username"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="dense"
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Password"
                type="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Box marginTop="8px">
                <Image
                  src={"/assets/images/cap.png"}
                  alt=""
                  width={"160"}
                  height={"75"}
                />
              </Box>
              <TextField
                margin="dense"
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Enter above code"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ManIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Stack direction={"row"} justifyContent={"space-between"} paddingLeft={"40px"}>
                <FormControlLabel
                  control={<Checkbox disableRipple={false} />}
                  label="Remember Me" />
                <Link>
                </Link>
                <Button
                  // type="submit"
                  variant="contained"
                  style={{fontFamily:"Open Sans"}}
                  sx={{ mt: 3, mb: 2 }}
                  onClick={login}
                >
                  <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faKey} className="fas fa-rotate-270"
                />Login
                </Button>
              </Stack>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            gap={2.5} pt={2.5}
            bgcolor={"#5090C1"}
            padding={0}
          >
            <Link href="#">
              <Typography
                color={"#FE9"}
                lineHeight={"50px"}>
                <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faArrowLeft} className="fas fa-check"
                />
                I forgot my password
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                color={"#FE9"}
                lineHeight={"50px"}>
                I want to register
                <FontAwesomeIcon style={{ marginLeft: "4px" }} icon={faArrowRight} className="fas fa-check"
                />
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
