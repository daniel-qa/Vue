<!-- CDN 請放在 HTML <head> 中 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>

<div id="app">
  <!-- 按鈕：點擊後開啟對話框 -->
  <el-button type="primary" @click="showDialog = true">
    查看教師資訊
  </el-button>

  <!-- 對話框 -->
  <el-dialog title="教師資料" :visible.sync="showDialog" width="30%">
    <p>姓名：{{ teacher.name }}</p>
    <p>ID：{{ teacher.id }}</p>
    <span slot="footer" class="dialog-footer">
      <el-button @click="showDialog = false">關閉</el-button>
    </span>
  </el-dialog>
</div>

<script>
new Vue({
  el: '#app',
  data() {
    return {
      showDialog: false,
      teacher: {
        name: '王小明',
        id: 'T-00123'
      }
    }
  }
})
</script>
