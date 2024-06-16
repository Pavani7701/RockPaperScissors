import {OptionImage, OptionListItem, GameOptionButton} from './styledComponents'

const GameOptions = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = optionDetails
  console.log(imageUrl)
  const userChoice = () => {
    onClickSetUserChoice(id)
  }
  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
