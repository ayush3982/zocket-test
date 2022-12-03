import React, {useState} from 'react'
import styles from '../styles/campaign.module.css'
import plus from './../assets/plus.svg'
import search from './../assets/search.svg'
import Table from '../components/Table'
import NewCampaign from '../components/NewCampaign'
// import CampaignTable from '../components/CampaignTable'

const Campaign = () => {

    const [newCampaign, setNewCampaign] = useState(true);

    const handleClick = () => {
        setNewCampaign(true)
    }

    return (
        <>
            {!newCampaign && (
                <div className = {styles.campaignContainer}>
                <div className = {styles.campaignHeader}>
                    <div className = {styles.campaignText}>
                        <div className = {styles.textOne}>Your Campaigns</div>
                        <div className = {styles.textTwo}>Check the list of campaigns you created</div>
                    </div>
                    <div className = {styles.campaignButton} onClick = {handleClick}>
                        <img src = {plus} />
                        <span className = {styles.buttonText}>Create New Campaign</span>
                    </div>
                </div>
                <div className = {styles.campaignTableContainer}>
                    <div className = {styles.tableHeader}>
                       <div className = {styles.searchBar}>
                        <img src = {search} className = {styles.searchIcon}/>
                        <input type="text" className = {styles.search} placeholder = "Search for the Campaign" />
                       </div>
                       <div className = {styles.filters}>
                            <div className = {styles.textTwo}> Platform: </div>
                            <select className = {styles.platform}>
                                <option>All Platforms</option>
                                <option>Facebook</option>
                                <option>Instagram</option>
                                <option>Youtube</option>
                                <option>Google</option>
                            </select>
                            <div className = {styles.textTwo}>Status: </div>
                            <select className = {styles.status}>
                                <option>All Status</option>
                                <option>Live Now</option>
                                <option>Paused</option>
                                <option>Exhausted</option>
                            </select>
                            <select className = {styles.day}>
                                <option>Last 30 days</option>
                                <option>Last 60 Days</option>
                                <option>Last 90 Days</option>
                            </select>
                       </div>
                    </div>
                    <Table />
                    {/* <CampaignTable /> */}
                </div>
            </div>
            )}
            {newCampaign && (
                <NewCampaign />
            )}
        </>
    )
}

export default Campaign