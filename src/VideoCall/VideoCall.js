import React from 'react'
import { Col } from 'react-bootstrap'
const VideoCall = ()=>{
return (<>
<Col xs={"10"}>
<div className="container" style={{margin:"2em"}}>
<video  preload="auto" style={{width:"100%"}}>
  <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4"/>
</video>

<video  preload="auto" style={{position:"relative",marginTop:"-17em",height:"5em",border:"1px solid white"}}>
  <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4"/>
</video>
</div>
</Col>
</>)
}



export default VideoCall;