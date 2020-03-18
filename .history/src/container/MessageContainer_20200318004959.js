import React from 'react';
import {connect} from 'react-redux';
import Message from './../components/Message';

class MessageContainer extends React.Component {
    render() {
        var {message} = this.props;
        return(
            <div>
                <Message message = {message} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);