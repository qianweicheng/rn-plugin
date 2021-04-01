import { NativeModules } from 'react-native';

type MyPluginType = {
  multiply(a: number, b: number): Promise<number>;
};

const { MyPlugin } = NativeModules;

export default MyPlugin as MyPluginType;
