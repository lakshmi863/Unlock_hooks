import {useState} from 'react'

import {Maincontainer, LockImage, Lockp, LockButton} from './styledComponents'

const Unlock = () => {
  const [usersClick, userIN] = useState(true)

  const imagelock = usersClick
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const text = usersClick ? 'lock' : 'unlock'
  const displayText = usersClick ? 'Locked' : 'Unlocked'
  const buttonText = usersClick ? 'Unlock' : 'Lock'

  const onunlock = () => {
    userIN(prevState => !prevState)
  }

  return (
    <Maincontainer>
      <LockImage src={imagelock} alt={text} />
      <Lockp> Your Device is {displayText}</Lockp>
      <LockButton onClick={onunlock}>{buttonText}</LockButton>
    </Maincontainer>
  )
}
export default Unlock
