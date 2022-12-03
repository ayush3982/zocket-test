import React from 'react';
import SideButton from './SideButton';
import styles from './../styles/layout.module.css';
import translate from './../assets/translate.svg'
import avatar from './../assets/avatar.svg'
import bell from './../assets/bell.svg'
import bottomArrow from './../assets/bottomArrow.svg'
import crown from './../assets/crown.svg'
import giftBox from './../assets/giftBox.svg'
import blueLogo from './../assets/blueLogo.svg'
import homeMuted from './../assets/homeMuted.svg'
import homeActive from './../assets/homeActive.svg'
import campaignMuted from './../assets/campaignMuted.svg'
import campaignActive from './../assets/campaignActive.svg'
import productMuted from './../assets/productMuted.svg'
import productActive from './../assets/productActive.svg'
import customersMuted from './../assets/customersMuted.svg'
import customersActive from './../assets/customersActive.svg'

const Layout = ({children}) => {
    return (
       <div className = {styles.container}>
            <div className = {styles.sideBar}>
                <img className = {styles.blueLogo} src = {blueLogo} />
                <div className = {styles.buttonContainer}>
                   
                        <SideButton where = "/" iconMuted = {homeMuted} iconActive = {homeActive} iconName = "Home"/>
                   
                        <SideButton where = "/campaign" iconMuted = {campaignMuted} iconActive = {campaignActive} iconName = "Campaign"/>
                   
                        <SideButton where = "/products" iconMuted = {productMuted} iconActive = {productActive} iconName = "Products"/>
                   
                        <SideButton where = "/customers" iconMuted = {customersMuted} iconActive = {customersActive} iconName = "Customers"/>
                </div>
            </div>
            <div className = {styles.restBody}>
                <div className = {styles.header}>
                   <div className = {styles.trial}>
                        Free trial ends in 2 days
                   </div>
                   <div className = {styles.crownBox}>
                    <img src = {crown} />
                    <div className = {styles.crownText}>Buy Plan</div>
                   </div>
                   <img className = {styles.giftBox} src = {giftBox} />
                   <img className = {styles.bell} src = {bell} />
                   <img className = {styles.avatar} src = {avatar} />
                   <div className = {styles.name}>
                    Mukund cake shop
                   </div>
                   <img className = {styles.bottomArrow} src = {bottomArrow} />
                   <img className = {styles.translate} src = {translate} />
                </div>
                <div className = {styles.stage}>
                {children}
                </div>
            </div>
       </div>
    )
}

export default Layout