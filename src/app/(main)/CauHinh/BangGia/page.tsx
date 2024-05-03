'use client';

import {
  Box,
  Chip,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
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

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BangGia() {
  const [Edit, SetEdit] = React.useState(false);
  const handleEdit = () => {
    SetEdit(!Edit);
  };
  const [TaoMoi, SetTaoMoi] = React.useState(false);
  const handelTaoMoi = () => {
    SetTaoMoi(!TaoMoi);
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

  const handleClosePoper = () => {
    setAnchorEl(null);
  };
  const [OpenDialog, SetDialog] = React.useState(false);
  const handelDialog = () => {
    SetDialog(!OpenDialog);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const [openDelete, setDelete] = React.useState(false);
  const handleDelete = () => {
    setDelete(!openDelete);
  };

  const [Stt, setSTT] = React.useState(1);

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
          <Typography>Bạn có muốn đồng bộ dịch vụ?</Typography>
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
            className=" p-2 border bg-blue-800 hover:bg-blue-700 rounded-md text-white"
          >
            Đồng ý
          </button>
        </DialogActions>
      </Dialog>
      <div>
        <div className=" flex flex-col gap-5 my-5">
          <Typography className=" font-semibold text-lg">
            Danh sách khu vực
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
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Đồng bộ
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
                  Hoạt động
                </TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="left"
                >
                  Tên dịch vụ
                </TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="left"
                ></TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="right"
                >
                  Giá thường
                </TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="right"
                >
                  {' '}
                  Giá vip
                </TableCell>
                <TableCell
                  className="text-blue-800  font-semibold"
                  align="right"
                >
                  Giá ngày lễ
                </TableCell>
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
                <TableCell align="left">Hoạt động</TableCell>
                <TableCell align="left">Khám bệnh thường</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="right">150.000</TableCell>
                <TableCell align="right">300.000</TableCell>
                <TableCell align="right">255.000</TableCell>
                <TableCell>
                  <div className=" flex flex-row items-center gap-2 justify-end">
                    <Dialog
                      fullWidth={true}
                      maxWidth="md"
                      open={Edit}
                      onClose={handleEdit}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        id="alert-dialog-title"
                        className=" text-blue-800 font-semibold"
                      >
                        {'Chỉnh sửa thông tin dịch vụ'}
                        <hr />
                      </DialogTitle>
                      <DialogContent className=" flex flex-col gap-5">
                        <div>
                          <Typography
                            id="alert-dialog-description"
                            className="text-black"
                          >
                            Tên dịch vụ
                          </Typography>
                          <TextField
                            className=" w-full"
                            id="outlined-multiline-static"
                            placeholder="Nhập tên bộ câu hỏi"
                          />
                        </div>
                        <div className=" flex flex-row gap-4 justify-between">
                          <div className=" flex flex-col gap-1 w-full">
                            <Typography>Giá thường</Typography>
                            <input className=" border-2 p-2 rounded-lg" />
                          </div>
                          <div className=" flex flex-col gap-1 w-full">
                            <Typography>Giá thường</Typography>
                            <input className=" border-2 p-2 rounded-lg" />
                          </div>
                          <div className=" flex flex-col gap-1 w-full">
                            <Typography>Giá thường</Typography>
                            <input className=" border-2 p-2 rounded-lg" />
                          </div>
                        </div>

                        <div>
                          <Typography>Hoạt động</Typography>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="Hoạt động"
                              control={<Radio />}
                              label="Hoạt động"
                            />
                            <FormControlLabel
                              value="Tạm ngừng"
                              control={<Radio />}
                              label="Tạm ngừng"
                            />
                          </RadioGroup>
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
                          className=" p-2 border bg-blue-800 hover:bg-blue-700 rounded-md text-white"
                        >
                          Lưu
                        </button>
                      </DialogActions>
                    </Dialog>
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
