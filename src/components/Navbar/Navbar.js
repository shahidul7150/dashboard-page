import React from 'react'
import rign from '../../assets/rign.png'
import message from '../../assets/message.png'
import profile from '../../assets/profile.png'
import logout from '../../assets/logout.png'
const Navbar = () => {
    return (
        <div className="bg-white flex justify-between items-center w-[1050px] px-12">
            <div>
                <p>Auction/<span>All Auction</span> </p>
            </div>
            <div className="flex item-center">
                <ul className="flex justify-center gap-5 items-center py-3">
                    <li>
                        <img src={rign} alt="" />
                    </li>
                    <li>
                        <img src={message} alt="" />
                    </li>
                    <li>
                        <img src={profile} alt="" />
                    </li>
                    <li>
                        <img src={logout} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar