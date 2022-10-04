import React from 'react';
import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion"
import styled from 'styled-components';

// const Wrapper = styled(motion.div)`
//   height: 200px;
//   width: 200px;
//   border: 10px solid blue;
//   border-radius: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// function Box() {
//   return (
//     <Wrapper>
//       hello
//     </Wrapper>
//   )
// }

function Box2() {
  return (
    <div style={{ height: "200px", width: "200px"}} >

    <motion.svg width="100%" height="100%" viewBox="0 0 200 200" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
    {/* <svg width="100%" height="100%" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"> */}
      <motion.path
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          // repeat: Infinity,
          // repeatType: 'reverse',
        }}
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="rgba(0,0,0,0)"
        d="M196,29.939C196,20.584 188.416,13 179.061,13L32.939,13C23.584,13 16,20.584 16,29.939L16,176.061C16,185.416 23.584,193 32.939,193L179.061,193C188.416,193 196,185.416 196,176.061L196,29.939ZM191.95,29.939L191.95,176.061C191.95,183.179 186.179,188.95 179.061,188.95C144.724,188.95 67.276,188.95 32.939,188.95C25.821,188.95 20.05,183.179 20.05,176.061C20.05,176.061 20.05,29.939 20.05,29.939C20.05,22.821 25.821,17.05 32.939,17.05C32.939,17.05 179.061,17.05 179.061,17.05C186.179,17.05 191.95,22.821 191.95,29.939Z"/>
    </motion.svg>
    </div>
  )
}

function Box3({ height, width, stroke, x, y, children }: any) {
  // const height = 200
  // const width = 200
  // const stroke = 3

  const vb1 = -stroke
  const vb2 = -stroke
  const vb3 = height + stroke * 2
  const vb4 = width + stroke * 2
  const viewBox = `${vb1} ${vb2} ${vb3} ${vb4}`

  const style: React.CSSProperties = {
    position: 'absolute',
    top: y ? y : 0,
    left: x ? x : 0,
    height: height + stroke * 2,
    width: width + stroke * 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={style}>
      <motion.svg viewBox={viewBox} style={{ position: 'absolute', top: 0, left: 0}}>
        <motion.rect width={width - stroke} height={height - stroke} rx="15" fill="transparent" stroke="red"
          strokeWidth={stroke}
          initial={{
            pathLength: 0
          }}
          animate={{
            pathLength: 1.01
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
          />
      </motion.svg>
      { children }
    </div>
  )
}

const CanvasWrapper = styled.div`
  width: 1920px;
  height: 1080px;
  background-color: white;
  position: relative;
`

function Canvas(props: any) {
  const { children } = props

  return(
    <CanvasWrapper>
      { children }
    </CanvasWrapper>
  )
}

const Wrapper = styled.div`
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <Wrapper>
      <Canvas>
        <Box3 height={200} width={200} stroke={3} x={200} y={200} />
        <Box3 height={200} width={200} stroke={3} x={800} y={200} />
        <svg width="1920" height="1080">
          <line x1="400" y1="300" x2="800" y2="300" stroke="black" strokeDasharray="4"/>
          {/* <line x1="350" y1="350" x2="600" y2="200" stroke="black"/> */}
        </svg>
      </Canvas>
    </Wrapper>
  );
}

export default App;
