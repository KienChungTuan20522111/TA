'use client';

import {
  Box,
  Chip,
  Collapse,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
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
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function createData(
  stt: number,
  noidung: string,
  mota: string,
  khuvuc: string,
  trangthai: boolean
) {
  return {
    stt,
    noidung,
    mota,
    khuvuc,
    trangthai,
  };
}
function createCauHoi(stt: number, noidung: string) {
  return {
    stt,
    noidung,
  };
}

const rows = [
  createData(
    1,
    'Mức độ hài lòng của khách hàng',
    'Bộ dùng chung cho mọi khu vực',
    'Chung',
    false
  ),
  createData(
    2,
    'Chất lượng phục vụ',
    'Quầy tiếp tân khu A',
    'Quầy tiếp tân khu A',
    true
  ),
  createData(
    3,
    'Trải nghiệm chờ đợi',
    'Khu vực chờ khu A',
    'Khu vực chờ khu A',
    false
  ),
];

const Noidung = [
  createCauHoi(1, 'Bạn có hài lòng về thời gian chờ khám không?'),
  createCauHoi(2, 'Bạn có hài lòng về thái độ của nhân viên'),
  createCauHoi(3, 'Bạn có hài lòng về dịch vụ'),
  createCauHoi(4, 'Bạn có hài lòng về cơ sở vật chất không?'),
];

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [Edit, SetEdit] = React.useState(false);
  const handleEdit = () => {
    SetEdit(!Edit);
  };

  const [OpenDialog, SetDialog] = React.useState(false);
  const handelDialog = () => {
    SetDialog(!OpenDialog);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.stt}</TableCell>
        <TableCell align="left">{row.noidung}</TableCell>
        <TableCell align="left">{row.mota}</TableCell>
        <TableCell align="left">{row.khuvuc}</TableCell>
        <TableCell align="center">
          {row.trangthai ? (
            <Typography className="flex flex-row gap-1 items-center">
              <div className=" bg-green-100 p-1  rounded-full w-4 h-4">
                <div className=" bg-green-500 p-1 rounded-full w-2 h-2"></div>
              </div>

              <Typography>Hoạt động</Typography>
            </Typography>
          ) : (
            <Typography className="flex flex-row gap-1 items-center">
              <div className=" bg-red-100 p-1  rounded-full w-4 h-4">
                <div className=" bg-red-500 p-1 rounded-full w-2 h-2"></div>
              </div>

              <Typography>Tạm ngừng</Typography>
            </Typography>
          )}
        </TableCell>
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
                {'Xóa câu hỏi'}
                <hr />
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  className="text-black"
                >
                  Bạn có chắc muốn xóa câu hỏi "{'{TenCauHoi}'}"
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
              open={Edit}
              onClose={handleEdit}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle
                id="alert-dialog-title"
                className=" text-blue-800 font-semibold"
              >
                {'Sửa bộ câu hỏi'}
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
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases" className=" ml-10">
                <TableHead>
                  <TableRow className=" bg-blue-800 rounded-lg ">
                    <TableCell className=" text-white">Thứ tự</TableCell>
                    <TableCell className=" text-white">
                      Nội dung câu hỏi
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Noidung.map((Noidung) => (
                    <TableRow key={Noidung.stt}>
                      <TableCell className=" py-5">{Noidung.stt}</TableCell>
                      <TableCell className=" py-5">{Noidung.noidung}</TableCell>
                      <TableCell className=" py-5"></TableCell>
                      <TableCell className=" py-5"></TableCell>
                      <TableCell className=" py-5"></TableCell>
                      <TableCell className=" py-5">
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
                              {'Xóa bộ câu hỏi'}
                              <hr />
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText
                                id="alert-dialog-description"
                                className="text-black"
                              >
                                Bạn có chắc muốn xóa bộ câu hỏi "
                                {'{TenBoCauHoi}'}"
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
                            open={Edit}
                            onClose={handleEdit}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle
                              id="alert-dialog-title"
                              className=" text-blue-800 font-semibold"
                            >
                              {'Sửa bộ câu hỏi'}
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
                  ))}
                </TableBody>
              </Table>

              <button className=" flex flex-row gap-2 mx-auto items-center mt-5 text-blue-400">
                <div className=" p-1 border border-blue-300 bg-blue-100 hover:bg-blue-200">
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <Typography>Tạo mới câu hỏi</Typography>
              </button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CauHoi() {
  const [Them, SetThem] = React.useState(false);
  const handleThem = () => {
    SetThem(!Them);
  };

  const [Edit, SetEdit] = React.useState(false);
  const handleEdit = () => {
    SetEdit(!Edit);
  };

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

  return (
    <div className="max-w-screen-xl mx-auto items-center">
      <div className="my-5 flex flex-col">
        <Typography className=" font-semibold text-lg">
          Cấu hình nội dung câu hỏi và đánh giá
        </Typography>
        <div className=" flex flex-row gap-4 justify-between">
          <div className="flex gap-3 flex-row">
            <div className="border py-2 px-4 w-fit flex gap-1 ">
              <Chip label="Sảnh đón tiếp khu A" onDelete={handleDelete} />
              <Chip label="Quán cafe khu F" onDelete={handleDelete} />
              <FormControl>
                <InputLabel id="demo-multiple-name-label">Khu vực</InputLabel>
                <Select
                  className="  w-60 h-8"
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
            <button className="px-5 border rounded-lg flex items-center hover:bg-gray-100">
              Tìm
            </button>
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
                  className=" p-2 px-4 border bg-blue-800 hover:bg-blue-700 rounded-md text-white"
                >
                  Lưu
                </button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="  border border-b-0 rounded-b-none rounded-md max-w-7xl mx-auto text-blue-800 font-semibold">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell
                  className=" text-blue-800 font-semibold"
                  align="left"
                >
                  STT
                </TableCell>
                <TableCell
                  className=" text-blue-800 font-semibold"
                  align="left"
                >
                  Tên bộ câu hỏi
                </TableCell>
                <TableCell
                  className=" text-blue-800 font-semibold"
                  align="left"
                >
                  Mô tả
                </TableCell>

                <TableCell
                  className=" text-blue-800 font-semibold"
                  align="left"
                >
                  Khu vực áp dụng
                </TableCell>

                <TableCell
                  className=" text-blue-800 font-semibold"
                  align="center"
                >
                  Trạng thái
                </TableCell>
                <TableCell
                  className=" text-blue-800 font-semibold"
                  align="center"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.stt} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className=" pt-10 w-max mx-auto">
        <Pagination count={10} shape="rounded" />
      </div>
    </div>
  );
}
