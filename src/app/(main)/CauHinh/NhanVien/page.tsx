'use client';

import {
  Chip,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import React from 'react';
import Dialog from '@mui/material/Dialog';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function NhanVien() {
  const [Edit, SetEdit] = React.useState(false);
  const handleEdit = () => {
    SetEdit(!Edit);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const [OpenDialog, SetDialog] = React.useState(false);
  const handelDialog = () => {
    SetDialog(!OpenDialog);
  };

  const [openDelete, setDelete] = React.useState(false);
  const handleDelete = () => {
    setDelete(!openDelete);
  };
  const [TaoMoi, SetTaoMoi] = React.useState(false);
  const handelTaoMoi = () => {
    SetTaoMoi(!TaoMoi);
  };

  return (
    <div className="max-w-screen-xl mx-auto items-center">
      <Dialog
        fullWidth={true}
        open={TaoMoi}
        onClose={handelTaoMoi}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className=" text-blue-800 font-semibold"
        >
          {'Thêm mới nhân viên'}
          <hr />
        </DialogTitle>
        <DialogContent className=" flex flex-col gap-5">
          <div>
            <Typography id="alert-dialog-description" className="text-black">
              Tên tài khoản
            </Typography>
            <TextField
              className=" w-full"
              id="outlined-multiline-static"
              placeholder="Nhập tên tài khoản"
            />
          </div>

          <div className="border py-2 px-4  flex gap-1 w-full">
            <Chip label="Sảnh đón tiếp khu A" onDelete={handleDelete} />
            <Chip label="Khu vực chờ khu D" onDelete={handleDelete} />
            <FormControl className="w-full">
              <InputLabel id="demo-multiple-name-label">Chọn</InputLabel>
              <Select
                className="h-8"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Khu vực"
              >
                <MenuItem value={1}>A</MenuItem>
                <MenuItem value={2}>B</MenuItem>
                <MenuItem value={3}>C</MenuItem>
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions className=" flex gap-5">
          <button
            onClick={handelTaoMoi}
            className=" p-2 border hover:bg-gray-100 rounded-md"
          >
            Đóng
          </button>
          <button
            onClick={handelTaoMoi}
            autoFocus
            className=" p-2 px-4 border bg-blue-800 hover:bg-blue-700 rounded-md text-white"
          >
            Lưu
          </button>
        </DialogActions>
      </Dialog>
      <div>
        <div className=" flex flex-col gap-5 my-5">
          <Typography className=" font-semibold text-lg">
            Danh sách nhân viên
          </Typography>
          <div className=" flex flex-row  justify-between">
            <div className="flex flex-row ">
              <Search className=" flex flex-row items-center justify-start border-2 pl-3">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </div>
            <div className=" bg-blue-800 rounded-md text-white font-semibold hover:bg-blue-700">
              <button
                className=" flex flex-row gap-2 items-center p-3"
                onClick={handelTaoMoi}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Tạo mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="  border border-b-0 rounded-b-none rounded-md max-w-7xl mx-auto text-blue-800 font-semibold">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="text-blue-800 font-semibold" align="left">
                  STT
                </TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="left"
                >
                  Tên nhân viên
                </TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="left"
                >
                  Khu vực hiển thị
                </TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="left"
                ></TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="left"
                ></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/*{rows.map((row) => (*/}

              <TableRow
                className=" hover:bg-blue-200 w-max"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="left">Bùi đăng khoa</TableCell>
                <TableCell align="left">
                  Sảnh đón tiếp khu A Quầy tiếp tân khu E
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell>
                  <div className=" flex flex-row items-center gap-2 justify-end">
                    <Dialog
                      open={OpenDialog}
                      onClose={handelDialog}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        id="alert-dialog-title"
                        className=" text-red-500 font-semibold"
                      >
                        {'Xóa khu vực'}
                        <hr />
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          id="alert-dialog-description"
                          className="text-black"
                        >
                          Bạn có chắc muốn xóa khu vực "{'{TenKhuVuc}'}"
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <button
                          onClick={handelDialog}
                          className=" p-2 border hover:bg-gray-100 rounded-md"
                        >
                          Đóng
                        </button>
                        <button
                          onClick={handelDialog}
                          autoFocus
                          className=" p-2 border bg-red-600 hover:bg-red-500 rounded-md text-white"
                        >
                          Xác nhận
                        </button>
                      </DialogActions>
                    </Dialog>
                    <Dialog
                      fullWidth={true}
                      maxWidth="sm"
                      open={Edit}
                      onClose={handleEdit}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        id="alert-dialog-title"
                        className=" text-blue-800 font-semibold"
                      >
                        {'Sửa thông tin nhân viên'}
                        <hr />
                      </DialogTitle>
                      <DialogContent className=" flex flex-col gap-5">
                        <div>
                          <Typography
                            id="alert-dialog-description"
                            className="text-black"
                          >
                            Tên tài khoản
                          </Typography>
                          <TextField
                            className=" w-full"
                            id="outlined-multiline-static"
                            placeholder="Nhập tên tài khoản"
                          />
                        </div>
                        <div className="border py-2 px-4 w-full flex gap-1 ">
                          <Chip
                            label="Sảnh đón tiếp khu A"
                            onDelete={handleDelete}
                          />
                          <Chip
                            label="Khu vực chờ khu D"
                            onDelete={handleDelete}
                          />
                          <FormControl className="  w-full h-2">
                            <InputLabel id="demo-multiple-name-label">
                              Chọn
                            </InputLabel>
                            <Select
                              className="h-8"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={10}
                              label="Khu vực"
                            >
                              <MenuItem value={1}>A</MenuItem>
                              <MenuItem value={2}>B</MenuItem>
                              <MenuItem value={3}>C</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </DialogContent>
                      <DialogActions className=" flex gap-5">
                        <button
                          onClick={handleEdit}
                          className=" p-2 border hover:bg-gray-100 rounded-md"
                        >
                          Đóng
                        </button>
                        <button
                          onClick={handleEdit}
                          autoFocus
                          className=" p-2 px-4 border bg-blue-800 hover:bg-blue-700 rounded-md text-white"
                        >
                          Lưu
                        </button>
                      </DialogActions>
                    </Dialog>
                    <button
                      className=" p-1 border-red-300 bg-red-100 border-2 hover:bg-red-200 hover:border-red-400"
                      onClick={handelDialog}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3 z-40 text-red-400 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                    <button
                      className=" p-1 border-blue-300 bg-blue-100 border-2 hover:bg-blue-200 hover:border-blue-400"
                      onClick={handleEdit}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3 text-blue-400 hover:text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
