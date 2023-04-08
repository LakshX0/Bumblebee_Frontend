import React, { useState } from "react";
import PropTypes from "prop-types";
// @mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

AddBrandModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddBrand: PropTypes.func.isRequired,
};

export default function AddBrandModal({ open, onClose, onAddBrand }) {
  const [brandName, setBrandName] = useState("");
  const [status, setStatus] = useState("active");

  const handleAdd = () => {
    const newBrand = {
      brandName,
      status,
    };
    onAddBrand(newBrand);
    setBrandName("");
    setStatus("active");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{backgroundColor:"#754B83", color:"#fff"}}>New Brand</DialogTitle>
      <DialogContent>
        <TextField
          required
          fullWidth
          autoFocus
          margin="dense"
          variant="outlined"
          value={brandName}
          label="Brand Name"
          onChange={(e) => setBrandName(e.target.value)}
        />

        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
            <MenuItem value="banned">Banned</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd} disabled={!brandName}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
