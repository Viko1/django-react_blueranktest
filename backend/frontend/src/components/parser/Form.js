import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="card card-body mt-2 mb-2">
                <h2>XML table docker</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Url</label>
                        <textarea
                            className="form-control"
                            type="url"
                            name="message"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;