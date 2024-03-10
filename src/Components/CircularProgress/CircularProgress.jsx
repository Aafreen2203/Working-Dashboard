import "./CircularProgress.css";

const CircularProgress = ({ value, offset, color }) => {
  return (
    <div className="circular-progress">
      <div className="details">
        <h1>{value}</h1>
        <p>%</p>
      </div>

      <svg>
        <circle cx="155" cy="155" r="150" className="svg-circle-gray" />

        <circle
          cx="155"
          cy="155"
          r="150"
          className="svg-circle"
          style={{ "--clr": color, "--p": offset }}
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
