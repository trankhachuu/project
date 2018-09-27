import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="custom-search-input">
                                <div className="input-group col-md-12">
                                    <input type="text" className="form-control input-lg" placeholder="Chọn điểm đi" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-info btn-lg" type="button">
                                            <i class="fas fa-map-marker"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="custom-search-input">
                                <div className="input-group col-md-12">
                                    <input type="text" className="form-control input-lg" placeholder="Chọn điểm đến" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-info btn-lg" type="button">
                                            <i class="fas fa-map-marker"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-md-6">
                            <div id="custom-search-input">
                                <div className="input-group col-md-12">
                                    <DatePicker
                                        placeholder="Ngày đi"
                                        className="form-control input-lg"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                    />
                                    <span className="input-group-btn">
                                        <button className="btn btn-info btn-lg cots_datepicker" type="button">
                                            <i class="far fa-calendar-alt"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group col-md-6">
                            <button type="button" class="btn btn-primary" style={{ width: "100%" }}>Đặt Vé Xe</button>  
                        </div>

                    </div>

                </div>
                <div className="col-md-4">/
                    <p>Noi dung 4</p>
                </div>
            </div>
        );
    }
}

export default Content;
