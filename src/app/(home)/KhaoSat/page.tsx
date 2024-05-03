'use client';

import {
  Box,
  Collapse,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Switch,
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
import Image from 'next/image';
import Link from 'next/link';

function createData(
  stt: number,
  noidung: string,
  mota: string,
  trangthai: boolean
) {
  return {
    stt,
    noidung,
    mota,
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
    false
  ),
  createData(2, 'Chất lượng phục vụ', 'Quầy tiếp tân khu A', true),
  createData(3, 'Trải nghiệm chờ đợi', 'Khu vực chờ khu A', false),
];

const CauHoi = [
  createCauHoi(1, 'Bạn có hài lòng về thời gian chờ khám không?'),
  createCauHoi(2, 'Bạn có hài lòng về thái độ của nhân viên'),
  createCauHoi(3, 'Bạn có hài lòng về dịch vụ'),
  createCauHoi(4, 'Bạn có hài lòng về cơ sở vật chất không?'),
];

function Row(props: { row: ReturnType<typeof createData> }) {
  const [openSelected, setSelected] = React.useState(false);
  const handleSelected = () => {
    setSelected(!openSelected);
  };
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
        <TableCell align="center">
          {row.trangthai ? (
            <button
              className=" bg-blue-600 py-1 px-2 rounded-lg text-white "
              onClick={handleSelected}
            >
              ĐÃ CHỌN
            </button>
          ) : (
            <button
              className=" border py-1 px-2 rounded-lg "
              onClick={handleSelected}
            >
              CHỌN
            </button>
          )}
          <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={openSelected}
            onClose={handleSelected}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              className=" text-blue-800 font-semibold"
            >
              {'Thông báo'}
              <hr />
            </DialogTitle>
            <DialogContent className=" flex flex-col">
              <Typography id="alert-dialog-description" className="text-black">
                Khu vực sảnh chính khu A đang sử dụng bộ câu hỏi "Trải nghiệm
                chờ đợi"
              </Typography>
              <Typography id="alert-dialog-description" className="text-black">
                Bạn có muốn thay đổi không?
              </Typography>
            </DialogContent>
            <DialogActions className=" flex gap-5">
              <button
                onClick={handleSelected}
                className=" p-2 border hover:bg-gray-100 rounded-md"
              >
                Đóng
              </button>
              <button
                onClick={handleSelected}
                autoFocus
                className=" p-2 px-4 border bg-blue-800 hover:bg-blue-700 rounded-md text-white"
              >
                Xác nhận
              </button>
            </DialogActions>
          </Dialog>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {CauHoi.map((CauHoiRow) => (
                    <TableRow key={CauHoiRow.stt}>
                      <TableCell className=" py-5">{CauHoiRow.stt}</TableCell>
                      <TableCell className=" py-5">
                        {CauHoiRow.noidung}
                      </TableCell>
                      <TableCell className=" py-5"></TableCell>
                      <TableCell className=" py-5"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function KhaoSat() {
  const [Them, SetThem] = React.useState(false);
  const handleThem = () => {
    SetThem(!Them);
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

  return (
    <div>
      <div className=" bg-white shadow-lg flex flex-row justify-between items-center">
        <Image
          width={150}
          height={150}
          src="/images/Logo.png"
          alt="logo image"
          className=" p-3 ml-10"
        />
        <div className=" flex flex-row items-center gap-5 mr-5">
          <Typography>{'{User}'}</Typography>
          <Link className="border border-3 p-1 rounded-lg " href={'/'}>
            THOÁT
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto items-center mt-10">
        <div className="my-5 flex flex-col gap-7">
          <Typography className=" font-semibold text-lg">
            Màn hình Kilot câu hỏi khảo sát
          </Typography>
          <div className=" flex flex-col ">
            <Typography>Chọn khu vực cần hiển thị</Typography>
            <div className=" flex flex-row gap-4 justify-between">
              <div className="flex gap-3 flex-row">
                <FormControl className=" max-h-4">
                  <TextField className=" w-96 h-8" value={10} select>
                    <MenuItem key={1} value="test">
                      Test 1
                    </MenuItem>
                    <MenuItem key={2} value="test2">
                      Test 2
                    </MenuItem>
                  </TextField>
                </FormControl>

                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Hoạt động"
                />
              </div>
              <div className=" text-blue-700 rounded-md border border-blue-700 font-semibold hover:bg-blue-100">
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
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <Typography>Xem</Typography>
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
        </div>

        <div className="  border border-b-0 rounded-b-none rounded-md max-w-7xl mx-auto text-blue-800 font-semibold">
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell
                    className=" text-blue-700 font-semibold"
                    align="left"
                  >
                    STT
                  </TableCell>
                  <TableCell
                    className=" text-blue-700 font-semibold"
                    align="left"
                  >
                    Tên bộ câu hỏi
                  </TableCell>
                  <TableCell
                    className=" text-blue-700 font-semibold"
                    align="left"
                  >
                    Mô tả
                  </TableCell>

                  <TableCell
                    className=" text-blue-700 font-semibold"
                    align="center"
                  >
                    Trạng thái
                  </TableCell>
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
    </div>
  );
}
