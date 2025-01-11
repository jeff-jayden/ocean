import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '按钮'
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  setup(props) {
    const clickCount = ref(0);

    const handleClick = () => {
      clickCount.value++;
      props.onClick();
    };

    return () => (
      <button onClick={handleClick}>
        {props.text} - 点击次数: {clickCount.value}
      </button>
    );
  }
});

// 写法差不多，只是一个函数，一个对象的形式

// export default defineComponent((props, ctx, { emit }) => {
//
// }, {
//   props: {},
// });
