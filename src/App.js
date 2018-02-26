import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
const LeftContainer = styled.div`
  width: ${props => props.width}px;
  background-color: #b0bec5;
`
const MainContainer = styled.main`
  flex: 1;
  background-color: #e0e0e0;
`
const RightContainer = styled.div`
  width: 256px;
  background-color: #ffffff;
  display: ${props => (props.open ? 'block' : 'none')};
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      openRightContainer: false,
      expandLeftContainer: false,
      leftContainerWidth: 64
    }
  }

  handleToggleLeftContainer = () => {
    this.setState({
      openLeftContainer: !this.state.openLeftContainer,
      leftContainerWidth: this.state.openLeftContainer ? 64 : 256
    })
  }

  handleToggleRightContainer = () => {
    this.setState({ openRightContainer: !this.state.openRightContainer })
  }

  render() {
    return (
      <Wrapper>
        <LeftContainer width={this.state.leftContainerWidth}>left container</LeftContainer>
        <MainContainer>
          <button onClick={this.handleToggleLeftContainer}>expand left container</button>
          <button onClick={this.handleToggleRightContainer}>open right container</button>
        </MainContainer>
        <RightContainer open={this.state.openRightContainer}>right container</RightContainer>
      </Wrapper>
    )
  }
}

export default App
