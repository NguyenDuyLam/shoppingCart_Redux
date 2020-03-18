import React from 'react';
import {connect} from 'react-redux';
import Message from './../components/Message';

class MessageContainer extends React.Component {
    render() {
        return(
            <div>
                <Message />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, null)(MessageContainer);