<template>
    <div class="blog-page">
        <div v-for="(item, index) in contentList" :key="index" class="content-item"
          @click="contentItem(item)"
        >
          <div class="title">{{item.article_title}}</div>
          <mavon-editor
            class="md"
            :fontSize="'14px'"
            :boxShadowStyle="'0 0 0 0 rgba(0, 0, 0, 0.1)'"
            :toolbarsBackground="'#ffff'"
            :previewBackground="'#ffff'"
            :value="item.article_content"
            :subfield = "false"
            :defaultOpen = "'preview'"
            :toolbarsFlag = "false"
            :editable="false"
            :scrollStyle="true"
            :ishljs = "true"
          ></mavon-editor>
        </div>
        <el-pagination
          background
          :page-size="pageSize"
          @current-change="currentChange"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
    </div>
</template>

<script>
import {
  getPostsAction, // 文章全部列表
} from './../../API/index'
export default {
  name: 'blog',
  data () {
      return {
        contentList: [],
        pageSize: 1,
        total: 0,
        page: 1,
        categroy_id: ''
      }
  },
  beforeRouteEnter(from, to,next){
    next(vm => {
      if(from.query.categroy_id) {
        vm.categroy_id = from.query.categroy_id
      }
      vm.getPosts()
    })
  },
  methods: {
      getPosts () {
        let data = {
          pageSize: this.pageSize,
          page: this.page
        }
        this.catefory_id ? data.catefory_id = this.catefory_id : ''
        getPostsAction(data).then(res => {
          this.contentList = res.data.data.list
          this.total = res.data.data.total
          console.log(res.data)
        })
      },
      contentItem (item) {
        this.$router.push({name: 'details1', query: {article_id: item.article_id}})
      },
      currentChange(page){
        this.page = page
        this.getPosts()
      }
  },
}
</script>
<style>
  
  .blog-page .v-note-show,
  .blog-page  .v-show-content {
    overflow: hidden !important;
  }
</style>
<style scoped>
  .blog-page {
    padding: 30px 0;
    background-color: #fff;
  }
  .content-item {
    overflow: hidden;
    height: 150px;
    border-bottom: 1px solid #eee;
  }
  .content-item:nth-last-of-type(1) {
    border-bottom: 0;
  }
  .title {
    margin-top: 20px;
    line-height: 26px;
    font-size: 26px;
    font-weight: bold;
    color: #333;
    letter-spacing: 2px;
    text-align: left;
    padding-left: 25px;
  }
  .md {
    height: 50px;
  }
  
  .blog-page .v-note-show,
  .blog-page  .v-show-content {
    overflow: hidden !important;
  }
</style>