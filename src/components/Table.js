import React from 'react';
import styles from '../styles/table.module.css'
import TableRow from './TableRow';

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
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
           </div>
        </>
    )
}

export default Table