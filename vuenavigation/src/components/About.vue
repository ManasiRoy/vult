<template lang="pug">
.container.mx-auto.app
  h1 Welcome to About Page !!
    .app
      reactive-bar-chart(:chart-data="chartData")
</template>
<script>
import ReactiveBarChart from "../ReactiveBarChart.js";
export default {
  name: "about",
  components: {
    ReactiveBarChart,
  },
  data() {
    return {
      chartData: null,
    };
  },
  methods: {
    generateData() {
      let newArray = [];
      for (let i = 0; i < 10; i++) {
        let randomValue = Math.floor(Math.random() * 10);
        newArray.push(randomValue);
      }

      this.chartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: newArray,
          },
        ],
      };
    },
  },
  mounted() {
    setInterval(this.generateData, 2000);
  },
};
</script>