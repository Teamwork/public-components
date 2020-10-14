<template>
  <div class="d-flex">
    <div class="col-6 text-left">
      <div>
        Redirect URI
        <input v-model="redirectUri" />
      </div>
      <div>
        Client ID
        <input v-model="clientId" />
      </div>
      <div>
        State
        <input v-model="state" />
      </div>
      <div class="btn-group text-center">
        <div
          @click="iconOnly = false"
          :class="!iconOnly ? 'active' : null"
          class="col-6"
        >
          Text and Icon
        </div>
        <div
          @click="iconOnly = true"
          :class="iconOnly ? 'active' : null"
          class="col-6"
        >
          Icon only
        </div>
      </div>

      Size:
      <div class="btn-group text-center">
        <div
          v-for="s in sizes"
          @click="size = s"
          :key="s"
          :class="size ===  s? 'active' : null"
          class="col-4"
        >
          {{ s }}
        </div>
      </div>
      Border radius:
      <div class="btn-group text-center">
        <div
          v-for="r in radiuses"
          @click="radius = r"
          :key="r"
          :class="radius === r ? 'active' : null"
          class="col-4"
        >
          {{ r }}
        </div>
      </div>
      Color
      <div class="btn-group text-center">
        <div
          v-for="c in colors"
          @click="color = c"
          :key="c"
          :class="color === c ? 'active' : null"
          class="col-4"
        >
          {{ c }}
        </div>
      </div>
    </div>
    <div class="pa-8">
      {{ redirectUri }}
      <tw-login-button
        :redirect="redirectUri"
        :client="clientId"
        :state="state"
        :icon="iconOnly"
        :color="color"
        :size="size"
        :borders="radius" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonConfigurator',
  props: {
    msg: String,
  },
  data() {
    return {
      iconOnly: false,
      clientId: '',
      redirectUri: '',
      state: '',
      size: 'large',
      radius: 'default',
      color: 'slate',
      sizes: ['large', 'medium', 'small'],
      radiuses: ['default', 'rounded', 'square'],
      colors: ['white', 'slate', 'indigo', 'pink'],
    };
  },
  computed: {
    isValid() {
      return this.redirectUri !== '' && this.clientId !== '';
    },
  },
};
</script>
<style scoped lang="scss">
.d-flex {
  display: flex;
}

.pa-8 {
  padding: 32px;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.col-6 {
  width: 50%;
}

.col-4 {
  width: 33%;
}

.btn-group {
  display: flex;
  background-color: #F5F7FA;
  color: #0B0E1F;
  border-radius: 3px;
  border: 1px solid #C5CADA;
  .active {
    background-color: #494E6A;
    color: white;
  }
  > div {
    padding: 16px 4px;
  }
}
</style>
