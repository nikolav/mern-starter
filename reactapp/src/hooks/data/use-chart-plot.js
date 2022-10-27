import { useEffect, useState, useMemo } from "react";
import {
  extent,
  axisBottom,
  axisLeft,
  max,
  scaleLinear,
  scaleTime,
  select,
  transition,
} from "d3";
import { merge } from "../../util";
////
/////
const OPTIONS = {
  width: 550,
  height: 400,
  color: "currentcolor",
  paddingX: 32,
  paddingY: 48,
  //
  // accesor.value
  date: (d) => new Date(d.date),
  value: (d) => d.value,
  //
  // minor tweeks
  _xAxisTextRotationDegrees: -24,
  _xAxisTextOpacity: 0.85,
  _dotRadius: 4,
  _ticksX: 10,
  _ticksY: 3,
  //
  _transitionDuration: 345,
};

const useChartPlot = ({ isActive, data, root, options }) => {
  const [c$, setc] = useState({
    svg: null,
    graph: null,
    xAxis: null,
    yAxis: null,
  });
  const {
    width,
    height,
    color,
    paddingX,
    paddingY,
    //
    date,
    value,
    //
    _xAxisTextRotationDegrees,
    _xAxisTextOpacity,
    _dotRadius,
    _ticksX,
    _ticksY,
    _transitionDuration,
  } = useMemo(() => merge({}, OPTIONS, options), [options]);
  const innerWidth = width - 2 * paddingX;
  const innerHeight = height - 2 * paddingY;
  //
  // .. skip domain, set @init
  const x = scaleTime().range([0, innerWidth]);
  const y = scaleLinear().range([innerHeight, 0]);
  //
  //
  // @init
  useEffect(() => {
    let svg = null;
    let graph = null;
    let xAxis = null;
    let yAxis = null;
    //
    if (root) {
      if (isActive) {
        // domains @init
        // x.domain(extent(data, date));
        // y.domain([0, max(data, value)]);
        //
        svg = select(root)
          .append("svg")
          .attr("class", "PlotChart--svg")
          .attr("width", width)
          .attr("height", height);
        // .style("border", "1px dotted grey")

        graph = svg
          .append("g")
          .attr("class", "PlotChart--graph")
          .attr("transform", `translate(${paddingX}, ${paddingY})`);
        xAxis = svg
          .append("g")
          .attr("class", "PlotChart--xAxis")
          // x-axis @bottm
          .attr("transform", `translate(${paddingX}, ${height - paddingY})`);
        yAxis = svg
          .append("g")
          .attr("class", "PlotChart--yAxis")
          // y-axis @left
          .attr("transform", `translate(${paddingX}, ${paddingY})`);
        //
      } else {
        c$.svg && c$.svg.remove();
      }
    }
    //
    setc((c) => ({ ...c, svg, graph, xAxis, yAxis }));
  }, [root, isActive]);
  //
  // @update; domains, axis
  useEffect(() => {
    if (data && isActive && c$.graph) {
      const { graph: g, xAxis, yAxis } = c$;
      const dots = g.selectAll("circle").data(data);
      const t = transition("@t1--PlotChart").duration(_transitionDuration);
      //
      // update scale domains
      x.domain(extent(data, date));
      y.domain([0, max(data, value)]);
      //
      // run axis
      xAxis.transition(t).call(axisBottom(x).ticks(_ticksX));
      yAxis.transition(t).call(axisLeft(y).ticks(_ticksY));
      // [current]
      //  update position only
      dots
        .transition(t)
        .attr("cx", (d) => x(new Date(d.date)))
        .attr("cy", (d) => y(d.value));
      //
      // [exit]
      dots
        .exit()
        .attr("fill", "#ff0000")
        .transition(t)
        .attr("fill-opacity", 0)
        .attr("cy", y(0))
        .remove();
      //
      // [enter]; update shapes
      dots
        .enter()
        .append("circle")
        .attr("r", _dotRadius)
        .attr("cx", (d) => x(new Date(d.date)))
        .attr("fill", color)
        .attr("class", "PlotChart--dots")
        // .initial
        .attr("cy", y(0))
        .attr("fill-opacity", 0)
        .transition(t)
        // .animate
        .attr("cy", (d) => y(d.value))
        .attr("fill-opacity", 1);
      //
      // tweak x-axis text
      xAxis
        .selectAll("text")
        .attr("text-anchor", "end")
        .attr("transform", `rotate(${_xAxisTextRotationDegrees})`)
        .attr("fill-opacity", _xAxisTextOpacity);
    }
  }, [data, isActive, c$.graph]);
  //
};

export default useChartPlot;
