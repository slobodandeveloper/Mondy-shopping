import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Svg, Line, Rect, Text as SvgText} from 'react-native-svg';

const BarChart = ({data, leftValues, bottomValues, barColors}) => {
  const barWidth = 45;
  const barSpacing = 15;
  const graphWidth = (barWidth + barSpacing + 5) * data.length;
  const maxBarValue = Math.max(...data.flat());

  const yScale = value => (value / maxBarValue) * 100;

  return (
    <View style={styles.container}>
      <Svg width={graphWidth} height={200}>
        {/* Draw x-axis */}
        <Line
          x1={50}
          y1={170}
          x2={graphWidth}
          y2={170}
          stroke="#000"
          strokeWidth={1}
        />
        {/* Draw y-axis */}
        <Line x1={50} y1={0} x2={50} y2={170} stroke="#000" strokeWidth={1} />

        {/* Draw vertical axis labels */}
        {bottomValues.map((value, index) => (
          <SvgText
            key={index}
            x={(barWidth + barSpacing) * index + barWidth / 2 + 50}
            y={190}
            fill="black"
            textAnchor="middle"
            fontSize={12}>
            {value}
          </SvgText>
        ))}

        {/* Draw values on the left where the graph ends */}
        {leftValues.map((value, index) => (
          <React.Fragment key={index}>
            <SvgText
              x={40}
              y={170 - yScale(value)}
              fill="black"
              textAnchor="end"
              fontSize={12}>
              {value}
            </SvgText>
          </React.Fragment>
        ))}

        {/* Draw lines for value range on the left */}
        {leftValues.map((value, index) => (
          <Line
            key={index}
            x1={50}
            y1={170 - yScale(value)}
            x2={45}
            y2={170 - yScale(value)}
            stroke="#000"
            strokeWidth={1}
          />
        ))}

        {data.map((group, index) => {
          const x = (barWidth + barSpacing) * index;

          return (
            <React.Fragment key={index}>
              {group.map((value, barIndex) => {
                const barHeight = yScale(value) + 1;
                const y = 170 - barHeight;
                const barX = x + (barWidth / group.length) * barIndex + 50;

                return (
                  <React.Fragment key={barIndex}>
                    <Rect
                      x={barX}
                      y={y}
                      width={barWidth / group.length}
                      height={barHeight}
                      fill={barColors[barIndex]}
                    />
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
  },
});

export default BarChart;
