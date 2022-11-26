import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { HiChevronDown } from "react-icons/hi";
import logo from '../../assets/wlogo.png'
import dboard from '../../assets/dbo.png'
import action from '../../assets/action.png'
import mrkt from '../../assets/mrkt.png'
import ordr from '../../assets/ordr.png'
import setting from '../../assets/setting.png'
import Navbar from '../Navbar/Navbar';
const Dashboard = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className=" flex  bg-[#F2F2F2]">
            <div className="bg-white">
                <div className="drawer-content">
                    <img className="mx-auto" src={logo} alt="" />

                    <h2 className="text-xl bg-[#47CC4D] text-white text-center">Dashboard</h2>

                </div>

                <div className="flex justify-center">
                    <div className="drawer-side  h-screen  ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu  py-5 overflow-y-auto w-80 text-start  text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li className="hover:bg-[#4CAF502B]">
                                <Link to="/" className="flex  items-center gap-1 p-3 px-20">
                                    <img width="20px" src={dboard} alt="" />
                                    Dashboard

                                </Link>
                            </li>
                            <li >
                                {/* <Link to="/action">


                                <div>
                                    Auction
                                </div>
                            </Link> */}


                                <div className="flex  items-center hover:bg-[#4CAF502B] ">
                                    <span className="cursor-pointer flex gap-1 p-3 px-20">
                                        <img width="20px" src={action} alt="" />
                                        Aution</span>
                                    <span onClick={() => setDropdown(!dropdown)} >
                                        <HiChevronDown />
                                    </span>

                                </div>
                                {dropdown && (
                                    <ul className="">
                                        <li className="hover:bg-[#4CAF502B]   border-l-4 hover:border-l-green-800 py-3">

                                            <Link className=" px-20 gap-1" to='/allaction'>
                                                All Auction
                                            </Link>

                                        </li>
                                        <li className="hover:bg-[#4CAF502B] py-3  border-l-4 hover:border-l-green-800">
                                            <Link className="gap-1 px-20" to='/proposal'>
                                                My Proposals
                                            </Link>

                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex  items-center gap-1 p-3 px-20 hover:bg-[#4CAF502B]">
                                <Link className="gap-1  flex  items-center" to="/dashboard/profile">
                                    <img width="20px" src={mrkt} alt="" />
                                    Marketplace</Link>
                            </li>
                            <li className="flex  items-center gap-1 p-3 px-20 hover:bg-[#4CAF502B]">
                                <Link className="gap-1  flex  items-center" to="/dashboard/addreview">
                                    <img width="20px" src={ordr} alt="" />
                                    Orders</Link>
                            </li>
                            <li className="flex  items-center gap-1 p-3 px-20 hover:bg-[#4CAF502B]">
                                <Link className="gap-1  flex  items-center" to="/dashboard/allUser">
                                    <img width="20px" src={ordr} alt="" />
                                    Events</Link>
                            </li>
                            <li className="flex  items-center gap-1 p-3 px-20 hover:bg-[#4CAF502B]">
                                <Link className="gap-1  flex  items-center" to="/dashboard/manageorder">
                                    <img width="20px" src={setting} alt="" />
                                    Setting</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div >

                <div className="">
                    <Navbar />
                    <Outlet> </Outlet>
                </div>
            </div>
        </div>
    )
}

export default Dashboard