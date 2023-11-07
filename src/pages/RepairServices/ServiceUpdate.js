import { Box, Button, Divider, FormHelperText, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateService } from "../../redux/actions/actionService";
import { serviceService } from "../../services/serviceService";

const ServiceUpdate = ({ detailService, setOpen }) => {
  const dispatch = useDispatch();
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (detailService) {
      reset({
        name: detailService?.name,
        price: detailService?.price,
        description: detailService?.description,
      });
    }
  }, [detailService, reset]);

  const onSubmit = (values) => {
    const dataRequest = {
      ...values,
    };
    serviceService
      .update(detailService.id, dataRequest)
      .then((response) => {
        setOpen(false);
        dispatch(updateService(detailService.id, response.data));
        toast.success("Cập nhật thành công");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Cập nhật thất bại");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ width: "100%", p: 2 }} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ p: "15px 0", textTransform: "capitalize" }}>
                  Sửa dịch vụ
                </Typography>
              </Grid>
              <Grid item xs={12} marginBottom={1}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item alignItems="left" xs={3}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Tên dịch vụ
                      </Typography>
                    </Grid>
                    <Grid item alignItems="left" xs={9}>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Tên dịch vụ"
                        fullWidth
                        {...register("name", {
                          required: "Tên dịch vụ không được để trống",
                          maxLength: 50,
                        })}
                      ></TextField>
                      {errors.name && errors.name.type === "maxLength" && (
                        <FormHelperText error id="helper-text-name">
                          Tên dịch vụ không dài quá 50 kí tự
                        </FormHelperText>
                      )}
                      {errors.name && (
                        <FormHelperText error id="helper-text-name">
                          {errors.name.message}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item alignItems="left" xs={3}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Mô tả
                      </Typography>
                    </Grid>
                    <Grid item alignItems="left" xs={9}>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Mô tả"
                        fullWidth
                        {...register("description")}
                      ></TextField>
                      {errors.description && (
                        <FormHelperText error id="helper-text-name">
                          {errors.description.message}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ width: "100%", p: 2 }} elevation={3}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ p: "15px 0", textTransform: "capitalize" }}>
                  Giá dịch vụ
                </Typography>
              </Grid>
              <Grid item xs={12} marginBottom={1}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item alignItems="center" justifyContent="start" display="flex" xs={3}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Giá dịch vụ
                      </Typography>
                    </Grid>
                    <Grid item alignItems="left" xs={9}>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Giá dịch vụ"
                        fullWidth
                        {...register("price", {
                          required: "Giá dịch vụ không được để trống",
                          pattern: /[1-9][0-9]*$/,
                        })}
                      ></TextField>
                      {errors.price && errors.price.type === "pattern" && (
                        <FormHelperText error id="helper-text-name">
                          Giá dịch vụ chỉ chứa số
                        </FormHelperText>
                      )}
                      {errors.price && (
                        <FormHelperText error id="helper-text-name">
                          {errors.price.message}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="end">
          <Button variant="contained" type="submit">
            Lưu Thay Đổi
          </Button>
          <Button sx={{ ml: 2 }} variant="outlined" onClick={(event) => setOpen(false)}>
            Hủy
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ServiceUpdate;
