import { defineComponent, ref, h, render } from 'vue';

export default defineComponent(
  (props) => {
    const count = ref(0);

    const add = () => {
      count.value++;
    };

    return function () {
      return (
        <>
          <div>{count.value}</div>
          <button onClick={add}>click me</button>
        </>
      );
    };

    /* return {
      count,
      add,
      render() {
        return (
          <>
            {props.text}
            <div>{count.value}</div>
            <button onClick={add}>click me</button>
          </>
        );
      },
    }; */
  },
  {
    props: {
      text: String,
    },
  }
);
