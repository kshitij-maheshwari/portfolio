export const multiAxisData = {
  labels: ["Next JS", "React JS", "Deeplinking", "JavaScript", "Redux", "HTML", "SASS", "TV Apps", "Spring", "JS Modules"],
  datasets: [
    {
      label: "Knowledge",
      backgroundColor: ["#EC407A", "#14A25A", "#42A5F5", "#7E57C2", "#66BB6A", "#ef11b5", "#FFCA28", "#26A69A", "#AB47BC", "#fb9803"],
      data: [85, 80, 90, 85, 85, 75, 70, 75, 60, 90],
    },
  ],
};

export const multiAxisOptionsDesktop = {
  responsive: true,
  defaultColor: "rgb(0,0,0,1)",
  defaultFontColor: "#000000",
  tooltips: {
    mode: "index",
    intersect: true,
  },
  legend: {
    onClick: null,
    display: null,
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
        ticks: {
          min: 0,
          max: 100,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
  },
};

export const multiAxisOptionsMobile = {
  responsive: true,
  tooltips: {
    mode: "index",
    intersect: true,
  },
  legend: {
    onClick: null,
    display: null,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        type: "linear",
        display: true,
        position: "left",
        id: "x-axis-1",
        ticks: {
          min: 0,
          max: 100,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
  },
};
