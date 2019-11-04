import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtFloatLayout } from "taro-ui";

import "./index.scss";

type StateType = {
  [propName: string]: any;
};

interface _page {
  state: StateType;
}

class _page extends Component {
  constructor(props) {
    super(props);
    // const token = getStore('userToken');
  }

  state: StateType = {
    // token,
    isOpened: false,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidHide() {}

  componentDidShow() {}

  componentWillReact() {}

  config: Config = {
    navigationBarBackgroundColor: "#F0E8DF",
  };

  handleClose = () => {
    console.log("close");
  };

  showMoudle = (e) => {
    console.log(e);
    this.setState({
      isOpened: true,
    });
  };

  render() {
    return (
      <View className="page">
        <View onClick={this.showMoudle}>展示浮动弹层</View>
        <AtFloatLayout
          className="FloatLayout"
          isOpened={this.state.isOpened}
          onClose={this.handleClose.bind(this)}
        >
          这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        </AtFloatLayout>
      </View>
    );
  }
}

export default _page;
