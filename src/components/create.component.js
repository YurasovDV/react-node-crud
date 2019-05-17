import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGSTNumber = this.onChangeGSTNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            gst_number: ''
        };
    }


    onChangePersonName(e) {
        this.setState({ person_name: e.target.value });
    }

    onChangeBusinessName(e) {
        this.setState({ business_name: e.target.value });
    }

    onChangeGSTNumber(e) {
        this.setState({ gst_number: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.gst_number}`);


        const obj = {
            person_name: this.state.person_name,
            business_name: this.state.business_name,
            gst_number: this.state.gst_number
        };

        axios.post('http://localhost:4563/business/add', obj)
            .then(function (res) {
                console.log(res.data);

                this.setState({
                    person_name: '',
                    business_name: '',
                    gst_number: ''
                });
            });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>ADD NEW</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>
                            Person name:
                        </label>
                        <input type="text" className="form-control" onChange={this.onChangePersonName} value={this.state.person_name} />
                    </div>

                    <div className="form-group">
                        <label>
                            Business name:
                        </label>
                        <input type="text" className="form-control" onChange={this.onChangeBusinessName} value={this.state.business_name} />
                    </div>

                    <div className="form-group">
                        <label>
                            GST Number:
                        </label>
                        <input type="text" className="form-control" onChange={this.onChangeGSTNumber} value={this.state.gst_number} />
                    </div>
                    <div className="form-group">

                        <input type="submit" value="Register new business" className="btn btn-primary"  />

                    </div>

                </form>
            </div>
        );
    }
}