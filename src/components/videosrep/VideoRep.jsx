

const VideoRep = ({src, className=""}) => {
  return (
    <video controls muted  className={className}>
        <source src={src} />
    </video>
  )
}

export default VideoRep