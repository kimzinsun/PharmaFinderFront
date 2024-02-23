"use client";

import { Sidebar } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { HiArrowSmRight, HiInbox, HiShoppingBag } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { PiPillBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import "./globals.css";

export default function Nav() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img="/logo.png" />
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={PiPillBold}>
            제품검색
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdOutlineLocalPharmacy}>
            약국검색
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            제품추가
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={SlCalender}>
            일정관리
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            제품관리
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaUser}>
            mypage
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={IoSettingsSharp}>
            setting
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaCircleInfo}>
            info
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
