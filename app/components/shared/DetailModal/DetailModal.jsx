import React from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';

class DetailModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            book : {
                title : '',
                description : '',
                author : '',
                imageUrl : '',
                id : ''
            },
            disable: false
        };
    }

    componentWillMount() {
        this.setState({ book: this.props.book });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onEdit(this.state.book);
    }

    handleInpChange = (e) => {
        if(_.isEmpty(e.target.value))
            this.setState({disable : true});
        else {
            const newState = Object.assign({}, this.state.book, {
                [e.target.name]: e.target.value
            });

            this.setState({book: newState, disable : false});
        }
    }

    render() {
        return (
            <div className="modal-backdrop detail-modal-background">
                <button type="button" className="close-detail-modal close" data-dismiss="modal" aria-label="Close"
                        onClick={this.props.onHideModal}>
                    <span>&times;</span>
                </button>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-sm-4 detail-modal">
                        <div className="detail_modal_heading"><b>EDIT BOOK</b></div>
                        <div>
                            <div className="form-group col-sm-12">
                                <label>Title:</label>
                                <input type="text" ref="title" name="title" className="form-control" placeholder="Title"
                                       defaultValue={this.state.book.title} onChange={this.handleInpChange}/>
                            </div>
                            <div className="form-group col-sm-12">
                                <label>Description:</label>
                                <input type="textarea" ref="description" name="description" className="form-control" placeholder="Description"
                                       defaultValue={this.state.book.description} onChange={this.handleInpChange}/>
                            </div>
                            <div className="form-group col-sm-12">
                                <label>Author:</label>
                                <input type="text" name="author" className="form-control" placeholder="Author"
                                       defaultValue={this.state.book.author} onChange={this.handleInpChange}/>
                            </div>
                        </div>
                        <div className="button_right">
                            <button type="submit" className="btn btn-default save_button" disabled={this.state.disable}
                                    onClick={this.handleSubmit}>save
                            </button>
                            <button type="button" className="btn btn-default" onClick={this.props.onHideModal}>cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

DetailModal.propTypes = {
    book : PropTypes.object.isRequired,
    onHideModal : PropTypes.func.isRequired,
    onEdit : PropTypes.func.isRequired
}

export default DetailModal;