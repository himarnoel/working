"use client";
import React from "react";
import logo from "../images/logo.svg";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useLogoutMutation } from "@/services/authApi";
import { toast } from "react-toastify";

const SideNav = () => {
  const path = usePathname();
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    const toastId = toast.loading("Logging out");
    try {
      await logout().unwrap();
      toast.update(toastId, {
        render: "You've successfully logged out.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className={`w-[18%]  flex-col hidden xl:flex   h-screen  border-r  border-r-[#D0D3D9] px-6 overflow-y-auto`}>
      <Image src={logo} className="mt-10  object-contain" />

      <div className="flex flex-col justify-between flex-1 mt-20">
        <div className="flex flex-col gap-1 ">
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 ${
              path === "/admin/dashboard"
                ? "bg-[#161141] text-white "
                : "text-[#161141] bg-white"
            }  duration-100 py-3 px-4 rounded-xl cursor-pointer`}
          >
            <BsPersonWorkspace className="text-xl" /> <span>Jobs</span>
          </Link>
          <Link
            href="/admin/dashboard/jobs"
            className={`flex items-center gap-3 ${
              path === "/admin/dashboard/jobs"
                ? "bg-[#161141] text-white "
                : "text-[#161141] bg-white"
            }  duration-100 py-3 px-4 rounded-xl cursor-pointer`}
          >
            <IoCreate className="text-xl" /> <span>Create Jobs</span>
          </Link>
        </div>
        <div className="mb-2">
          <div
            onClick={handleLogout}
            className="flex items-center gap-3   0 duration-100 py-3 px-4 rounded-xl cursor-pointer"
          >
            <LuLogOut className="text-xl" /> <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
