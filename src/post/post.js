import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h3>ID: {this.props.match.params.id}</h3>
            </div>
        );
    }
}

export default Post;