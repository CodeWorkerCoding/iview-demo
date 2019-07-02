<template>
  <div class="info-table">
    <div class="search-panel">
      <Row>
        <Col span="16" offset="4">
          <Input size="large" search enter-button="Search" placeholder="input to search something..."/>
        </Col>
      </Row>
    </div>
    <Card class="content-card" :bordered="true" v-for="(info, index) in infoList" :key="index">
      <!--<Card :bordered="true">-->
      <p slot="title">
        <Icon type="ios-film-outline"/>
        {{info.title}}
      </p>
      <ul>
        <li>
          <p>房东姓名</p>
          <span>{{info.name}}</span>
        </li>
        <li>
          <p>房东证件号</p>
          <span>{{info.identityNumber}}</span>
        </li>
        <li>
          <p>租金</p>
        </li>
        <li>
          <p>户型</p>
        </li>
        <li>
          <p>地段</p>
        </li>
      </ul>
    </Card>
    <div class="content-page">
      <Page :total="100" :show-total="true" :show-elevator="true"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoTable",
    data() {
      const infoDemo = {
        title: '垃圾垃圾',
        name: 'allen',
        identityNumber: '',
        sex: 'Man',
        age: '69',
        address: '',
        price: 35,
        special: '',
      }
      return {
        infoList: Array(100).fill(infoDemo)
      }
    }
  }
</script>

<style scoped>

  .search-panel {
    padding: 15px;
  }

  .content-card {
    float: left;
    left: 10%;
    margin: 10px 10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box; /* Firefox */
    width: 25%;
  }

  .content-page {
    clear: left;
    background: rgba(12, 159, 224, 0.07);
    padding: 12px;
  }

</style>
