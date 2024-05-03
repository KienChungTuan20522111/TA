'use client';
import { Menu, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const openPoper = Boolean(anchorEl);

  const handlePoper = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePoper = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" bg-white shadow-lg flex flex-row justify-between items-center">
      <Image
        width={150}
        height={150}
        src="/images/Logo.png"
        alt="logo image"
        className=" p-3 ml-10"
      />

      <button
        className=" mr-10  w-fit h-fit rounded-md p-1 hover:bg-gray-200 hover:text-blue-600 focus:bg-gray-200 focus:text-blue-600"
        onClick={handlePoper}
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
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openPoper}
        onClose={handleClosePoper}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Link
          href={'/'}
          onClick={handleClosePoper}
          className=" flex flex-row gap-3 items-center justify-start hover:text-blue-400 p-2"
        >
          <div>
            <Image
              height={30}
              width={30}
              src={'/images/TrangChu.png'}
              alt="icon trang chu"
            />
          </div>
          <div className=" flex flex-col">
            <Typography className=" font-semibold">Trang chủ</Typography>
            <Typography className=" text-sm">
              Màn hình hiển thị câu hỏi
            </Typography>
          </div>
        </Link>
        <Link
          href={'/CauHoi'}
          onClick={handleClosePoper}
          className=" flex flex-row gap-3 items-center justify-start hover:text-blue-400 p-2"
        >
          <div>
            <Image
              height={30}
              width={30}
              src={'/images/CauHoi.png'}
              alt="icon cau hoi"
            />
          </div>
          <div className=" flex flex-col">
            <Typography className=" font-semibold  ">
              Cấu hình câu hỏi
            </Typography>
            <Typography className=" text-sm">
              Tạo mới, chỉnh sửa câu hỏi
            </Typography>
          </div>
        </Link>
        <Link
          href={'/CauHinh'}
          onClick={handleClosePoper}
          className=" flex flex-row gap-3 items-center justify-start hover:text-blue-400 p-2"
        >
          <div>
            <Image
              height={30}
              width={30}
              src={'/images/CauHinh.png'}
              alt="icon cau hinh"
            />
          </div>
          <div className=" flex flex-col">
            <Typography className=" font-semibold  ">
              Cấu hình danh mục
            </Typography>
            <Typography className=" text-sm">
              Cấu hình khu vực, nhân viên, bác sĩ, bảng giá
            </Typography>
          </div>
        </Link>
        <Link
          href={'/BaoCao'}
          onClick={handleClosePoper}
          className=" flex flex-row gap-3 items-center justify-start hover:text-blue-400 p-2"
        >
          <div>
            <Image
              height={30}
              width={30}
              src={'/images/BaoCao.png'}
              alt="icon bao cao"
            />
          </div>
          <div className=" flex flex-col">
            <Typography className=" font-semibold  ">Báo cáo</Typography>
            <Typography className=" text-sm">
              Xem chi tiết và xuất báo cáo
            </Typography>
          </div>
        </Link>
      </Menu>
    </div>
  );
}
