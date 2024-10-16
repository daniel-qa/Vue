const { createApp } = Vue;

const HelloWorld = {
  data() {
    return {
      message: 'Hello, Button!',
	  input: '',
	  tmp:''
    };	
  },
  created() {
    console.log('Component created');
  },
  mounted() {
    console.log('Component mounted');
  },
  updated() {
    console.log('Component updated');
  },
  destroyed() {
    console.log('Component destroyed');
  },
  template: `
    <div>
      <p>{{ message }}</p>
	  <el-input v-model="input" style="width: 240px" placeholder="Please input" />
	  <el-button type="primary" round @click="handleClick" >Primary</el-button>
	  <p> {{ tmp }} </p>
    </div>
  `,
   methods: {
    handleClick() {
      //alert('按钮被点击了！');	  
	  this.tmp = this.input;
    }
  }
};

const app = createApp(HelloWorld);
// 使用 Element Plus
app.use(ElementPlus);
// 綁到前端
app.mount('#app');