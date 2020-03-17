import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getTechs} from '../../actions/techActions'

const techSelectOptions = ({getTechs, tech: {techs, loading}}) => {
    return (
        <div>
            
        </div>
    )
}

techSelectOptions.propTypes = {
tech: PropTypes.object.isRequired,
getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    tech:state.tech
})

export default techSelectOptions
