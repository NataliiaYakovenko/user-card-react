import { Component } from "react";
import photo from "./image.png";
import styles from "./UserCard.module.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        imageUrl: photo,
        firstName: "Amanda",
        lastName: "Taylor",
        position: "Model",
        isFemale: true,
        socialStats: {
          views: 1388,
          like: 970,
          followers: 554,
        },
      }
    };
  }

  render() {
    const {
      imageUrl,
      firstName,
      lastName,
      position,
      isFemale,
      socialStats,
    } = this.state.user;
    
    const userColor = isFemale ? "white" : "rgb(27, 27, 27)";

    return (
      <article className={styles.cardUser}>
        <img src={imageUrl} alt="Model"></img>
        <div className={styles.cardUserName} style={{ color: userColor }}>
          {firstName} {lastName}
        </div>
        <div className={styles.cardUserPosition}>{position}</div>
        <button className={styles.cardUserButton}>+</button>
        <div className={styles.social}>
          <div>
            <span className={styles.socialInfo}>Views</span>
            <span className={styles.socialСalculation}>
              {socialStats.views}
            </span>
          </div>
          <div>
            <span className={styles.socialInfo}>Like</span>
            <span className={styles.socialСalculation}>{socialStats.like}</span>
          </div>
          <div>
            <span className={styles.socialInfo}>Followers</span>
            <span className={styles.socialСalculation}>
              {socialStats.followers}
            </span>
          </div>
        </div>
      </article>
    );
  }
}

export default UserCard;
