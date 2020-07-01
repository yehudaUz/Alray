import React from 'react';
import TopMenu from '../components/TopMenu'
import Ads from '../components/Ads'
import TopSubMenu from '../components/TopSubMenu'
import SiteMapLink from '../components/SiteMapLink'
import {  realestate } from '../other/textData'


const Realestate = () => {
    return (
        <>
            <TopMenu />
            <TopSubMenu buttonsCategory={realestate} />
            <SiteMapLink />
            <Ads />
        </>
    )
}

export default Realestate;
