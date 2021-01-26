import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Input = ({ name, label, half, handleChange, autoFocus, type, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        } : null}
      ></TextField>
    </Grid>
  );
};

export default Input;
