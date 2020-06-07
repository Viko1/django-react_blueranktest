import React, {Component} from 'react';

class Parser extends Component {

    render() {


        let url = 'https://feed.hitspot.media/rajapack.xml';
        load_rss_to_table(url);


        function load_rss_to_table(theUrl) {
            if (!theUrl) {
                return;
            }

            let xmlHttp = null;

            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl, false);
            xmlHttp.send(null);

            let res = xmlHttp.response;

            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(res, 'application/xml');

            if (!xmlDoc) {
                return;
            }


            let collection = xmlDoc.firstChild.children[0].children;

            if (collection.length) {
                document.getElementById('rss_table').children[1].innerHTML = '';

                let cols = ['g:id', 'g:price', 'g:availability', 'title', 'g:custom_label_0', 'g:custom_label_1', 'g:custom_label_2', 'g:custom_label_3'];

                for (let i = 0; i < 15; i++) {
                    let item = collection[i].children;
                    let row = {
                        gid: null,
                        gprice: null,
                        gavailability: null,
                        title: null,
                        gcustom_label_0: null,
                        gcustom_label_1: null,
                        gcustom_label_2: null,
                        gcustom_label_3: null,
                    };

                    for (let k = 0; k < cols.length; k++) {
                        for (let j = 0; j < item.length; j++) {
                            if (cols.includes(item[j].nodeName)) {
                                let name = item[j].nodeName;
                                name = name.replace(':', '');
                                // NOTE: make a full string regex, and allow only next [a-zA-Z_]

                                row[name] = item[j].innerHTML;
                            }
                        }
                    }

                    let row_html = '<tr>' +
                        '<td>' + row.gid + '</td>' +
                        '<td>' + row.gprice + '</td>' +
                        '<td>' + row.gavailability + '</td>' +
                        '<td>' + row.title + '</td>' +
                        '<td>' + row.gcustom_label_0 + '</td>' +
                        '<td>' + row.gcustom_label_1 + '</td>' +
                        '<td>' + row.gcustom_label_2 + '</td>' +
                        '<td>' + row.gcustom_label_3 + '</td>' +
                        '</tr>';
                    document.getElementById('rss_table').children[1].innerHTML = document.getElementById('rss_table').children[1].innerHTML + row_html;
                }
            } else {
                document.getElementById('rss_table').children[1].innerHTML = '<tr><td colspan="100%">No data</td></tr>';
            }
        }


        return (
            <div>
                <div id="root"/>
                <main>
                    <h1 style={{color: 'white', textAlign: 'center', marginTop: '200px'}}>RSS parser put your url right
                        below</h1>
                    <div style={{textAlign: 'center', padding: '10px', marginTop: '50px'}}>
                        <form name="rss_read" type="url" required>
                            <input title="The URL must contain xml" id="remote_url" name="remote_url"
                                   placeholder="https://feed/example.xml" type="url" required/>
                            <button id="load_url" type="button" name="button">Read</button>
                        </form>
                    </div>
                    <br/>
                    <div style={{marginLeft: '200px', padding: '10px', textAlign: 'center', marginRight: '200px'}}>
                        <table id="rss_table"
                               className="table table-striped table-bordered table-hover table-sm no-footer"
                               style={{display: 'none'}}>
                            <thead style={{backgroundColor: 'bisque'}}>
                            <tr>
                                <th>id</th>
                                <th>Price</th>
                                <th>Availability</th>
                                <th>title</th>
                                <th>Custom_label_0</th>
                                <th>Custom_label_1</th>
                                <th>Custom_label_2</th>
                                <th>Custom_label_3</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'beige'}}>
                            <tr>
                                <td colSpan="100%">Url is needed/ or data in no rss-&gt;channel-&gt;item(s) structure
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        );
    }
}

export default Parser;