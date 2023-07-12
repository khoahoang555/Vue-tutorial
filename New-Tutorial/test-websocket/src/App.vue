<template>
  <h2>{{ data }}</h2>
</template>

<script>
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
export default {
  data() {
    return {
      data: '',
      connected: false
    }
  },
  methods: {
    // initWebSocket() {
    //   console.log("Starting connection to WebSocket Server");
    //   const connection = new WebSocket('ws://localhost:8080/gs-guide-websocket');
    //
    //   connection.addEventListener("app/message", event => {
    //     this.data = event.data;
    //     console.log(this.data);
    //   });
    //
    //   connection.onopen = () => {
    //     console.log("Successfully connected to the echo websocket server...");
    //   }
    // }
    connect() {
      this.socket = new SockJS('http://localhost:8081/gs-guide-websocket');
      console.log("Starting connection to WebSocket Server");

      // this.stompClient = Stomp.client('ws://localhost:8080/gs-guide-websocket');
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect({}, frame => {
        this.connected = true;
        console.log(frame);
        this.stompClient.subscribe('/topic/message', tick => {
          console.log(tick);
          this.data = tick;
        });
      }, error => {
        console.log(error);
        this.connected = false;
      });
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
      this.connected = false;
    }
  },
  mounted() {
    // this.initWebSocket();
    this.connect();
  }
}
</script>


<style scoped>
</style>
