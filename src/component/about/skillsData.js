export const multiAxisData = {
  labels: [
    "React JS",
    "Express JS",
    "Node JS",
    "Redux",
    "HTML",
    "CSS",
    "Mongo DB",
    "Spring",
  ],
  datasets: [
    {
      label: "Technologies Known",
      backgroundColor: [
        "#EC407A",
        "#14A25A",
        "#42A5F5",
        "#7E57C2",
        "#66BB6A",
        "#ef11b5",
        "#FFCA28",
        "#26A69A",
        // "#AB47BC",
        // "#fb9803",
      ],
      data: [85, 70, 80, 75, 80, 75, 65, 75],
    },
  ],
};

export const multiAxisOptionsDesktop = {
  responsive: true,
  tooltips: {
    mode: "index",
    intersect: true,
  },
  legend: {
    onClick: null,
  },
  scales: {
    yAxes: [
      {
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
  },
  scales: {
    xAxes: [
      {
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
  },
};
