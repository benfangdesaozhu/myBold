<template>
    <div class="write-page">
        <mavon-editor
          v-model="article_content"
          :toolbars="toolbars"
          @imgAdd="onImgAdd"
          class="blogcontent"
          ref="md"
        />
      <div class="choose">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-input
              size="medium"
              placeholder="请输入文章标题"
              v-model="article_title"
            >
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-select v-model="category_id" placeholder="请选择类型">
              <el-option
                v-for="item in category_list"
                :key="item.category_id"
                :label="item.category_name"
                :value="item.category_id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" @click="submit">提交</el-button>
          </el-col>
        </el-row>
        
      </div>
        
    </div>
</template>

<script>
import {
  getCategoryListAction, // 文章类目列表
  getPostsCreateAction, // 新增文章
} from './../../API/index'

import axios from 'axios'
export default {
  name: 'write',
  data () {
      return {
        article_title: '', // 文章标题
        article_content: '', // 文章内容
        category_list: [{}], // 类目
        category_id: '', // 文章类目id
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          mark: true, // 标记
          superscript: true, // 上角标
          quote: true, // 引用
          ol: true, // 有序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          help: true, // 帮助
          code: true, // code
          subfield: true, // 是否需要分栏
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          undo: true, // 上一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          htmlcode: true,
          navigation: true // 导航目录
        },
      }
  },
  created(){
      getCategoryListAction().then(res=> {
          console.log(Object.prototype.toString(res.data.data))
          this.category_list = res.data.data
      })
  },
  methods: {
      onImgAdd(pos, $file){
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        formdata.append("imgFile", $file);
        axios({
          url: "api/common/uploadImg",
          method: "post",
          data: formdata,
          headers: { "Content-Type": "multipart/form-data" }
        }).then(response => {
          console.log(response, pos);
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          /**
           * $vm 指为mavonEditor实例，可以通过如下两种方式获取
           * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
           * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
           */
          this.$refs.md.$img2Url(pos, response.data.url);
        });
      },
      submit(){
        if(!this.article_title){
          this.$message('请输入文章标题')
        }
        if(!this.article_content){
          this.$message('请输入文章内容')
        }
        if(!this.category_id){
          this.$message('请输入文章id')
        }
        getPostsCreateAction({
          article_title: this.article_title,
          article_content: this.article_content,
          category_id: this.category_id
        }).then(res => {
          console.log(res)
        })
      }
  },
  watch: {
    value(value) {
      console.log(value)
    }
  }
}
</script>
<style scoped>
  .blog-page {
    background-color: #fff;
  }
  .choose {
    margin-top: 20px;
  }
</style>