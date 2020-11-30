import React from 'react'
import { Col } from 'react-bootstrap'
const VideoCall = ()=>{
return (<>
<div className="container" style={{margin:"2em"}}>
<video  preload="auto" style={{width:"70%",position:"absolute"}}>
  <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4"/>
</video>

<video  preload="auto" style={{position:"relative",height:"60px",border:"1px solid white"}}>
  <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4"/>
</video>
</div>
</>)
}



export default VideoCall;