# React Tutorial for Commenting on articles

Based on the React comment box example from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).
Check there for server installation on tutorial. 
Following example will use the UI structure:
- HorizontalArticleThumbnailsList: a1, a2, a3, a4
- CommentBox
- Comment List
- Author 1, Comment 1
- Author 2, Comment 2
- New Comment Form 


## To use

Start the one simple servers (python or node.js) They all serve static files from `public/` and handle requests to `comments.json` to fetch or add data. 
Start a server with one of the following:

```sh
node server.js
```
or
```sh
python server.py
```

and Open <http://localhost:3000/>. 
