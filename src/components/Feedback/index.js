import {Component} from 'react'

import './index.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

const ImageContainer = props => {
  const {list, changeText, loveEmojiUrl} = props
  const {id, name, imageUrl} = list
  const changeCard = () => {
    changeText(loveEmojiUrl)
  }
  return (
    <li className="item">
      <img src={imageUrl} alt={name} className="image" onClick={changeCard} />
      <p className="para">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {list: resources, click: false}

  changeText = loveEmojiUrl => this.setState({click: true})

  render() {
    const {list, click} = this.state
    const {emojis, loveEmojiUrl} = list

    return click ? (
      <div className="cont">
        <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
        <h1 className="heading1">Thank You!</h1>
        <p className="para1">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    ) : (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="img-container">
            {emojis.map(element => (
              <ImageContainer
                list={element}
                key={element.id}
                changeText={this.changeText}
                loveEmojiUrl={loveEmojiUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Feedback
