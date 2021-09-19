import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <>
        <h1 className='header'>{title}
        {location.pathname === '/' && <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
        />}
        </h1>
        </>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = { 
    title: PropTypes.string.isRequired,
}


export default Header
