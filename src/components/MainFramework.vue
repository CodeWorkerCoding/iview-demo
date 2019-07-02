<template>
  <div class="layout">
    <Layout>
      <Header :style="{ width:'100%' }">
        <Menu mode="horizontal" theme="dark">
        </Menu>
      </Header>
      <Content class="layout-content">
        <HomeBanner></HomeBanner>
        <InfoTable></InfoTable>
      </Content>
      <Footer class="ivu-layout-footer layout-footer-center">2018-2030 &copy; NAHU University</Footer>
    </Layout>
  </div>
</template>

<script>
  import HomeBanner from './HomeBannar'
  import InfoTable from './InfoTable'

  let initFunction = function () {
    console.log('call init function.....')
  }
  export default {
    name: "MainFramework",
    data() {
      return {}
    },
    methods: {
      initFunction
    },
    mounted: function () {
      console.log('ssxxxxxxxxxxxxxx');
      this.initFunction();
    },
    components: {
      HomeBanner,
      InfoTable
    }
  }
</script>

<style scoped>

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-footer-center {
    margin-bottom: 0px;
    text-align: center;
  }

  .layout-content {
    margin: auto 65px auto 65px;
    background: #fff;
    min-height: 730px;

  }

</style>
