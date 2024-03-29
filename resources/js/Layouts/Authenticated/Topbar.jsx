import avatarLogo from "../../../images/avatar.png";
import iconSearch from "../../../icons/ic_search.svg";
import { useState, useRef } from "react";

export default function Topbar() {
    const [dropDownOpen, setDropdownOpen] = useState(true);
    const dropDownTarget = useRef();

    const triggerDropdown = () => {
        if (dropDownOpen) {
            dropDownTarget.current.classList.remove("hidden");
        } else {
            dropDownTarget.current.classList.add("hidden");
        }

        setDropdownOpen(!dropDownOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center cursor-pointer">
                <input
                    type="text"
                    className="top-search"
                    placeholder="Search movie, cast, genre"
                />
                <div className="flex items-center gap-4">
                    <span className="text-black text-sm font-medium">
                        Welcome, Granola Sky
                    </span>

                    <div className="collapsible-dropdown flex flex-col gap-2 relative">
                        <div
                            className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                            onClick={triggerDropdown}
                        >
                            <img
                                src={avatarLogo}
                                className="rounded-full object-cover w-full"
                                alt=""
                            />
                        </div>
                        <div
                            className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                            ref={dropDownTarget}
                        >
                            <a
                                href="#!"
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#!"
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Settings
                            </a>
                            <a
                                href="sign_in.html"
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>
                </div>
                <style jsx="true">
                    {`
                        .top-search {
                            background-image: url(${iconSearch});
                        }
                    `}
                </style>
            </div>
        </>
    );
}
