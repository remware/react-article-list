// lessons.js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h5 className="commentAuthor">
          {this.props.author}
        </h5>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
		<Comment author="Rem">This article is great, thanks for sharing</Comment>
        <Comment author="Marcos">Good article, any references?</Comment>
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (		
		<div className="commentBox">
		  <h4>Comments</h4>
		   <CommentList /> 
		   
		</div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('comments')
);


var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Enter your Comments here.
      </div>
    );
  }
});


