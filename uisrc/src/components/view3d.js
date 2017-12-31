import React from 'react';
import { connect } from 'react-redux';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <iframe id="threeiframe" src="./iframe.html"></iframe>
        );
    }
}
export default Page;
