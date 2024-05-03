'use client';

import {
  Chip,
  Collapse,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
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
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

export default function BaoCao() {
  const [OpenDialog, SetDialog] = React.useState(false);
  const handelDialog = () => {
    SetDialog(!OpenDialog);
  };
  const [TaoMoi, SetTaoMoi] = React.useState(false);
  const handelTaoMoi = () => {
    SetTaoMoi(!TaoMoi);
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
    <div className="max-w-screen-xl mx-auto items-end">
      <div className="my-5 flex flex-col gap-5">
        <Typography className=" font-semibold text-lg">
          Danh sách mức độ hài lòng
        </Typography>
        <div className=" flex flex-row gap-4 justify-between">
          <div className="flex gap-3 flex-row">
            <div className=" flex flex-col gap-2">
              <Typography>Chọn vị trí</Typography>
              <FormControl>
                <Select
                  className=" w-60 "
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                >
                  <MenuItem value={1}>A</MenuItem>
                  <MenuItem value={2}>B</MenuItem>
                  <MenuItem value={3}>C</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <Typography>Từ ngày</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DemoItem>
                    <DatePicker />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className=" flex flex-col">
              <Typography>Đến ngày</Typography>
              <div className=" flex flex-row items-center gap-2 justify-between">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DemoItem>
                      <DatePicker />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
                <button className="px-5 mt-2 h-full border items-center rounded-lg flex hover:bg-gray-100">
                  Tìm
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-blue-800 items-end rounded-md text-white font-semibold hover:bg-blue-700">
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
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
                Xuất báo cáo
              </button>
              <Dialog
                fullWidth={true}
                maxWidth="md"
                open={TaoMoi}
                onClose={handelTaoMoi}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle
                  id="alert-dialog-title"
                  className=" text-blue-800 font-semibold"
                >
                  {'Thêm mới bộ câu hỏi'}
                  <hr />
                </DialogTitle>
                <DialogContent className=" flex flex-col gap-5">
                  <div>
                    <Typography
                      id="alert-dialog-description"
                      className="text-black"
                    >
                      Tên bộ câu hỏi
                    </Typography>
                    <TextField
                      className=" w-full"
                      id="outlined-multiline-static"
                      placeholder="Nhập tên bộ câu hỏi"
                    />
                  </div>
                  <div>
                    {' '}
                    <Typography
                      id="alert-dialog-description"
                      className="text-black"
                    >
                      Mô tả
                    </Typography>
                    <TextField
                      className=" w-full"
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      placeholder="Nhập mô tả"
                    />
                  </div>
                  <div>
                    <Typography>Khu vực áp dụng</Typography>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Dùng chung"
                        control={<Radio />}
                        label="Dùng chung"
                      />
                      <FormControlLabel
                        value="Áp dụng theo khu vực"
                        control={<Radio />}
                        label="Áp dụng theo khu vực"
                      />
                    </RadioGroup>
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
                    Lưu
                  </button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="  border border-b-0 rounded-b-none rounded-md max-w-7xl mx-auto text-blue-800 font-semibold">
        <TableContainer component={Paper}>
          <List>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell
                    className="text-blue-800 font-semibold"
                    align="left"
                  >
                    STT
                  </TableCell>
                  <TableCell
                    className="text-blue-800  font-semibold"
                    align="left"
                  >
                    Tên bộ câu hỏi
                  </TableCell>
                  <TableCell
                    className="text-blue-800  font-semibold"
                    align="left"
                  >
                    Mô tả
                  </TableCell>
                  <TableCell
                    className="text-blue-800  font-semibold"
                    align="left"
                  >
                    Khu vực áp dụng
                  </TableCell>
                  <TableCell
                    className="text-blue-800  font-semibold"
                    align="left"
                  >
                    Hoạt động
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
                  <TableCell onClick={handleClickOpen}>
                    <button>{open ? <ExpandLess /> : <ExpandMore />}</button>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell align="left">
                    Mức độ hài lòng của khách hàng
                  </TableCell>
                  <TableCell align="left">
                    Bộ dùng cung cho mọi khu vực
                  </TableCell>
                  <TableCell align="left">Chung</TableCell>
                  <TableCell align="right">
                    <Typography className="flex flex-row gap-1 items-center">
                      <div className=" bg-green-100 p-1  rounded-full w-4 h-4">
                        <div className=" bg-green-500 p-1 rounded-full w-2 h-2"></div>
                      </div>

                      <Typography>Hoạt động</Typography>
                    </Typography>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
            <List className=" px-5">
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                className="border rounded-lg drop-shadow-sm"
              >
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table "
                  className=" rounded-lg"
                >
                  <TableHead className=" bg-blue-800 rounded-lg ">
                    <TableRow>
                      <TableCell className=" text-white" align="left">
                        Thứ tự
                      </TableCell>
                      <TableCell className=" text-white" align="left">
                        Nội dung câu hỏi
                      </TableCell>
                      <TableCell
                        className=" text-white"
                        align="left"
                      ></TableCell>
                      <TableCell
                        className=" text-white"
                        align="left"
                      ></TableCell>
                      <TableCell
                        className=" text-white"
                        align="right"
                      ></TableCell>
                      <TableCell className=" text-white" align="right">
                        Thất vọng
                      </TableCell>
                      <TableCell className=" text-white" align="right">
                        Chưa tốt
                      </TableCell>
                      <TableCell className=" text-white" align="right">
                        Chấp nhận
                      </TableCell>
                      <TableCell className=" text-white" align="right">
                        Tốt
                      </TableCell>
                      <TableCell className=" text-white" align="right">
                        Yêu thích
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/*{rows.map((row) => (*/}
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell align="left"> {'{1}'} </TableCell>
                      <TableCell align="left">{'{Câu hỏi 1}'}</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell align="left"> {'{2}'} </TableCell>
                      <TableCell align="left">{'{Câu hỏi 2}'}</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                      <TableCell align="right">{'{Điểm}'}</TableCell>
                    </TableRow>
                    {/* ))}*/}
                  </TableBody>
                </Table>
              </Collapse>
            </List>
          </List>
        </TableContainer>
      </div>

      <div className=" pt-10 w-max mx-auto">
        <Pagination count={10} shape="rounded" />
      </div>
    </div>
  );
}
