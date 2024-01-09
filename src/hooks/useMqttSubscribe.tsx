import { useEffect, useState } from "react";
import mqtt from "mqtt";

const useMqttSubscribe = (brokerUrl: string, topic: string, onMessage: any) => {
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    // Khi component được mount, tạo kết nối MQTT
    const mqttClient = mqtt.connect(brokerUrl);

    // Lưu trữ client trong state
    setClient(mqttClient);

    // Xử lý sự kiện khi kết nối thành công
    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
      // Subscribe vào topic khi kết nối thành công
      mqttClient.subscribe(topic);
    });

    // Xử lý sự kiện khi nhận được tin nhắn trên topic
    mqttClient.on("message", (receivedTopic, message) => {
      // Gọi callback onMessage khi có tin nhắn mới
      onMessage({ topic: receivedTopic, message: message.toString() });
    });

    // Cleanup: Ngắt kết nối khi component unmount
    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, [brokerUrl, topic, onMessage]);

  return client;
};

export default useMqttSubscribe;
