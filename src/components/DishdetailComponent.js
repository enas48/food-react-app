import React, { Component } from 'react';
import { Card,CardBody,CardText,CardTitle,CardImg} from 'reactstrap';

class DishDetail extends Component {

renderDish(dish){
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

renderComments(comments){
    if (comments != null){
const commentItem =comments.map((comment)=>{
    return(
      <li key={comment.id}>
         <p>{comment.comment}</p>
         <p>--{comment.author}, {comment.date}</p>
      </li>
    )
})
return (
<div>
    <h4>Comments</h4>
    <ul className="list-unstyled">{commentItem}</ul>
</div>
)
} else{
    return (
        <div></div>
    )
}

}
    render(){
        if(this.props.dish != null){
            return(
                <div className="row">
                     <div className="col-12 col-md-5 m-1 ">
                         {this.renderDish(this.props.dish)}
                     </div>
                     <div className="col-12 col-md-5 m-1 ">
                         {this.renderComments(this.props.dish.comments)}
                     </div>
                </div>
            )
    
        } else{
            return(
                <div></div>
            )
        }
    }
}
 
export default DishDetail;