import React,{Component} from "react"
import { connect } from 'react-redux';

class BookList extends Component{
	renderList(){
		return this.props.book.map((book)=>{
			return(
				<li key={book.title} className="list-group-item">{book.title}</li>
			)

		});
	}
	render(){
		return (

			<ul className="col-md-4 list-group">
              {this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state){

// what is returned here will become the props
	return{
		book: state.book
	}
}

export default connect(mapStateToProps)(BookList);