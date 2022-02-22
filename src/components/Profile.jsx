import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from "react";


function Profile(props) {
    return (
        <div className="md:flex">
        <div className="sm:w-[400px] bg-[#950740] mt-6 mb-4 mr-6 px-2 py-3 rounded-2xl sm:h-full">
            {/* profile-view */}
            <div className="flex">
                <img className="w-[100px] h-[100px] rounded-full mt-2" src={props.avatar} alt="avatar" />
                <div className="text-[16px] mt-4 ml-6">
                    <h1 className="text-2xl">{props.name}</h1>
                    <p className="opacity-75 text-blue-400">@ {props.login}</p>
                    <p className="opacity-75">Joined at {props.created}</p>
                </div>
            </div>
            {/* bio */}
            <p className="text-[18px] opacity-[90%] mt-8 ml-4 sm:text-2xl">{props.bio}</p>
            <table className="bg-[#6f2232] mx-auto text-sm w-[90%] text-center mt-6 h-[80px] rounded-xl">
                <tbody>
                    <tr className="opacity-75">
                        <td>Repos</td>
                        <td>Followers</td>
                        <td>Following</td>
                    </tr>
                    <tr className="text-extrabold text-[18px]">
                        <td>{props.repos}</td>
                        <td>{props.followers}</td>
                        <td>{props.following}</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-[20px] mt-4 ml-4 justify-evenly opacity-75 space-y-3">
                <p><FontAwesomeIcon icon={faLocationDot} /> {props.location}</p>
                <p><FontAwesomeIcon icon={faTwitter} /> {props.twitter}</p>
                <p><FontAwesomeIcon icon={faLink} /> {props.blog} </p>
                <p></p>
                <p></p>
            </div>
        </div>
        </div>
    )
}

export default Profile;