import React, { useState, useEffect } from "react"

const Search = (props) => {
    const [searchData, setSearchData] = useState("");
    const [timerID, setTimerID] = useState(0)

    function throttleFunction(val, delay) {
        if (timerID) {
            return
        }

        let temp = setTimeout(function () {
            props.searchContent(val)
            setTimerID(0)
        }, delay)
        setTimerID(temp)
    }

    function handler(e) {
        setSearchData(e.target.value);
        throttleFunction(e.target.value, 300)
    }

    return (
        <center>
            <input placeholder="Please enter at least three characters" type="text" className="search-box" value={searchData} onChange={(e) => { handler(e); }} />
        </center>
    )
}

export default Search