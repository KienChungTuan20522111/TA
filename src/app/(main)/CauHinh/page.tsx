'use client';

import {
  Box,
  InputBase,
  Tab,
  Tabs,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React, { useEffect } from 'react';
import KhuVuc from './KhuVuc/page';
import NhanVien from './NhanVien/page';
import BangGia from './BangGia/page';

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

export default function CauHinh() {
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
      // vertical padding + font size from searchIcon
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

  return (
    <div className="max-w-screen-2xl items-center">
      <div className=" max-w-screen-xl mx-auto pt-4">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Danh mục khu vực" {...a11yProps(0)} />
            <Tab label="Danh mục nhân viên" {...a11yProps(1)} />
            <Tab label="Bảng giá" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </div>
      <div>
        <CustomTabPanel value={value} index={0}>
          <KhuVuc />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NhanVien />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <BangGia />
        </CustomTabPanel>
      </div>

      <div className=" pt-10 w-max mx-auto">
        <Pagination count={10} shape="rounded" />
      </div>
    </div>
  );
}
