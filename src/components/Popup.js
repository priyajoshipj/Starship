import React, { useState, useEffect } from "react"

const Search = (props) => {

    const [popupData, setPopupData] = useState([])

    const handler = () => {
        props.setIsPopupOpen("")
        setPopupData([])
    }

    const handlerFav = (val, type) => {
        if (type == 1) {
            props.setUnFavData(val)
        } else {
            props.setFavData(val)
        }
    }
    useEffect(() => {
        if (props.getIsPopupOpen) {
            let temp = props.apiData.filter((x) => {
                return x.url == props.getIsPopupOpen
            })
            setPopupData(temp)
        }
    }, [props.getIsPopupOpen])
    return (
        <>
            {popupData && <>
                <button onClick={() => handler()} className="popup-close"> ❌ </button>
                {popupData.map((val) => {
                    return (
                        <>
                            <h1> {val.name} </h1>

                            <p className="fav-desp">
                                {props.favData.find(element => element == val.url) ?
                                    <>
                                        This is your favourite  <a className='favIconOn' onClick={() => handlerFav(val.url, 1)}><i className="fa fa-star"></i></a> starship
                                    </>
                                    : <>
                                        <a className='favIconOff' onClick={() => handlerFav(val.url)}><i className="fa fa-star"></i></a>
                                    </>
                                }
                            </p>
                            <br />
                            <br />

                            <p> hair colour : {val.hair_color}</p>
                            <ul>
                                {val.films.map((v, idx) => {
                                    return <li> <a href={v}> films {idx + 1} </a> </li>
                                })}
                            </ul>
                            <p> eye color : {val.eye_color}</p>
                            <p> gender : {val.gender} </p>
                            <p> homeworld :  <a href={val.homeworld} >  {val.homeworld}  </a> </p>
                            <p> planetName : {val.planetName} </p>
                            {
                                val.starships ? <ul>
                                    {val.starships.map((v, idx) => {
                                        return <li> <a href={v}> starships {idx + 1} </a> </li>
                                    })}
                                </ul> : <p>starships : No starships found</p>
                            }

                        </>
                    )
                })}

            </>}

        </>
    )
}

export default Search