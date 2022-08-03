import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination.js';
import '../styles/common.scss';
import axios from 'axios';

let PageSize = 5;

const columns = ["name", "height", "mass", "Planet Name", "gender", "Action"]
export default function App(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        await getApiData();
    }

    async function getApiData() {
        let resultData = await axios.get("https://swapi.dev/api/people").then((res) => {
            if (res?.data.results) {
                return res.data.results
            }
        })

        let fetchUsersInfoRemote = Promise.all([...resultData].map(async (val, index) => {
            try {
                let response = await axios.get(val.homeworld);
                val.planetName = response.data.name
                return val;
            }
            catch (error) {
                return;
            }
        }));
        fetchUsersInfoRemote.then(data => { setShowData(data); props.setAPIData(data) })
    }

    useEffect(() => {
        if (props.searchData?.length > 0) {
            let data = props?.apiData.filter((x) => {
                if (x.name.toLowerCase().includes(props.searchData) || x.height.toLowerCase().includes(props.searchData) || x.mass.toLowerCase().includes(props.searchData) || x.gender.toLowerCase().includes(props.searchData) || x.planetName.toLowerCase().includes(props.searchData)) {
                    return x
                }
            })
            setShowData(data)
        } else {
            setShowData(props.apiData)
        }
    }, [props.searchData?.length])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return showData?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, showData.length]);

    const handlerFav = (val, type) => {
        if (type == 1) {
            props.setUnFavData(val)
        } else {
            props.setFavData(val)
        }
    }

    const onPopupHandler = (url) => {
        props.setIsPopupOpen(url)
    }

    return (
        <>
            <center>
                <span> You have total {props.favData.length} favorite star ship </span>
            </center>

            {
                currentTableData.length > 0 ?
                    (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        {columns.map((res, key) => {
                                            return <th key={`column${key}`}> {res} </th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTableData?.map((item, key) => {
                                        return (
                                            <tr key={`row${key}`} >
                                                <td>{item.name}</td>
                                                <td>{item.height}</td>
                                                <td>{item.mass}</td>
                                                <td>{item.planetName}</td>
                                                <td>{item.gender}</td>
                                                <td>
                                                    {props.favData.find(element => element == item.url) ?
                                                        <>
                                                            <a className='favIconOn' onClick={() => handlerFav(item.url, 1)}><i className="fa fa-star"></i></a>
                                                        </>
                                                        : <>
                                                            <a className='favIconOff' onClick={() => handlerFav(item.url)}><i className="fa fa-star"></i></a>
                                                        </>
                                                    }
                                                    &nbsp;&nbsp;&nbsp;
                                                    <button className='btn btn-primary' onClick={() => onPopupHandler(item.url)}> View Details </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={showData.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </>
                    ) : <center> <h3>Data is loading please wait</h3> </center>
            }

        </>
    );
}
