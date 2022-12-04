import React from 'react';
import styles from '../styles/table.module.css'
import TableRow from './TableRow';
import { oneData } from '../data/one';


const Table = () => {
    return (
        <>
           <div className = {styles.tableMenu}>
            <div className = {styles.boxOne}></div>
            <div className = {styles.boxTwo}>
                    <input className = {styles.check} type="checkbox"/>
                    <div className = {styles.on}>On/Off</div>
                    <div className = {styles.campaign}>Campaign</div>
                    <div className = {styles.data}>Data Range</div>
                    <div className = {styles.clicks}>Clicks</div>
                    <div className = {styles.budget}>Budget</div>
                    <div className = {styles.location}>Location</div>
                    <div className = {styles.platform}>Platform</div>
                    <div className = {styles.status}>Status</div>
                    <div className = {styles.action}>Actions</div>
            </div>
            <div className = {styles.boxThree}></div>
            </div>
           <div className = {styles.tableRows}>
            {oneData.map((data) =>
                <TableRow 
                    title = {data.title}
                    created = {data.created}
                    range = {data.range}
                    clicks = {data.clicks}
                    budget = {data.budget}
                    location = {data.location}
                    platform = {data.platform}
                    status = {data.status}
                    image = {data.image}
                />
            )}
           </div>
        </>
    )
}

export default Table