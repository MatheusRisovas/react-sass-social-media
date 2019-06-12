import React, { Component } from 'react'

class Posts extends Component {
  render() {
    return (
      <section className="container">
       <h1 className="large text-primary">Posts</h1>
       <p className="lead"><i className="fas fa-user"></i> Welcome to the community</p>
       <div className="post-form">
           <div className="post-form-header bg-primary">
               <h3>Say something...</h3>
           </div>
           <form className="form my-1">
               <textarea cols="30" rows="5" placeholder="Create a post"></textarea>
               <input type="submit" value="Submit" className="btn btn-dark my-1" />
           </form>
           <div className="posts">
               <div className="post bg-white my-1">
                   <div>
                       <a href="profile">
                           <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" className="round-img" />
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
                       <button className="btn">
                           <i className="fas fa-thumbs-up"></i> <span>4</span>
                       </button>
                       <button className="btn">
                           <i className="fas fa-thumbs-down"></i> <span>2</span>
                       </button>
                       <a href="post" className="btn btn-primary">Discussion</a>
                   </div>
               </div>
               <div className="post bg-white my-1">
                <div>
                    <a href="profile">
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" className="round-img" />
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
                    <button className="btn">
                        <i className="fas fa-thumbs-up"></i> <span>4</span>
                    </button>
                    <button className="btn">
                        <i className="fas fa-thumbs-down"></i> <span>2</span>
                    </button>
                    <a href="post" className="btn btn-primary">Discussion</a>
                </div>
            </div>
           </div>
       </div>
    </section>
    )
  }
}
export default Posts;