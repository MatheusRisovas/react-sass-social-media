import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <section className="container">
        <a href="posts" className="btn">Back to posts</a>
        <div className="post bg-white p-1 my-1">
            <div>
                <a href="profile">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
                        className="round-img" />
                    <h4>John Doe</h4>
                </a>
            </div>
            <div>
                <p className="my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis orci, sit amet
                    sollicitudin metus. Duis venenatis odio felis, sit amet egestas mi gravida at. Nam id odio euismod,
                    mollis ipsum sit amet, bibendum quam. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; In id accumsan odio. Mauris id feugiat lectus. Suspendisse sem eros,
                    vestibulum eget elementum sit amet, bibendum ut nisl. Nulla hendrerit commodo libero interdum
                    consectetur. Vestibulum a massa dignissim, vulputate lacus egestas, feugiat leo.
                </p>
            </div>
        </div>
        <div className="post-form">
            <div className="post-form-header bg-primary">
                <h3>Leave A Comment</h3>
            </div>
            <form className="form my-1">
                <textarea name="text" cols="30" rows="5" placeholder="Comment on this post"></textarea>
                <input type="submit" value="Submit" className="btn btn-dark my-1" />
            </form>
        </div>
        <div className="post bg-white my-1">
            <div>
                <a href="profile">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
                        className="round-img" />
                    <h4>John Doe</h4>
                </a>
            </div>
            <div>
                <p className="my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis orci, sit amet
                    sollicitudin metus. Duis venenatis odio felis, sit amet egestas mi gravida at. Nam id odio euismod,
                    mollis ipsum sit amet, bibendum quam. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; In id accumsan odio. Mauris id feugiat lectus. Suspendisse sem eros,
                    vestibulum eget elementum sit amet, bibendum ut nisl. Nulla hendrerit commodo libero interdum
                    consectetur. Vestibulum a massa dignissim, vulputate lacus egestas, feugiat leo.
                </p>
            </div>
        </div>
        <div className="post bg-white my-1">
            <div>
                <a href="profile">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
                        className="round-img" />
                    <h4>John Doe</h4>
                </a>
            </div>
            <div>
                <p className="my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis orci, sit amet
                    sollicitudin metus. Duis venenatis odio felis, sit amet egestas mi gravida at. Nam id odio euismod,
                    mollis ipsum sit amet, bibendum quam. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; In id accumsan odio. Mauris id feugiat lectus. Suspendisse sem eros,
                    vestibulum eget elementum sit amet, bibendum ut nisl. Nulla hendrerit commodo libero interdum
                    consectetur. Vestibulum a massa dignissim, vulputate lacus egestas, feugiat leo.
                </p>
            </div>
        </div>
    </section>
    )
  }
}
export default Post;