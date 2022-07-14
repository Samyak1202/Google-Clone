
import React from "react";
import Search from "./Search";
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import Description from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./SearchPages.css"
import { useStateValue } from "../StateProvider.js";
import useGoogleSearch from "../useGoogleSearch";
function SearchPages() {
  const[{term}] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(term)
  console.log(data)
  return (
    <div className="searchPage">
        <div className="searchPage_header">
            <Link to = "/">
                <img src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>

            </Link>

            <div className="searchPage_headerBody">
                <Search hidebuttons/>
                <div className="searchPage_options">
                    <div className="searchPage_optionLeft">
                        <div className="searchPage_option">
                          <SearchIcon />
                          <Link to = "/all">All</Link>
                        </div>
                        <div className="searchPage_option">
                          <Description />
                          <Link to = "/all">News</Link>
                        </div>
                        <div className="searchPage_option">
                          <ImageIcon />
                          <Link to = "/all">Image</Link>
                        </div>
                        <div className="searchPage_option">
                          <LocalOfferIcon />
                          <Link to = "/all">shopping</Link>
                        </div>
                        <div className="searchPage_option">
                          <RoomIcon />
                          <Link to = "/all">Maps</Link>
                        </div>
                        <div className="searchPage_option">
                          <MoreVertIcon />
                          <Link to = "/all">more</Link>
                        </div>
                    </div>
                    <div className="searchPage_optionRight">
                        <div className="searchPage_option">
                            <Link to = "/setting">Settings</Link>
                        </div>
                        <div className="searchPage_option">
                            <Link to = "/setting">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      { 
       term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term} 
          </p>


{data?.items.map((item) => (
 <div className="searchPage_result">
  <a href={item.link} className="searchPage_resultLink">

    {item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src && (
      <img src={item.pagemap?.cse_image[0]?.src} className="searchPage_resultImage"/>
    )}
    {item.displayLink}
  </a>

  <a href={item.link} className="searchPage_resultTitle">
    <h2>{item.title}</h2>
  </a>
  <p className="searchPage_resultdescription">{item.snippet}</p>
 </div>
))}
          
        </div>)
     }
    </div>
  )
}

export default SearchPages