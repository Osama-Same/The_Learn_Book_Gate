import { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { login } from "../../service/Admin";
export function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Dialog open={props.open}>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "5%", color: "black" }}>
            Login
          </DialogContentText>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              marginBottom: "5%",
            }}
          >
            <TextField
              margin="normal"
              fullWidth
              name="name"
              label="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async () => {
              props.setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={async () => {
              const admin = { name: name, password: password };
              const res = await login(admin);
              if (res.x_trusted === 1) {
                localStorage.setItem("token", res.x_trusted);
                props.setOpen(false);
              } else {
                console.log("You are not Admin");
                props.setOpen(false);
              }
            }}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
