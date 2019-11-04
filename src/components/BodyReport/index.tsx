/* eslint-disable react/no-unused-state */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./index.scss";

type StateType = {
  [propName: string]: any;
};

type ComponentsProps = {
  isSet: boolean;
};

interface BodyReport {
  props: ComponentsProps;
  state: StateType;
}

class BodyReport extends Component {
  static defaultProps: ComponentsProps = {
    isSet: false,
  };

  constructor(props) {
    super(props);
  }

  static state: StateType = {
    // token,
    list: [],
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidHide() {}

  componentDidShow() {}

  componentWillReact() {}

  render() {
    return (
      <View className="wrapper">
        <View className="listBox">
          <View className="item">块1</View>
          <View className="item">块2</View>
          <View className="item">块3</View>
          <View className="item">块4</View>
          <View className="item">块5</View>
          <View className="item">块6</View>
          <View className="item">块7</View>
          <View className="item">块8</View>
          <View className="item">块9</View>
          <View className="item">块0</View>
          <View className="item">块1</View>
        </View>
      </View>
    );
  }
}

export default BodyReport;
