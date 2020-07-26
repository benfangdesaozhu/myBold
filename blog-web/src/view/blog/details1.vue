<template>
    <div class="blog-page">
        <div class="content-item">
          <h1 class="title">{{item.article_title}}</h1>
          <ul class="uk-subnav">
            <li>类目：{{item.category_id}}</li>
            <li>时间：{{item.time}}</li>
            <li>观看数：{{item.watch_count}}</li>
            <li>点赞数：{{item.good_count}}</li>
          </ul>
          <hr class="qzhai-content-divider uk-divider-small">
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
        <div @click="onGiveGood">点赞</div>
        <div>
          <div v-for="(item, index) in comments" :key="index">
            <div>
              <p>{{item}}</p>
            </div>
          </div>
          
          <div class="flex">
            <div>留言:</div>
            <el-input
              class="flex-1"
              type="textarea"
              autosize
              placeholder="请输入留言信息"
              v-model="textarea1">
            </el-input>
            <el-button class="btn" type="primary" @click="submit">提交</el-button>
          </div>
        </div>
    </div>
</template>

<script>
import {
  getPostsDetailsAction, // 文章列表（某一篇或者是全部）
  getCommentsAction, // 创建一条留言
  getCommentsGetCommentsAction, // 获取留言信息
  getPostsGiveGoodAction, // 点赞文章
} from './../../API/index'
export default {
  name: 'details1',
  data () {
      return {
        article_id: '',
        item: {},
        textarea1: '',
        comments: [], // 留言数组
      }
  },
  beforeRouteEnter(from, to, next){
    getPostsDetailsAction({
        article_id: from.query.article_id
    }).then(res => {
        console.log(res.data.data)
        next(vm => {
            vm.article_id = from.query.article_id
            vm.item = res.data.data[0]
            vm.commentsGetCommentsAction()
        })
        // this.contentList = res.data.data
    })
  },
  methods: {
      submit(){
        getCommentsAction({
          article_id: this.article_id,
          message: this.textarea1
        }).then(() => {
          this.comments.push(this.textarea1)
        })
      },
      commentsGetCommentsAction () {
        getCommentsGetCommentsAction({
          article_id: this.article_id
        }).then(res=> {
          this.comments = res.data.data
          console.log(res.data.data)
        })
      },
      onGiveGood () {
        getPostsGiveGoodAction({
          article_id: this.article_id
        }).then(res=>{
          console.log(res)
        })
      }
  },
}
</script>
<style scoped>
  .blog-page {
    padding: 30px 0;
    background-color: #fff;
  }
  .content-item {
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
  
  .blog-page .v-note-show,
  .blog-page  .v-show-content {
    overflow: hidden !important;
  }
  .flex {
    display: flex;
    margin-top: 30px;
    line-height: 40px;
    align-items: center;
  }
  .flex-1 {
    flex: 1;
    margin-left: 10px;
  }
  .btn {
    margin-left: 15px;
    height: 33px;
  }
  .uk-subnav {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: -15px;
    padding-left: 25px;
    list-style: none;
}
.uk-subnav>* {
    flex: none;
    padding-left: 15px;
    position: relative;
    color: #999;
    font-size: 14px;
}
.qzhai-content-divider {
    margin-top: 30px;
    padding-left: 25px;
    border: none;
    line-height: 0;
    text-align: left;
}
.uk-divider-small::after {
    content: "";
    display: inline-block;
    width: 100px;
    max-width: 100%;
    border-top: 1px solid #e5e5e5;
    vertical-align: top;
}
</style>