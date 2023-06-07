import React, { useContext } from 'react'
import AlertCoinContext from '../../context/alert/AlertCoinContext'
function Alert() {
  const { alert } = useContext(AlertCoinContext)
  return alert !== null && (
    <div>
      <div className={`alert alert-${alert.type} shadow-lg`}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{alert.msg}</span>
        </div>
      </div>
    </div>
  )
}

export default Alert
