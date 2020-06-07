import React, {Component} from 'react';

class Parser2 extends Component {
    render() {
        let xmlHttp = null;
        let theUrl = 'https://feed.hitspot.media/rajapack.xml';

        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send(null);

        let res = xmlHttp.response;

        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(res, 'text/xml');

        let collection = xmlDoc.firstChild.children[0].children;


        return (
            <div>

            </div>
        );
    }
}

export default Parser2;