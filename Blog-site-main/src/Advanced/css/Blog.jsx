import React from 'react'

function Blog(props) {
  return (
    <>

    <div id='blog' class="card mb-3 ">
  <div class="row g-0"> 
    <div class="col-md-12">
      <div class="card-body">
      <img src={props.img} class="img-fluid rounded-start w-90" alt="img not found"/>
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.cardText}</p>
        <p class="card-text"><small class="text-muted">{props.btn}</small></p>
      </div>
    </div>
  </div>
</div>        

    </>
  )
}

export default Blog