import React from "react"
import styled from "styled-components"
import scdance from "../src/imgs/logo3.jpg"
import music from "../src/imgs/musiccopy.png"
import facebookIcon from "../src/imgs/fb1copy.png"
import insta from "../src/imgs/instacopy.png"
import venmo from "../src/imgs/venmo_icon copy.png"
import lesson from "../src/imgs/lessoncopy.png"
import tiktok from "../src/imgs/tiktokcopy.png"
import youtube from "../src/imgs/youtube.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #a0dcff;
  font-family: sans-serif;
`
const AvatarContainer = styled.div`
  margin-top: 39px;
  margin-bottom: 7px;
`

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  margin: 10px;
  padding: 10px 10px;
  background-color: #fdffff;
  // color: #a0dcff;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 60%;
  @media (max-width: 767px) {
    width: 90%;
  }

  &:hover {
    background-color: lightblue;
    color: white;
  }
`

const BlankDiv = styled.div`
  // border: 2px red solid;
  width: 40px;
  height: 40px;
`

const ButtonImage = styled.img`
  // border: 2px red solid;
  width: 40px;
  height: 40px;
`
const ButtonText = styled.div`
  // /* border: 2px green solid; */
  padding: 10px;
`

const Footer = styled.footer`
  color: white;
  padding: 15px 0 20px 0;
  font-size: 12px;
`
const YoutubeFrame = styled.div`
width: 560px;
height: 315px;
// border: 2px solid #333;  
margin-top: 20px;
margin-bottom: 90px;
  @media (max-width: 767px) {
    width: 80%;
    height: 250px;
     
    }
  }
`

function App() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src={scdance} alt="Avatar" />
      </AvatarContainer>
      <p style={{ color: "white" }}>@salsacolombia</p>
      <YoutubeFrame>
        {/* <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsalsacolombia.net%2Fvideos%2F2428469150668918%2F&show_text=false&width=560&t=0"
          width="560"
          height="314"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe> */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsalsacolombia.net%2Fvideos%2F2428469150668918%2F&show_text=false&width=560&t=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
        <p style={{ color: "white", fontSize: "12" }}>New Choreo! </p>
      </YoutubeFrame>
      {/* <Millionaire /> */}
      <ButtonsContainer>
        {/* <Button target="_blank" href="https://m4f0dm-5173.preview.csb.app/">
          <ButtonImage src={foodPic} alt="food_icon" />
          <ButtonText> Let us pick your lunch</ButtonText>
          <BlankDiv />
        </Button> */}
        <Button href="https://www.eventbrite.com/e/salsa-calena-with-brando-party-shows-tickets-934903199637?aff=oddtdtcreator">
          <ButtonImage src={lesson} alt="lesson_icon" />
          <ButtonText>
            {" "}
            SALSA CALEÑA WORKSHOP AND PARTY TICKETS WITH BRANDO AND VIVI 🎫{" "}
          </ButtonText>
          <BlankDiv />
        </Button>

        <Button target="_blank" href="https://venmo.com/u/Nelly-Maldonado">
          <ButtonImage src={venmo} alt="venmo_icon" />
          <ButtonText>VENMO</ButtonText>
          <BlankDiv />
        </Button>
        <Button
          target="_blank"
          href="https://www.facebook.com/salsacolombia.net"
        >
          <ButtonImage src={facebookIcon} alt="facebook_icon" />
          <ButtonText>Facebook</ButtonText>
          <BlankDiv />
        </Button>

        <Button
          target="_blank"
          href="https://www.tiktok.com/@salsacolombiatiktok"
        >
          <ButtonImage src={tiktok} alt="tiktok_icon" />
          <ButtonText>TikTok</ButtonText>
          <BlankDiv />
        </Button>

        <Button target="_blank" href="https://instagram.com/salsacolombia">
          <ButtonImage src={insta} alt="insta_icon" />
          <ButtonText>Instagram </ButtonText>
          <BlankDiv />
        </Button>
        <Button target="_blank" href="https://youtube.com/@SalsaColombiaUS">
          <ButtonImage src={youtube} alt="insta_icon" />
          <ButtonText>YouTube </ButtonText>
          <BlankDiv />
        </Button>

        <Button
          target="_blank"
          href="https://youtube.com/playlist?list=PLgme2F6mX8Xx2vkKU2ABQcXXKrRxpxer7"
        >
          <ButtonImage src={music} alt="music_icon" />
          <ButtonText>
            {" "}
            Need free Salsa music? Click on this playlist
          </ButtonText>
          <BlankDiv />
        </Button>
      </ButtonsContainer>
      <Footer>
        © SalsaColombia Dance Academy USA, All Rights Reserved 2024{" "}
      </Footer>
    </Container>
  )
}

export default App
