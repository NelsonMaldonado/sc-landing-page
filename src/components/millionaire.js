import React from "react"
import styled from "styled-components"

//Millionaire component starts here
const Millionaire = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Millionaire Club Reels</h1>
      <ReelsContainer>
        {/* Reels go here */}
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F703371171205348%2F&show_text=false&width=267&t=0"
          width="267"
          height="476"
          //   style="border:none;overflow:hidden"
          //   scrolling="no"
          //   frameBorder="0"
          //   allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F703371171205348%2F&show_text=false&width=267&t=0"
          width="267"
          height="476"
          //   style="border:none;overflow:hidden"
          //   scrolling="no"
          //   frameBorder="0"
          //   allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F703371171205348%2F&show_text=false&width=267&t=0"
          width="267"
          height="476"
          //   style="border:none;overflow:hidden"
          //   scrolling="no"
          //   frameBorder="0"
          //   allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F703371171205348%2F&show_text=false&width=267&t=0"
          width="267"
          height="476"
          //   style="border:none;overflow:hidden"
          //   scrolling="no"
          //   frameBorder="0"
          //   allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F703371171205348%2F&show_text=false&width=267&t=0"
          width="267"
          height="476"
          //   style="border:none;overflow:hidden"
          //   scrolling="no"
          //   frameBorder="0"
          //   allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </ReelsContainer>
    </div>
  )
}

export default Millionaire
const ReelsContainer = styled.a`
  display: flex;
  space
//   flex-direction: column;
  align-items: center;
  background-color: #green;
  font-family: sans-serif;
  width: 80hv;
  height: auto;
  border: 2px solid #333;
`
