import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
const VideoCall = ()=>{
  const [poster,setPoster] = useState(false)
return (<>
<div className="container">
<video  preload="auto" style={{width:"70%",position:"absolute"}} poster = {poster ? `${process.env.PUBLIC_URL}/loader.gif`:""}>
  <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4"/>
</video>

<video  preload="auto" style={{position:"relative",height:"60px",border:"1px solid white"}} poster = {poster ? `${process.env.PUBLIC_URL}/loader.gif`:""}>
  <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4"/>
</video>
</div>

<button onClick={()=>setPoster(!poster)}>toggle loader</button>
</>)
}



export default VideoCall;