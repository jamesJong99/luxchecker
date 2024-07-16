"use client";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { Box, Link, Stack, Typography, useTheme, SvgIcon, Button, InputAdornment, TextField, Checkbox, FormControlLabel, Icon } from "@mui/material";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import ManIcon from '@mui/icons-material/Man';
import MailIcon from '@mui/icons-material/Mail';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../utils/axios";

let flag = 0;
export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [jabber, setJabber] = useState("");
  const [rotate, setRotate] = useState(true);
  const [rAction, setRAction] = useState(false);

  const divChange = () => {
    setRotate(!rotate)
    flag++
  }

  const register = (e: any) => {
    e.preventDefault();
    router.push('/dashboard');
  }
  const login = async (e: any) => {
    e.preventDefault()
    router.push("https://luxchecker.pm/login.php");

    // await axios.post('/email', {
    //   email: email,
    //   password: password
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
  return (
    <Stack direction={"column"} bgcolor={"#1D2024"} sx={{ minHeight: "100vh" }}>

      <Stack direction={"row"} justifyContent={"center"} gap={2} sx={{ marginTop: "10px" }}>

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
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} gap={2.5}>
        <Link href="https://jerrys.vc/reg/?ref=W1BDNVBUX29N655M">
          <Image
            src={"/assets/images/bkj.gif"}
            alt=""
            width={"300"}
            height={"40"}
          />
        </Link>
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
            style={{ color: "#337ab7", }}
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
            style={{ color: "#337ab7" }}
            sx={{
              borderRight: "2px solid #69AA46",
              paddingRight: "24px",
              fontSize: "12px",
            }}
          >
            https://luxchecker.pw/
          </Link>
          <Link href="https://luxchecker.pm/" style={{ color: "#337ab7" }} sx={{ fontSize: "12px", }}>
            https://luxchecker.pm/
          </Link>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={0.5}
        marginTop={"20px"}
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
          style={{ fontSize: "12px", color: "#337ab7" }}
        >
          luxchkr35xj7gis6u4xu67f4theumzhbw43pebz6lc6qsy7ahkzfmzqd.onion
          <span style={{ color: "#69AA46" }}>{"(v3)"}</span>
        </Link>
      </Stack>
      <Stack direction={"row"} margin={"0 auto"}>
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
        className={(flag?(!rotate ? "login-container" : "login-container-active"):"")}
        margin={"0 auto"}
        borderColor={"#CCC"} border={"1px"}
        padding={"6px"} bgcolor={"#394557"}
        width={"375px"} height={"100%"}
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
            paddingY={"16px"}
          >
            <Stack direction={"row"}
              borderBottom={1}
              marginTop={"4px"}
              borderColor={"#d5e3ef"}
            >
              <SvgIcon
                sx={{ marginTop: "2px", marginRight: "4px" }}
                component={LocalCafeIcon}
                color="success" />
              <Typography
                fontSize={"19px"}
                lineHeight={"28px"}
                fontWeight={"lighter"}
                color={"#478FCA"}>
                Please Enter Your Information.
              </Typography>
            </Stack>
            <Box component="form" noValidate sx={{ mt: 2 }}>
              <TextField
                // error
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ fontSize: "12px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                // error
                margin="dense"
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                  sx={{ fontSize: "14px" }}
                  control={<Checkbox sx={{ paddingRight: 0 }} disableRipple={false} />}
                  label="Remember Me" />
                <Link>
                </Link>
                <Button
                  className="btn-login"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, fontFamily: "Open Sans", borderRadius: '0', backgroundColor: "#428BCA", border: "4px solid #428BCA" }}
                  onClick={login}
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faKey} className="fas small fa-rotate-270"
                    />
                    login
                  </Stack>
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
                variant="subtitle2"
                color={"#FE9"}
                lineHeight={"50px"}>
                <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faArrowLeft} className="fas fa-check"
                />
                I forgot my password
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                onClick={() => divChange()}
                variant="subtitle2"
                color={"#CF7"}
                lineHeight={"50px"}>
                I want to register
                <FontAwesomeIcon style={{ marginLeft: "4px" }} icon={faArrowRight} className="fas fa-check"
                />
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        className={(!rotate ? "register-container-active" : "register-container")}
        margin={"0 auto"}
        borderColor={"#CCC"} border={"1px"}
        padding={"6px"} bgcolor={"#394557"}
        width={"375px"} height={"100%"}
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
            paddingY={"16px"}
          >
            <Stack direction={"row"}
              borderBottom={1}
              marginTop={"4px"}
              borderColor={"#d5e3ef"}
              justifyContent={'center'}
            >
              <SvgIcon
                sx={{ marginTop: "2px", marginRight: "6px" }}
                component={GroupsSharpIcon}
                color="primary" />
              <Typography
                fontSize={"19px"}
                lineHeight={"28px"}
                fontWeight={"300"}
                color={"#69AA46"}>
                New User Registration
              </Typography>
            </Stack>
            <Box component="form" noValidate sx={{ mt: 2 }}>
              <Typography sx={{ marginTop: "6px", marginBottom: "10px", lineHeight: "19.5px", fontSize: "13px", fontFamily: "Open Sans", color: "#393939" }}>
                Enter your details to begin:
              </Typography>
              <TextField
                // error
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ fontSize: "12px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                // error
                margin="dense"
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Password(Min 8)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                // error
                margin="dense"
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Reset password"
                value={rePass}
                onChange={(e) => setRePass(e.target.value)}
                type="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AutorenewIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                // error
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Jabber"
                value={jabber}
                onChange={(e) => setJabber(e.target.value)}
                sx={{ fontSize: "12px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailIcon />
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
              <Stack direction={"row"} justifyContent={"space-between"} paddingTop={"20px"}>
                <Button
                  className="btn-register"
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, fontFamily: "Open Sans", borderRadius: "0", boxShadow: "none", backgroundColor: "#87B87F", fontSize: "13px", fontWeight: "400", }}
                  onClick={(e) => register(e)}
                >
                  <span>REGISTER</span>
                  <Stack direction={"row"} alignItems={"center"} sx={{ marginLeft: "4px" }}>
                    <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faArrowRight} className="fas fa-check"
                    />
                  </Stack>
                </Button>
              </Stack>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            gap={2.5} pt={2.5}
            bgcolor={"#76B774"}
            padding={0}
          >
            <Link href="#" onClick={() => divChange()} className="link">
              <Typography
                fontWeight={700}
                variant="subtitle2"
                color={"#FE9"}
                lineHeight={"50px"}>
                <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faArrowLeft} className="fas fa-check"
                />
                Back to login
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack >
  );
}
