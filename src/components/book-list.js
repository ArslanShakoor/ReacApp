import React,{Component} from "react"

export default class BookList extends Component{
	renderList(){
		this.props.books.map((book)=>{
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
		)
	}
}