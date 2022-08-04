import React from "react";
import { withRouter } from "react-router";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
export const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};
class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 10000);
  }

  //HOC : higher Order Component
  render() {
    console.log(">>>Use redirect page", this.props);
    return (
      <div style={{ alignContent: "center" }}>
        Hello world from Homepage with Nhut Tran
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
