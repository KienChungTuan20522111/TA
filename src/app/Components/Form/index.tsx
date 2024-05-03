import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Form() {
  return (
    <div>
      <Image
        height={100}
        width={250}
        src="/images/logo_white.png"
        alt="logo"
        className=" m-5 mx-auto mt-20"
      />
      <div className=" bg-white w-1/3 h-1/3 items-center mt-10 mx-auto p-10 z-10 shadow-lg rounded-lg ">
        <div className=" flex flex-col mx-auto text-center align-middle pb-4">
          <Typography className=" font-semibold text-3xl">ĐĂNG NHẬP</Typography>
          <Typography className=" text-sm">
            Màn hình kilot câu hỏi khảo sát
          </Typography>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" flex flex-col">
            <Typography>Tên tài khoản</Typography>
            <input
              className="  border-2 p-2 rounded-lg"
              placeholder="Nhập tên tài khoản"
            />
          </div>
          <div className=" flex flex-col">
            <Typography>Mật khẩu</Typography>
            <input
              className="  border-2 p-2 rounded-lg"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className=" mt-3 flex flex-col gap-2 bg-blue-800 rounded-lg font-semibold text-white text-center">
            <Link className=" p-2" href={'/KhaoSat'}>
              ĐĂNG NHẬP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
