import { faBox, faBuilding, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import hubpot from '../../assets/images/hubspot-v2.svg';
import salesforce from '../../assets/images/salesforce.svg';
import { choice, contactInfo, nohead, others, ratingRanking, textVideo } from "../data/mockdata";
import { useMemo, useState } from "react";
import Group from "./group";

function AddformElements() {
    const [searchText,setSearchText] = useState('');
    const q = searchText.trim().toLowerCase();
    const filteredContactInfo = useMemo(
        ()=>(q ? contactInfo.filter(i=>i.name.toLowerCase().includes(q)) : contactInfo),[q]
    )
    const filteredChoice = useMemo(
        () => (q ? choice.filter(i => i.name.toLowerCase().includes(q)) : choice),
        [q]
    );
    const filteredRatingRanking = useMemo(
        () => (q ? ratingRanking.filter(i => i.name.toLowerCase().includes(q)) : ratingRanking),
        [q]
    );
    const filteredTextVideo = useMemo(
        () => (q ? textVideo.filter(i => i.name.toLowerCase().includes(q)) : textVideo),
        [q]
    );
    const filteredOthers = useMemo(
        () => (q ? others.filter(i => i.name.toLowerCase().includes(q)) : others),
        [q]
    );
    const filteredNoHead = useMemo(
        () => (q ? nohead.filter(i => i.name.toLowerCase().includes(q)) : nohead),
        [q]
    );
    const nothingFound =
        filteredContactInfo.length === 0 &&
        filteredChoice.length === 0 &&
        filteredRatingRanking.length === 0 &&
        filteredTextVideo.length === 0 &&
        filteredOthers.length === 0 &&
        filteredNoHead.length === 0;

    return (
        <div
        className="bg-[#ebebeb] w-[98%] ml-auto mt-5 h-[540px] overflow-y-scroll rounded-xl"
        >
            <div
            className="flex flex-row h-[300px]"
            >
                <div
                className="flex flex-col w-[30%]"
                >
                    {/* input box */}
                    <div
                    className="flex w-[90%] ml-8 mt-5"
                    >
                        {/* input div */}
                        <div
                        className="bg-slate-50 rounded-lg p-1"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input type="text"
                            className="h-[30px] border-0 outline-0"
                            placeholder="Search form Elements"
                            onChange={(e)=>setSearchText(e.target.value)}
                            value={searchText}
                            />
                        </div>
                    </div>
                    {/* recommended */}
                    <div
                    className="w-[80%] ml-8 mt-3"
                    >
                        <p className="font-medium text-sm">Recommended</p>
                        <div
                        className="flex hover:bg-slate-200 cursor-pointer flex-row items-center border-1 w-[90%] gap-2 rounded-md mt-2 p-2"
                        >
                            <FontAwesomeIcon icon={faBox} />
                            <p className="text-sm">Welcome screen</p>
                        </div>
                    </div>
                    {/* Connect to Apps */}
                    <div
                    className="w-[80%] ml-8 mt-3"
                    >
                        <p className="font-medium text-sm">Connect to Apps</p>
                        <div
                        className="flex flex-row items-center border-1 w-[90%] gap-2 rounded-md mt-2 p-2 cursor-pointer hover:bg-slate-200"
                        >
                            <img src={hubpot} alt="" />
                            <p className="text-sm">Hubspot</p>
                        </div>
                        <div
                        className="flex flex-row items-center border-1 w-[90%] gap-2 rounded-md mt-2 p-2 cursor-pointer hover:bg-slate-200"
                        >
                            <img src={salesforce} alt="" width={"25px"} />
                            <p className="text-sm">Salesforce</p>
                        </div>
                        <div
                        className="flex flex-row items-center border-1 w-[90%] gap-2 rounded-md mt-2 p-2 cursor-pointer hover:bg-slate-200"
                        >
                            <FontAwesomeIcon icon={faBuilding} />
                            <p className="text-sm">Browse All Apps</p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex w-[65%] mt-10 flex-col gap-5"
                >
                    {nothingFound ? (
                    <div className="text-slate-500 text-sm flex items-center justify-center h-[300px]">No matches found.</div>
                    ):(
                        <div>
                            <div className="flex flex-row justify-between">
                                <Group title="Contact Info" colorClass="bg-pink-300" items={filteredContactInfo}/>
                                <Group title="Choice" colorClass="bg-violet-300" items={filteredChoice}/>
                                <Group title="Rating & Ranking" colorClass="bg-green-200" items={filteredRatingRanking} />
                            </div>
                            <div className="flex flex-row justify-between">
                                <Group title="Text & Video" colorClass="bg-blue-300" items={filteredTextVideo} />
                                <Group title="Others" colorClass="bg-amber-200" items={filteredOthers} />
                                <div className="mt-4">
                                    <Group colorClass="bg-slate-500" items={filteredNoHead} />
                                </div>
                            </div>
                        </div>
                    )
                
                }
                </div>
            </div>  
        </div>
    )
}

export default AddformElements