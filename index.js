let express = require('express');
let app = express();
 
 
const port = 2112;
app.listen(port, () => {

    console.log(`Listening on port ${port}`);
});

 
app.get('/blog', (req, res) =>{
    post={
        "post_id": 12345,
        "post_title": "The title of my first post!",
        "post_text": "Here is some text for this post"
      }
     
})

 