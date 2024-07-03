import React from 'react'
import { Link } from 'react-router-dom'

function DashboardIndex() {
  return (
    <>
        <ul>
            <li>
                <Link to={'/dashboard/overview'}>Overview</Link>
            </li>
            <li>
                <Link to={'/dashboard/stats'}>Stats</Link>
            </li>
            <li>
                <Link to={'/dashboard/notifications'}>Notifications</Link>
            </li>
            <li>
                <Link to={'/dashboard/settings'}>Settings</Link>
            </li>
            <li>
                <Link to={'/dashboard/item'}>Items</Link>
            </li>
        </ul>
    </>
  )
}

export default DashboardIndex