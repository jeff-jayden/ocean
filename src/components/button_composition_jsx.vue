<script lang="jsx">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '按钮',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const clickCount = ref(0);

    const handleClick = () => {
      clickCount.value++;
      props.onClick();
    };

    return () => (
      <button class="active" onClick={handleClick}>
        {props.text} - 点击次数: {clickCount.value}
      </button>
    );
  },
});
</script>

<style scoped>
.active {
  padding: 10px;
  background-color: #fff;
  border: #909399 1px solid;
}

</style>
