import React from 'react';
import TopMenu from '../components/TopMenu'
import Ads from '../components/Ads'
import TopSubMenu from '../components/TopSubMenu'
import SiteMapLink from '../components/SiteMapLink'
import { cars } from '../other/textData'
import SearchBar from '../components/SearchBar.js'
import SearchResult from '../components/SearchResult'
// import Testing from './Testing.js'


const Cars = () => {
    return (
        <>
            <TopMenu />
            <TopSubMenu buttonsCategory={cars} />
            <SiteMapLink />
            <Ads />
            <SearchBar/>
            <SearchResult/>
            {/* <Testing/> */}
        </>
    )
}

export default Cars;
