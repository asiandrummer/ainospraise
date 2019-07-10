import React from "react";
import { Grid, Row, Cell } from "@material/react-layout-grid";
import Button from "@material/react-button";
import Card, { CardPrimaryContent } from "@material/react-card";
import TextField, { Input } from "@material/react-text-field";
import Select, { Option } from "@material/react-select";
import MaterialIcon from "@material/react-material-icon";
import IconButton, {IconToggle} from "@material/react-icon-button";

import { Link } from "react-router-dom";

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from "@material/react-dialog";

import "./JoinUs.scss";

const INITIAL_INFO_STATE = {
  name: "",
  email: "",
  id: "",
  position: "vocal"
};

export default function JoinUs() {
  const [info, setInfo] = React.useState(INITIAL_INFO_STATE);
  const onNameChange = React.useCallback(
    e => {
      setInfo({ ...info, name: e.currentTarget.value });
    },
    [info]
  );
  const onEmailChange = React.useCallback(
    e => {
      setInfo({ ...info, email: e.currentTarget.value });
    },
    [info]
  );
  const onIDChange = React.useCallback(
    e => {
      setInfo({ ...info, id: e.currentTarget.value });
    },
    [info]
  );
  const onPositionChange = React.useCallback(
    e => {
      setInfo({ ...info, position: e.currentTarget.value });
    },
    [info]
  );

  const { name, email, id, position } = info;

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [teamName, setTeamName] = React.useState(
    window.innerWidth < 480 ? "AW" : "AinosWorship"
  );
  React.useEffect(() => {
    const eventHandle = window.addEventListener("resize", e => {
      setTeamName(window.innerWidth < 480 ? "AW" : "AinosWorship");
    });
    return () => {
      window.removeEventListener("resize", eventHandle);
    };
  }, []);

  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    if (dialogRef.current == null) {
      return;
    }
    if (name === "" || email === "" || id === "") {
      dialogRef.current.buttons[1].setAttribute("disabled", true);
    } else {
      dialogRef.current.buttons[1].removeAttribute("disabled");
    }
  }, [email, id, name, position]);

  const onDialogClose = React.useCallback(action => {
    if (action === "submit") {
    }
    setIsDialogOpen(false);
  }, []);

  const onJoinUsButtonClick = React.useCallback(() => {
    setInfo(INITIAL_INFO_STATE);
    setIsDialogOpen(true);
  }, []);

  return (
    <div className="main-container">
      <div className="header">
        <Grid>
          <Row>
            <div className="team-name title">{teamName}</div>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={0} />
            <Cell
              className="menu"
              desktopColumns={8}
              phoneColumns={12}
              tabletColumns={8}
            >
              <Link to="/">
                <IconButton>
                  <IconToggle isOn>
                    <MaterialIcon icon="home"/>
                  </IconToggle>
                  <IconToggle>
                    <MaterialIcon icon="home"/>
                  </IconToggle>
                </IconButton>
              </Link>
            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={0} />
          </Row>
        </Grid>
      </div>
      <Grid>
        <Row>
          <Cell desktopColumns={2} phoneColumns={4} tabletColumns={0} />
          <Cell desktopColumns={8} phoneColumns={4} tabletColumns={8}>
            <img
              src="images/joinus_edited.png"
              className="joinus-image"
              alt=""
            />
          </Cell>
          <Cell desktopColumns={2} phoneColumns={4} tabletColumns={0} />
        </Row>
      </Grid>
      <div className="joinus-button">
        <Button onClick={onJoinUsButtonClick}>Click to Apply</Button>
      </div>
      <Grid className="intro-body">
        <Row>
          <Cell desktopColumns={2} phoneColumns={4} tabletColumns={0} />
          <Cell desktopColumns={8} phoneColumns={4} tabletColumns={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Cell>
          <Cell desktopColumns={2} phoneColumns={4} tabletColumns={0} />
        </Row>
      </Grid>
      <Dialog
        className="joinus-dialog"
        onClose={onDialogClose}
        open={isDialogOpen}
        ref={dialogRef}
      >
        <DialogTitle>Ainos Praise Sign-up</DialogTitle>
        <DialogContent>
          <Card className="form">
            <CardPrimaryContent className="form-title">
              {/* <h4>
          Please complete the below form and we will reach out with the next
          steps. Thank you for your interest!
        </h4> */}
            </CardPrimaryContent>
            <CardPrimaryContent className="form-input">
              <TextField label="Name">
                <Input value={name} required onChange={onNameChange} />
              </TextField>
            </CardPrimaryContent>
            <CardPrimaryContent className="form-input">
              <TextField label="E-mail">
                <Input value={email} required onChange={onEmailChange} />
              </TextField>
            </CardPrimaryContent>
            <CardPrimaryContent className="form-input">
              <TextField label="KakaoTalk ID">
                <Input value={id} required onChange={onIDChange} />
              </TextField>
            </CardPrimaryContent>
            <CardPrimaryContent className="form-input">
              <Select
                label="Position"
                required
                value={position}
                onChange={onPositionChange}
              >
                <Option value="vocal">Vocal</Option>
                <Option value="drum">Drum</Option>
                <Option value="bass">Bass</Option>
                <Option value="guitar">Guitar</Option>
                <Option value="keys">Keys</Option>
              </Select>
            </CardPrimaryContent>
          </Card>
        </DialogContent>
        <DialogFooter>
          <DialogButton action="cancel">Cancel</DialogButton>
          <DialogButton action="submit" disabled isDefault>
            Submit
          </DialogButton>
        </DialogFooter>
      </Dialog>
      <div className="footer">
        <Grid>
        </Grid>
      </div>
    </div>
  );
}
