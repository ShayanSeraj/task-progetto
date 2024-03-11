import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/Logo.png";
import { IconCategory, IconBag, IconCostumer, IconInvertory, IconChat, IconSetting, IconHeadphone, IconGift, IconLogout } from "./icons/Icons";

export default function SideBar() {
  const activeLink = " text-white bg-primary-100";

  return (
    <div className="flex flex-col h-screen shadow backdrop-filter backdrop-blur shadow-black-30">
      <div className="mt-2 w-full flex items-center justify-center">
        <img
          className="h-25"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <ul className="mt-16 flex flex-col items-center justify-center">
          <li className="">
            <NavLink
              to="/dashbord"
              className={({ isActive }) => {
                return (
                  "inline-block p-3 rounded-xl text-black-50" +
                  (isActive ? activeLink : "")
                );
              }}
            >
              <IconCategory />
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/orders"
              className={({ isActive }) => {
                return (
                  "inline-block p-3 rounded-xl text-black-50" +
                  (isActive ? activeLink : "")
                );
              }}
            >
              <div className="relative">
                <IconBag />
                <span className="absolute bottom-4 left-4 w-5 h-5 flex items-center justify-center text-xs font-bold bg-secondary-100 rounded-full">3</span>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/customers"
              className={({ isActive }) => {
                return (
                  "inline-block p-3 rounded-xl" +
                  (isActive ? activeLink : "")
                );
              }}
            >
              <IconCostumer />
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/inventory"
              className={({ isActive }) => {
                return (
                  "inline-block p-3 rounded-xl" +
                  (isActive ? activeLink : "")
                );
              }}
            >
              <IconInvertory />
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/conversation"
              className={({ isActive }) => {
                return (
                  "inline-block p-3 rounded-xl" +
                  (isActive ? activeLink : "")
                );
              }}
            >
              <div className="relative">
                <IconChat />
                <span className="absolute bottom-4 left-4 w-5 h-5 flex items-center justify-center text-xs font-bold bg-secondary-100 rounded-full">16</span>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/setting"
              className={({ isActive }) => {
                return (
                  "inline-block p-3 rounded-xl" +
                  (isActive ? activeLink : "")
                );
              }}
            >
              <IconSetting />
            </NavLink>
          </li>
        </ul>
        <div className="mx-auto">
          <button className="block mb-2 p-3 rounded-xl bg-gray text-black-100">
            <IconHeadphone />
          </button>
          <button className="block mb-2 p-3 rounded-xl bg-secondary-20 text-black-100">
            <IconGift />
          </button>
          <button className="block mt-7 mb-2 p-3 text-secondary-100">
            <IconLogout />
          </button>
        </div>
      </div>
    </div>
  );
}
