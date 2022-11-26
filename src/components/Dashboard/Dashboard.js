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
        <div className=" flex gap-5">
            <div>
                <div className="drawer-content">
                    <img className="mx-auto" src={logo} alt="" />

                    <h2 className="text-xl bg-[#47CC4D] text-white text-center">Dashboard</h2>

                </div>


                <div className="drawer-side shadow-xl h-screen  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 text-start  text-base-content bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to="/" className="flex  items-center gap-1 p-3">
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


                            <div className="flex  items-center ">
                                <span className="cursor-pointer flex gap-1 p-3">
                                    <img width="20px" src={action} alt="" />
                                    Aution</span>
                                <span onClick={() => setDropdown(!dropdown)} >
                                    <HiChevronDown />
                                </span>

                            </div>
                            {dropdown && (
                                <ul className="pl-8">
                                    <li>

                                        <Link className="gap-1 p-3" to='/allaction'>
                                            All Auction
                                        </Link>

                                    </li>
                                    <li>
                                        <Link className="gap-1 p-3" to='/proposal'>
                                            My Proposals
                                        </Link>

                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link className="gap-1 p-3 flex  items-center" to="/dashboard/profile">
                                <img width="20px" src={mrkt} alt="" />
                                Marketplace</Link>
                        </li>
                        <li>
                            <Link className="gap-1 p-3 flex  items-center" to="/dashboard/addreview">
                                <img width="20px" src={ordr} alt="" />
                                Orders</Link>
                        </li>
                        <li>
                            <Link className="gap-1 p-3 flex  items-center" to="/dashboard/allUser">
                                <img width="20px" src={ordr} alt="" />
                                Events</Link>
                        </li>
                        <li>
                            <Link className="gap-1 p-3 flex  items-center" to="/dashboard/manageorder">
                                <img width="20px" src={setting} alt="" />
                                Setting</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                <Navbar />
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard