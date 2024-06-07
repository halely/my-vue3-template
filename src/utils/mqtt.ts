import  mqtt from "mqtt";
// import { ElMessage } from 'element-plus'

interface MqttOption {
  url:string,
  topic:string,
  clientId:string,
  username:string,
  password:string,
  qos:0|1|2
}
class Mqtt {
  url:string
  topic:string
  clientId:string
  username:string
  password:string
  mqttClient: any
  qos:0|1|2
  client: any
  constructor(option:MqttOption) {
    this.url=option.url;
    this.topic=option.topic;
    this.clientId=option.clientId;
    this.username=option.username;
    this.password=option.password;
    this.qos=option.qos;
  }
  init() {
    let options = {
      clientId: this.clientId,
      username: this.username,
      password: this.password
    }
    this.client = mqtt.connect(this.url, options);
    this.client.on("message", (topic: any, message: any) => {
      console.log("收到消息", topic, message);
      console.log("收到消息" + topic + '发来的' + JSON.parse(message));
  })
  // 重连处理
  this.client.on('reconnect', (error: any) => {
      console.log('正在重连:', error)
  });
  // 链接失败
  this.client.on('error', (error: any) => {
      console.log(error);
  });
  }
}
