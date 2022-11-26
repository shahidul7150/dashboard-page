import React from 'react'
import './action.css'
import location from "../../../assets/location.png"
import category from "../../../assets/category.png"
import doller from "../../../assets/doller.png"
import strain from "../../../assets/strain.png"
import p1 from "../../../assets/p1.png"
import p2 from "../../../assets/p2.png"
import p3 from "../../../assets/p3.png"
import crown from "../../../assets/crown.png"
import bit from "../../../assets/bit.png"
import cross from "../../../assets/cross.png"
import pending from "../../../assets/pending.png"
const AllAction = () => {
    return (
        <div className="text-start pl-5 ">
            <div className="pb-8">
                <h1 className="text-xl py-2 font-semibold">Auction</h1>
                <p className="text-md">Explore and bid on your desired product based on several filters</p>
            </div>
            <div className="grid-system gap-5">
                <div className="bg-white">

                    <div className="flex items-center gap-2 px-3 py-2">
                        <h2>Location</h2>
                        <div> <img src={location} alt="" /></div>
                    </div>
                    <hr className="w-11/12 mx-auto py-1" />
                    <div className="flex items-center gap-2 px-3 py-2">
                        <select className="w-11/12 border outline-none ">
                            <option value="Tulsa" key="">Tulsa</option>
                            <option value="Dhaka" key="">Dhaka</option>
                        </select>
                    </div>
                    <div className="flex items-center px-3 pb-3 mt-5">
                        <h1 className="text-xl font-semibold">Category</h1>
                        <div className="ml-2 mt-2"><img src={category} alt="" /></div>
                    </div>
                    <hr className="w-11/12 mx-auto py-1" />

                    <div>

                        <ul className="">
                            <li className="flex px-3 gap-2 py-[8px] text-green-600">
                                <input type="checkbox" />
                                <p className="font-semibold">All</p>
                            </li>
                            <li className="flex px-3 gap-2 py-[8px]">
                                <input type="checkbox" />
                                <p className="font-semibold text-gray-400">Flowers</p>
                            </li>
                            <li className="flex px-3 gap-2 py-[8px]">
                                <input type="checkbox" />
                                <p className="font-semibold text-gray-400">Trims</p>
                            </li>
                            <li className="flex px-3 gap-2 py-[8px]">
                                <input type="checkbox" />
                                <p className="font-semibold text-gray-400">Biomass</p>
                            </li>
                            <li className="flex px-3 gap-2 py-[8px]">
                                <input type="checkbox" />
                                <p className="font-semibold  text-gray-400">Oils</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center px-3 pb-3 mt-5">
                        <h1 className="font-semibold text-xl">Price</h1>
                        <div className="ml-2 mt-1"><img src={doller} alt="" /></div>
                    </div>
                    <hr className="w-11/12 mx-auto py-1" />
                    <div className="mx-auto w-11/12">
                        <div className="flex justify-between px-3">
                            <p className="text-[#9D9D9D]">0</p>
                            <p className="text-[#9D9D9D]">12000</p>
                        </div>
                        <input type="range" className="w-full " />
                    </div>

                    <div className="flex items-center px-3 pb-3 mt-5">
                        <h1 className="font-semibold text-xl">Strain</h1>
                        <div className="ml-2 mt-1"><img src={strain} alt="" /></div>
                    </div>
                    <hr className="w-11/12 mx-auto py-1" />
                    <div>
                        <ul className="grid grid-cols-3  h-8  text-center  border  border-gray-300 w-11/12 mx-auto">
                            <li className="cursor-pointer border  border-[#4CAF50] text-[#4CAF50]">Indica</li>
                            <li className="cursor-pointer border   border-[#D9D9D9] text-[#D9D9D9]">Sativa</li>
                            <li className="cursor-pointer border   border-[#D9D9D9] text-[#D9D9D9]">Hybrid</li>
                        </ul>
                    </div>

                    <div className="flex items-center px-3 pb-3 mt-5">
                        <h1 className="font-semibold text-xl">Strain</h1>
                        <div className="ml-2 mt-1"><img src={strain} alt="" /></div>
                    </div>
                    <hr className="w-11/12 mx-auto py-1" />
                    <div>
                        <ul className="grid grid-cols-3  h-8  text-center  border  border-gray-300 w-11/12 mx-auto">
                            <li className="cursor-pointer border  border-[#4CAF50] text-[#4CAF50]">All</li>
                            <li className="cursor-pointer border   border-[#D9D9D9] text-[#D9D9D9]">Indoor</li>
                            <li className="cursor-pointer border   border-[#D9D9D9] text-[#D9D9D9]">Outdoor</li>
                        </ul>
                    </div>
                </div>


                {/* card components */}
                <div className=" ">

                    <div className="grid grid-cols-2 bg-white mb-5">
                        <div className="grid grid-cols-2 gap-2 ">
                            <div className="flex  gap-2 items-center ">
                                <img className="" src={p1} alt="" />
                                <div className="border-r-2 px-1">
                                    <h2 className="text-md "> ACDC #08 Outdoor</h2>
                                    <p className="text-md text-gray-300">The Green Bull 2 LLC</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 items-center border-r-2 px-1">
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>THC</h2>
                                        <h2>70%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/3 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>CBD</h2>
                                        <h2>1%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/12 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="grid grid-cols-3">
                            <div className=" px-1 grid grid-cols-1 items-center border-r-2  ">
                                <div className="text-center ">
                                    <p>Asking Price</p>
                                    <h2 className="text-xl">$600.00/lb</h2>
                                </div>
                            </div>
                            <div className="grid items-center justify-center  border-r-2">
                                <div className="flex gap-1 items-center">
                                    <div>
                                        <img src={crown} alt="" />
                                    </div>
                                    <p>Awarded</p>
                                </div>
                            </div>

                            <div className="grid items-center justify-center  border-r-2">
                                <button className="bg-green-400 flex items-center px-6 gap-2  text-white py-1 rounded">
                                    <img src={bit} alt="" />
                                    Bid</button>
                                <button className="bg-green-100 flex items-center px-6 gap-2 border-green-400 border  text-green-400 py-1 rounded">View</button>
                            </div>
                        </div>
                    </div>




                    <div className="grid grid-cols-2 bg-white mb-5">
                        <div className="grid grid-cols-2 gap-2 ">
                            <div className="flex  gap-2 items-center ">
                                <img className="" src={p3} alt="" />
                                <div className="border-r-2 px-1">
                                    <h2 className="text-md "> ACDC #08 Outdoor</h2>
                                    <p className="text-md text-gray-300">The Green Bull 2 LLC</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 items-center border-r-2 px-1">
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>THC</h2>
                                        <h2>70%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/3 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>CBD</h2>
                                        <h2>1%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/12 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="grid grid-cols-3">
                            <div className=" px-1 grid grid-cols-1 items-center border-r-2  ">
                                <div className="text-center ">
                                    <p>Asking Price</p>
                                    <h2 className="text-xl">$600.00/lb</h2>
                                </div>
                            </div>
                            <div className="grid items-center justify-center  border-r-2">
                                <div className="flex gap-1 items-center">
                                    <div>  <img src={cross} alt="" /></div>
                                    <p>Awarded</p>
                                </div>
                            </div>

                            <div className="grid items-center justify-center  border-r-2">
                                <button className="bg-green-400 flex items-center px-6 gap-2  text-white py-1 rounded">
                                    <img src={bit} alt="" />
                                    Bid</button>
                                <button className="bg-green-100 flex items-center px-6 gap-2 border-green-400 border  text-green-400 py-1 rounded">View</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 bg-white mb-5">
                        <div className="grid grid-cols-2 gap-2 ">
                            <div className="flex  gap-2 items-center ">
                                <img className="" src={p2} alt="" />
                                <div className="border-r-2 px-1">
                                    <h2 className="text-md "> ACDC #08 Outdoor</h2>
                                    <p className="text-md text-gray-300">The Green Bull 2 LLC</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 items-center border-r-2 px-1">
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>THC</h2>
                                        <h2>70%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/3 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>CBD</h2>
                                        <h2>1%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/12 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="grid grid-cols-3">
                            <div className=" px-1 grid grid-cols-1 items-center border-r-2  ">
                                <div className="text-center ">
                                    <p>Asking Price</p>
                                    <h2 className="text-xl">$600.00/lb</h2>
                                </div>
                            </div>
                            <div className="grid items-center justify-center  border-r-2">
                                <div className="flex gap-1 items-center">
                                    <div>
                                        <img src={crown} alt="" />
                                    </div>
                                    <p>Awarded</p>
                                </div>
                            </div>

                            <div className="grid items-center justify-center  border-r-2">
                                <button className="bg-green-400 flex items-center px-6 gap-2  text-white py-1 rounded">
                                    <img src={bit} alt="" />
                                    Bid</button>
                                <button className="bg-green-100 flex items-center px-6 gap-2 border-green-400 border  text-green-400 py-1 rounded">View</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 bg-white mb-5">
                        <div className="grid grid-cols-2 gap-2 ">
                            <div className="flex  gap-2 items-center ">
                                <img className="" src={p3} alt="" />
                                <div className="border-r-2 px-1">
                                    <h2 className="text-md "> ACDC #08 Outdoor</h2>
                                    <p className="text-md text-gray-300">The Green Bull 2 LLC</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 items-center border-r-2 px-1">
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>THC</h2>
                                        <h2>70%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/3 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>CBD</h2>
                                        <h2>1%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/12 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="grid grid-cols-3">
                            <div className=" px-1 grid grid-cols-1 items-center border-r-2  ">
                                <div className="text-center ">
                                    <p>Asking Price</p>
                                    <h2 className="text-xl">$600.00/lb</h2>
                                </div>
                            </div>
                            <div className="grid items-center justify-center  border-r-2">
                                <div className="flex gap-1 items-center">
                                    <div><img src={cross} alt="" /></div>
                                    <p className="text-red-400">Closed</p>
                                </div>
                            </div>

                            <div className="grid items-center justify-center  border-r-2">
                                <button className="bg-green-400 flex items-center px-6 gap-2  text-white py-1 rounded">
                                    <img src={bit} alt="" />
                                    Bid</button>
                                <button className="bg-green-100 flex items-center px-6 gap-2 border-green-400 border  text-green-400 py-1 rounded">View</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 bg-white mb-5">
                        <div className="grid grid-cols-2 gap-2 ">
                            <div className="flex  gap-2 items-center ">
                                <img className="" src={p1} alt="" />
                                <div className="border-r-2 px-1">
                                    <h2 className="text-md "> ACDC #08 Outdoor</h2>
                                    <p className="text-md text-gray-300">The Green Bull 2 LLC</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 items-center border-r-2 px-1">
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>THC</h2>
                                        <h2>70%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/3 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between px-2 text-gray-300">
                                        <h2>CBD</h2>
                                        <h2>1%</h2>
                                    </div>
                                    <div class="w-11/12 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/12 h-full text-center text-xs text-white bg-[#4CAF50] rounded-full"></div>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="grid grid-cols-3">
                            <div className=" px-1 grid grid-cols-1 items-center border-r-2  ">
                                <div className="text-center ">
                                    <p>Asking Price</p>
                                    <h2 className="text-xl">$600.00/lb</h2>
                                </div>
                            </div>
                            <div className="grid items-center justify-center  border-r-2">
                                <div className="flex gap-1 items-center">
                                    <div>
                                        <img src={pending} alt="" />
                                    </div>
                                    <p>Awarded</p>
                                </div>
                            </div>

                            <div className="grid items-center justify-center  border-r-2">
                                <button className="bg-green-400 flex items-center px-6 gap-2  text-white py-1 rounded">
                                    <img src={bit} alt="" />
                                    Bid</button>
                                <button className="bg-green-100 flex items-center px-6 gap-2 border-green-400 border  text-green-400 py-1 rounded">View</button>
                            </div>
                        </div>
                    </div>









                </div>
            </div>
        </div>
    )
}

export default AllAction