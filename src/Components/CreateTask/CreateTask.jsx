import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createToDo } from "../../Services/ToDo/ToDo";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [todo, setTodo] = React.useState({
    todo_name: "",
    todo_description: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    saveToDo(todo);
    setOpen(false);
  };

  const saveToDo = (todo) => {
    createToDo(todo);
  };

  let name, value;
  const handleToDoOnChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setTodo({ ...todo, [name]: value });
    console.log(todo);
  };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Create To-Do
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Create New To-Do
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="To-Do"
              id="To-Do"
              onChange={handleToDoOnChange}
              value={todo.todo_name}
              name="todo_name"
            />
            <TextField
              label="Description"
              variant="filled"
              color="success"
              onChange={handleToDoOnChange}
              value={todo.todo_description}
              name="todo_description"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            autoFocus
            onClick={handleClose}
          >
            Add To-Do
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default CustomizedDialogs;
