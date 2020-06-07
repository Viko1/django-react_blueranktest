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
                <main>
                    <div style={{width: '400px', padding: '10px'}}>
                        <form name="rss_read">
                            <input id="remote_url" type="text" name="remote_url" defaultValue required="required"/>
                            <button id="load_url" type="button" name="button" >Read</button>
                        </form>
                    </div>
                    <br/>
                    <div style={{width: '600px', padding: '10px'}}>
                        <table id="rss_table"
                               className=""
                               style={{}}>
                            <thead>
                            <tr>
                                <th>g:id</th>
                                <th>g:price</th>
                                <th>g:availability</th>
                                <th>title</th>
                                <th>g:custom_label_0</th>
                                <th>g:custom_label_1</th>
                                <th>g:custom_label_2</th>
                                <th>g:custom_label_3</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan="100%">No data</td>
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