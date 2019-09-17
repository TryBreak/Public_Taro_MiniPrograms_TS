import Taro, {Component, Config} from "@tarojs/taro";
import {View, Button, Image, Text} from "@tarojs/components";
import {getUrlParam} from "@/utils/utils";
import {WebView_domain, baseUrl, image_domain} from "@/config/baseUrl";
import {tusiji} from "@/images/load";
import "./index.scss";

class _page extends Component {

  constructor(props) {

    super(props);
    // const token = getStore('userToken');
    this.state = {
      // token,
    };

  }

  componentWillMount() {

    console.log(123);

  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidHide() {}

  componentDidShow() {

    const {id} = getUrlParam();
    console.info("id--", id);

  }

  componentWillReact() {}

  config: Config = {
    navigationBarTitleText: "PageDemo",
    // navigationStyle: 'custom',
    navigationBarBackgroundColor: "#62A8FA",
  };


  render() {

    return (
      <View className='page'>
        这里是demo页面
        <Button>这里是demo页面 Button</Button>
        <Text className='text'>这里是demo页面 Text</Text>
        <Image mode='widthFix' src={tusiji} />
        <View className='base_router'>
          <View className='text'>
            <Text className='name'>image_domain :</Text>
            {image_domain}
          </View>
          <View className='text'>
            <Text className='name'>WebView_domain :</Text> {WebView_domain}
          </View>
          <View className='text'>
            <Text className='name'>baseUrl : </Text>
            {baseUrl}
          </View>
        </View>
      </View>
    );

  }

}

export default _page;
