// charts/chart-01.js

export function renderChart01(containerId) {
   
    const container = d3.select(containerId);
    
    // Clear container
    container.selectAll("*").remove();
  
    // Define margin convention
    const margin = { top: 40, right: 30, bottom: 50, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
  
    // Append responsive SVG with margin transform
    const svg = container
      .append("svg")
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .classed("chart-svg", true); // could add style to class
  
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
    // Placeholder (w/ text to show it worked)
    g.append("text")
      .attr("x", width / 2)
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .style("font-family", "Barlow, sans-serif")
      .style("fill", "#111")
      .text("Chart area ready");

  } // END OF export function renderChart01